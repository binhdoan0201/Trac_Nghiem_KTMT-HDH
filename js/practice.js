// Practice Mode Logic (Ôn tập tức thì với phản hồi ngay, tự động xáo đáp án & Leitner Spaced Repetition)

const Practice = {
  shuffledQuestionsMap: {}, // Cache các câu hỏi đã xáo đáp án trong phiên học { [qid]: shuffledQ }
  filteredQuestions: [],
  currentIndex: 0,
  currentFilter: {
    chapter: 'all',
    tag: 'all', // 'all', 'calc', 'bookmark', 'wrong', 'box1', 'box2', 'box3'
    search: '',
    targetedQids: null // Array of specific QIDs if in targeted drill mode
  },
  targetedBannerText: '',

  init() {
    this.generateAllShuffledQuestions();
    this.bindEvents();
    this.applyFilters();
    this.renderQuestion(0);
    this.renderPalette();
  },

  // Tạo bản xáo trộn đáp án A/B/C/D bằng Fisher-Yates cho toàn bộ 150 câu hỏi
  generateAllShuffledQuestions() {
    this.shuffledQuestionsMap = {};
    QUIZ_DATA.forEach(q => {
      this.shuffledQuestionsMap[q.id] = shuffleQuestionOptions(q);
    });
  },

  // Xáo lại toàn bộ đáp án khi người dùng bấm nút "Xáo lại đáp án"
  reshuffleAllOptions() {
    this.generateAllShuffledQuestions();
    this.renderQuestion(this.currentIndex);
    this.showToast('🔀 Đã xáo ngẫu nhiên lại toàn bộ đáp án A/B/C/D!');
  },

  bindEvents() {
    // Chapter filter
    const chapterSelect = document.getElementById('practice-chapter-select');
    if (chapterSelect) {
      chapterSelect.addEventListener('change', (e) => {
        this.currentFilter.chapter = e.target.value;
        this.currentFilter.targetedQids = null;
        this.applyFilters();
      });
    }

    // Search filter
    const searchInput = document.getElementById('practice-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentFilter.search = e.target.value.trim().toLowerCase();
        this.applyFilters();
      });
    }

    // Filter pills (Tất cả, Bài toán, Đánh dấu, Câu sai, Hộp 1, Hộp 2, Hộp 3)
    const pills = document.querySelectorAll('.practice-filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.currentFilter.tag = pill.dataset.tag;
        this.currentFilter.targetedQids = null;
        this.applyFilters();
      });
    });

    // Navigation buttons
    document.getElementById('btn-prev')?.addEventListener('click', () => this.prevQuestion());
    document.getElementById('btn-next')?.addEventListener('click', () => this.nextQuestion());
    document.getElementById('btn-random')?.addEventListener('click', () => this.randomQuestion());

    // Reshuffle options button
    document.getElementById('btn-reshuffle-options')?.addEventListener('click', () => {
      this.reshuffleAllOptions();
    });

    // Bookmark button
    document.getElementById('btn-practice-bookmark')?.addEventListener('click', () => {
      const q = this.getCurrentQuestion();
      if (!q) return;
      const isBookmarked = Storage.toggleBookmark(q.originalId || q.id);
      this.updateBookmarkButton(isBookmarked);
      this.renderPalette();
    });

    // Exit targeted drill mode button
    document.getElementById('btn-exit-targeted-drill')?.addEventListener('click', () => {
      this.exitTargetedDrill();
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (!document.getElementById('view-practice')?.classList.contains('active')) return;
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'SELECT') return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        this.handleSelectOption(key);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
        this.handleSelectOption(map[e.key]);
      } else if (e.key === 'ArrowRight') {
        this.nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        this.prevQuestion();
      } else if (e.key === 'r' || e.key === 'R') {
        this.reshuffleAllOptions();
      }
    });
  },

  // Chế độ luyện tập chuyên sâu cho một danh sách câu cụ thể (ví dụ: câu sai bài thi)
  drillQuestions(qids, label = 'Tập trung câu cần cải thiện') {
    this.currentFilter.targetedQids = qids;
    this.targetedBannerText = label;
    this.applyFilters();
  },

  exitTargetedDrill() {
    this.currentFilter.targetedQids = null;
    this.targetedBannerText = '';
    this.applyFilters();
  },

  applyFilters() {
    const progress = Storage.getProgress();
    const bookmarks = Storage.getBookmarks();
    const leitner = Storage.getLeitnerData();

    // Check targeted banner
    const banner = document.getElementById('targeted-drill-banner');
    const bannerText = document.getElementById('targeted-drill-title');
    if (banner) {
      if (this.currentFilter.targetedQids && this.currentFilter.targetedQids.length > 0) {
        banner.style.display = 'flex';
        if (bannerText) bannerText.textContent = `${this.targetedBannerText} (${this.currentFilter.targetedQids.length} câu)`;
      } else {
        banner.style.display = 'none';
      }
    }

    this.filteredQuestions = QUIZ_DATA.map(q => this.shuffledQuestionsMap[q.id] || q).filter(q => {
      const qid = q.originalId || q.id;

      // Targeted drill filter (highest priority)
      if (this.currentFilter.targetedQids) {
        return this.currentFilter.targetedQids.includes(qid);
      }

      // Chapter filter
      if (this.currentFilter.chapter !== 'all' && q.chapterId !== parseInt(this.currentFilter.chapter)) {
        return false;
      }

      // Tag filter
      if (this.currentFilter.tag === 'calc' && !q.isCalculation) {
        return false;
      }
      if (this.currentFilter.tag === 'bookmark' && !bookmarks.includes(qid)) {
        return false;
      }
      if (this.currentFilter.tag === 'wrong') {
        const p = progress[qid];
        if (!p || p.isCorrect) return false;
      }

      // Leitner box filter
      if (this.currentFilter.tag === 'box1') {
        const item = leitner[qid];
        if (item && item.level !== 1) return false;
      }
      if (this.currentFilter.tag === 'box2') {
        const item = leitner[qid];
        if (!item || item.level !== 2) return false;
      }
      if (this.currentFilter.tag === 'box3') {
        const item = leitner[qid];
        if (!item || item.level !== 3) return false;
      }

      // Search filter
      if (this.currentFilter.search) {
        const query = this.currentFilter.search;
        const text = `${qid} ${q.question} ${Object.values(q.options).join(' ')} ${q.explanation}`.toLowerCase();
        if (!text.includes(query)) return false;
      }

      return true;
    });

    this.currentIndex = 0;
    this.renderQuestion(0);
    this.renderPalette();
  },

  getCurrentQuestion() {
    return this.filteredQuestions[this.currentIndex];
  },

  renderQuestion(index) {
    if (this.filteredQuestions.length === 0) {
      document.getElementById('practice-question-container').innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">🔍</div>
          <h3>Không tìm thấy câu hỏi phù hợp</h3>
          <p>Hãy thử chọn bộ lọc khác hoặc nhấn "Trở về tất cả".</p>
        </div>
      `;
      document.getElementById('practice-actions').style.display = 'none';
      return;
    }

    document.getElementById('practice-actions').style.display = 'flex';
    this.currentIndex = Math.max(0, Math.min(index, this.filteredQuestions.length - 1));
    const q = this.getCurrentQuestion();
    const qid = q.originalId || q.id;
    const progress = Storage.getProgress();
    const answered = progress[qid];
    const isBookmarked = Storage.isBookmarked(qid);
    const leitnerLevel = Storage.getLeitnerLevel(qid);

    // Update Counter & Meta
    document.getElementById('practice-q-index').textContent = `Câu ${qid} / 150`;
    document.getElementById('practice-part-badge').textContent = q.partTitle;

    // Leitner level badge
    const leitnerBadge = document.getElementById('practice-leitner-badge');
    if (leitnerBadge) {
      if (leitnerLevel === 3) {
        leitnerBadge.className = 'badge badge-leitner-3';
        leitnerBadge.textContent = '🟢 Hộp 3: Đã thành thạo';
      } else if (leitnerLevel === 2) {
        leitnerBadge.className = 'badge badge-leitner-2';
        leitnerBadge.textContent = '🟡 Hộp 2: Đang rèn luyện';
      } else {
        leitnerBadge.className = 'badge badge-leitner-1';
        leitnerBadge.textContent = '🔴 Hộp 1: Cần ôn luyện';
      }
    }

    const calcBadge = document.getElementById('practice-calc-badge');
    if (calcBadge) {
      calcBadge.style.display = q.isCalculation ? 'inline-flex' : 'none';
    }

    this.updateBookmarkButton(isBookmarked);

    // Question title
    document.getElementById('practice-q-text').textContent = q.question;

    // Options list (Đã xáo trộn ngẫu nhiên A, B, C, D)
    const optionsContainer = document.getElementById('practice-options-list');
    optionsContainer.innerHTML = '';

    ['A', 'B', 'C', 'D'].forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.key = key;

      btn.innerHTML = `
        <span class="option-key">${key}</span>
        <span class="option-text">${q.options[key]}</span>
      `;

      if (answered) {
        if (key === q.answer) {
          btn.classList.add('correct');
        } else if (key === answered.selected && !answered.isCorrect) {
          btn.classList.add('incorrect');
        }
      }

      btn.addEventListener('click', () => this.handleSelectOption(key));
      optionsContainer.appendChild(btn);
    });

    // Explanation Box
    const explBox = document.getElementById('practice-explanation');
    const explContent = document.getElementById('practice-explanation-content');
    if (answered) {
      explContent.innerHTML = `
        <div style="margin-bottom: 6px;">
          <strong>Đáp án đúng: ${q.answer}</strong> — ${q.options[q.answer]}
          ${q.originalAnswer !== q.answer ? `<span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 8px;">(Vị trí gốc trong đề cương: ${q.originalAnswer})</span>` : ''}
        </div>
        <div>${q.explanation}</div>
      `;
      explBox.classList.add('show');
    } else {
      explBox.classList.remove('show');
    }

    this.updatePaletteActive();
  },

  handleSelectOption(selectedKey) {
    const q = this.getCurrentQuestion();
    if (!q) return;
    const qid = q.originalId || q.id;

    const isCorrect = (selectedKey === q.answer);
    Storage.saveAnswer(qid, selectedKey, isCorrect);

    // Highlight options
    const optionBtns = document.querySelectorAll('#practice-options-list .option-btn');
    optionBtns.forEach(btn => {
      const k = btn.dataset.key;
      btn.classList.remove('correct', 'incorrect', 'shake');

      if (k === q.answer) {
        btn.classList.add('correct');
      }
      if (k === selectedKey && !isCorrect) {
        btn.classList.add('incorrect', 'shake');
      }
    });

    // Show Explanation
    const explBox = document.getElementById('practice-explanation');
    const explContent = document.getElementById('practice-explanation-content');
    explContent.innerHTML = `
      <div style="margin-bottom: 6px;">
        <strong>Đáp án đúng: ${q.answer}</strong> — ${q.options[q.answer]}
        ${q.originalAnswer !== q.answer ? `<span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 8px;">(Vị trí gốc trong đề cương: ${q.originalAnswer})</span>` : ''}
      </div>
      <div>${q.explanation}</div>
    `;
    explBox.classList.add('show');

    // Update Leitner badge display
    const newLevel = Storage.getLeitnerLevel(qid);
    const leitnerBadge = document.getElementById('practice-leitner-badge');
    if (leitnerBadge) {
      if (newLevel === 3) {
        leitnerBadge.className = 'badge badge-leitner-3';
        leitnerBadge.textContent = '🟢 Hộp 3: Đã thành thạo';
      } else if (newLevel === 2) {
        leitnerBadge.className = 'badge badge-leitner-2';
        leitnerBadge.textContent = '🟡 Hộp 2: Đang rèn luyện';
      } else {
        leitnerBadge.className = 'badge badge-leitner-1';
        leitnerBadge.textContent = '🔴 Hộp 1: Cần ôn luyện';
      }
    }

    // Update Palette
    this.renderPalette();
  },

  updateBookmarkButton(isBookmarked) {
    const btn = document.getElementById('btn-practice-bookmark');
    if (!btn) return;
    if (isBookmarked) {
      btn.classList.add('bookmarked');
      btn.title = "Bỏ đánh dấu câu hỏi này";
      btn.innerHTML = "★";
    } else {
      btn.classList.remove('bookmarked');
      btn.title = "Đánh dấu câu hỏi này";
      btn.innerHTML = "☆";
    }
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.renderQuestion(this.currentIndex - 1);
    }
  },

  nextQuestion() {
    if (this.currentIndex < this.filteredQuestions.length - 1) {
      this.renderQuestion(this.currentIndex + 1);
    }
  },

  randomQuestion() {
    if (this.filteredQuestions.length <= 1) return;
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * this.filteredQuestions.length);
    } while (randomIndex === this.currentIndex);
    this.renderQuestion(randomIndex);
  },

  jumpToQuestionId(qid) {
    const idx = this.filteredQuestions.findIndex(q => (q.originalId || q.id) === qid);
    if (idx !== -1) {
      this.renderQuestion(idx);
    } else {
      // Reset filter to All to jump
      this.currentFilter.chapter = 'all';
      this.currentFilter.tag = 'all';
      this.currentFilter.search = '';
      this.currentFilter.targetedQids = null;
      document.getElementById('practice-chapter-select').value = 'all';
      document.querySelectorAll('.practice-filter-pill').forEach(p => p.classList.remove('active'));
      document.querySelector('.practice-filter-pill[data-tag="all"]')?.classList.add('active');
      this.applyFilters();
      const newIdx = this.filteredQuestions.findIndex(q => (q.originalId || q.id) === qid);
      if (newIdx !== -1) this.renderQuestion(newIdx);
    }
  },

  renderPalette() {
    const grid = document.getElementById('practice-palette-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const progress = Storage.getProgress();
    const bookmarks = Storage.getBookmarks();
    const currentQ = this.getCurrentQuestion();
    const currentQid = currentQ ? (currentQ.originalId || currentQ.id) : null;

    // Render all 150 questions in the palette grid
    QUIZ_DATA.forEach(q => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = q.id;
      btn.dataset.id = q.id;

      if (currentQid && q.id === currentQid) {
        btn.classList.add('current');
      }

      const p = progress[q.id];
      if (p) {
        btn.classList.add(p.isCorrect ? 'correct' : 'incorrect');
      }

      if (bookmarks.includes(q.id)) {
        btn.classList.add('flagged');
      }

      btn.addEventListener('click', () => this.jumpToQuestionId(q.id));
      grid.appendChild(btn);
    });

    // Update status counts
    const answeredTotal = Object.keys(progress).length;
    const correctTotal = Object.values(progress).filter(p => p.isCorrect).length;
    document.getElementById('practice-stat-answered').textContent = `${answeredTotal}/150`;
    document.getElementById('practice-stat-correct').textContent = `${correctTotal}`;
  },

  updatePaletteActive() {
    const currentQ = this.getCurrentQuestion();
    if (!currentQ) return;
    const currentQid = currentQ.originalId || currentQ.id;
    const btns = document.querySelectorAll('#practice-palette-grid .palette-btn');
    btns.forEach(btn => {
      if (parseInt(btn.dataset.id) === currentQid) {
        btn.classList.add('current');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        btn.classList.remove('current');
      }
    });
  },

  showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'app-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }
};
