// Exam Mode Logic (Chế độ thi thử mô phỏng thực tế với đếm ngược, xáo đề & xáo đáp án tự động)

// Fisher-Yates (Knuth) Shuffle Algorithm - Đảm bảo phân phối đều 100% không thiên lệch
function fisherYates(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Hàm xáo trộn 4 đáp án A/B/C/D của một câu hỏi, giữ vững tính đúng của đáp án
function shuffleQuestionOptions(q) {
  const origKeys = ['A', 'B', 'C', 'D'];
  const shuffledSourceKeys = fisherYates(origKeys); // ví dụ: ['C', 'A', 'D', 'B']

  const newOptions = {};
  let newAnswer = 'A';
  const mapping = {};

  origKeys.forEach((newKey, idx) => {
    const srcKey = shuffledSourceKeys[idx];
    newOptions[newKey] = q.options[srcKey];
    mapping[newKey] = srcKey;
    if (srcKey === q.answer) {
      newAnswer = newKey;
    }
  });

  return {
    ...q,
    originalId: q.id,
    originalAnswer: q.answer,
    originalOptions: q.options,
    options: newOptions,
    answer: newAnswer,
    keyMapping: mapping
  };
}

const Exam = {
  state: 'setup', // 'setup', 'testing', 'result', 'review'
  examQuestions: [],
  currentIndex: 0,
  userAnswers: {}, // { [index]: 'A' | 'B' | 'C' | 'D' }
  flaggedQuestions: new Set(),
  durationSeconds: 50 * 60,
  remainingSeconds: 50 * 60,
  timerInterval: null,
  selectedPaper: 'paper1', // 'paper1', 'paper2', 'paper3', 'custom'
  currentPaperTitle: 'Bài thi số 1 (Câu 1 – 50)',
  examConfig: {
    count: 50,
    chapter: 'all',
    shuffle: true,
    shuffleOptions: true
  },
  lastResult: null,

  init() {
    this.bindEvents();
    this.selectPaper('paper1');
    this.showSetupScreen();
  },

  bindEvents() {
    // Select Exam Paper Cards
    const paperCards = document.querySelectorAll('.exam-paper-card');
    paperCards.forEach(card => {
      card.addEventListener('click', () => {
        const paperType = card.dataset.paper;
        this.selectPaper(paperType);
      });
    });

    // Start exam button
    document.getElementById('btn-start-exam')?.addEventListener('click', () => this.startExam());

    // Navigation during exam
    document.getElementById('btn-exam-prev')?.addEventListener('click', () => this.prevQuestion());
    document.getElementById('btn-exam-next')?.addEventListener('click', () => this.nextQuestion());

    // Flag for review button
    document.getElementById('btn-exam-flag')?.addEventListener('click', () => this.toggleFlagCurrent());

    // Submit exam button
    document.getElementById('btn-exam-submit')?.addEventListener('click', () => this.confirmSubmit());

    // Modal submit confirm
    document.getElementById('btn-modal-confirm-submit')?.addEventListener('click', () => {
      document.getElementById('modal-submit-confirm')?.classList.remove('show');
      this.finishExam();
    });
    document.getElementById('btn-modal-cancel-submit')?.addEventListener('click', () => {
      document.getElementById('modal-submit-confirm')?.classList.remove('show');
    });

    // Review, Retry & Practice wrong buttons
    document.getElementById('btn-exam-review')?.addEventListener('click', () => this.startReview());
    document.getElementById('btn-exam-retry')?.addEventListener('click', () => this.showSetupScreen());
    document.getElementById('btn-exam-retake')?.addEventListener('click', () => this.retakeCurrentExam());
    document.getElementById('btn-exam-practice-wrong')?.addEventListener('click', () => this.practiceWrongFromExam());
    document.getElementById('btn-review-back-result')?.addEventListener('click', () => this.showResultScreen());

    // Keyboard navigation during exam
    window.addEventListener('keydown', (e) => {
      if (this.state !== 'testing') return;
      if (!document.getElementById('view-exam')?.classList.contains('active')) return;
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'SELECT') return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        this.selectOption(key);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
        this.selectOption(map[e.key]);
      } else if (e.key === 'ArrowRight') {
        this.nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        this.prevQuestion();
      } else if (e.key === 'f' || e.key === 'F') {
        this.toggleFlagCurrent();
      }
    });
  },

  selectPaper(paperType) {
    this.selectedPaper = paperType;

    // Update active class on paper cards
    document.querySelectorAll('.exam-paper-card').forEach(c => {
      c.classList.toggle('active', c.dataset.paper === paperType);
    });

    // Show or hide custom options box
    const customBox = document.getElementById('exam-custom-options');
    if (customBox) {
      customBox.style.display = (paperType === 'custom') ? 'block' : 'none';
    }

    // Set title and default duration
    if (paperType === 'paper1') {
      this.currentPaperTitle = 'Bài thi số 1: Kiến trúc máy tính & Biểu diễn số học (Câu 1 – 50)';
      this.durationSeconds = 50 * 60;
    } else if (paperType === 'paper2') {
      this.currentPaperTitle = 'Bài thi số 2: CPU Pipeline, Phân cấp bộ nhớ & Cache (Câu 51 – 100)';
      this.durationSeconds = 50 * 60;
    } else if (paperType === 'paper3') {
      this.currentPaperTitle = 'Bài thi số 3: Hệ điều hành, Tiến trình, Bộ nhớ ảo & Đĩa (Câu 101 – 150)';
      this.durationSeconds = 50 * 60;
    } else {
      this.currentPaperTitle = 'Bài thi Tổng hợp / Tùy chỉnh';
    }
  },

  showSetupScreen() {
    this.state = 'setup';
    clearInterval(this.timerInterval);
    document.getElementById('exam-setup-view').style.display = 'block';
    document.getElementById('exam-testing-view').style.display = 'none';
    document.getElementById('exam-result-view').style.display = 'none';
    document.getElementById('exam-review-view').style.display = 'none';
  },

  startExam() {
    let pool = [];

    // Chọn câu hỏi theo Đề thi (Phương án A: 150 câu chia đều 3 bài 50 câu)
    if (this.selectedPaper === 'paper1') {
      pool = QUIZ_DATA.filter(q => q.id >= 1 && q.id <= 50);
      this.currentPaperTitle = 'Bài thi số 1 (Câu 1 – 50)';
      this.durationSeconds = 50 * 60;
    } else if (this.selectedPaper === 'paper2') {
      pool = QUIZ_DATA.filter(q => q.id >= 51 && q.id <= 100);
      this.currentPaperTitle = 'Bài thi số 2 (Câu 51 – 100)';
      this.durationSeconds = 50 * 60;
    } else if (this.selectedPaper === 'paper3') {
      pool = QUIZ_DATA.filter(q => q.id >= 101 && q.id <= 150);
      this.currentPaperTitle = 'Bài thi số 3 (Câu 101 – 150)';
      this.durationSeconds = 50 * 60;
    } else {
      // Custom / Tổng hợp
      const countSelect = document.getElementById('exam-count-select');
      const chapterSelect = document.getElementById('exam-chapter-select');
      const count = parseInt(countSelect?.value || '50');
      const chapter = chapterSelect?.value || 'all';

      let customPool = [...QUIZ_DATA];
      if (chapter !== 'all') {
        customPool = customPool.filter(q => q.chapterId === parseInt(chapter));
        this.currentPaperTitle = `Bài thi Chuyên đề ${chapter} (${Math.min(count, customPool.length)} câu)`;
      } else {
        this.currentPaperTitle = `Bài thi Tổng hợp (${Math.min(count, customPool.length)} câu)`;
      }

      // Xáo trộn bằng Fisher-Yates trước khi cắt slice
      customPool = fisherYates(customPool);
      pool = customPool.slice(0, Math.min(count, customPool.length));
      this.durationSeconds = Math.max(15, pool.length) * 60;
    }

    // Luôn xáo trộn thứ tự các câu hỏi trong đề bằng Fisher-Yates
    pool = fisherYates(pool);

    // Luôn xáo trộn cả 4 đáp án A/B/C/D cho từng câu hỏi
    this.examQuestions = pool.map(q => shuffleQuestionOptions(q));

    this.userAnswers = {};
    this.flaggedQuestions.clear();
    this.currentIndex = 0;
    this.remainingSeconds = this.durationSeconds;

    this.state = 'testing';
    document.getElementById('exam-setup-view').style.display = 'none';
    document.getElementById('exam-testing-view').style.display = 'block';
    document.getElementById('exam-result-view').style.display = 'none';
    document.getElementById('exam-review-view').style.display = 'none';

    // Hiển thị tên bài thi đang làm
    const examTitleBadge = document.getElementById('exam-current-paper-title');
    if (examTitleBadge) {
      examTitleBadge.textContent = this.currentPaperTitle;
    }

    this.startTimer();
    this.renderQuestion(0);
    this.renderPalette();
  },

  retakeCurrentExam() {
    this.startExam();
  },

  practiceWrongFromExam() {
    if (!this.lastResult || !this.lastResult.wrongQids || this.lastResult.wrongQids.length === 0) {
      alert('Bạn không có câu sai nào trong bài thi này!');
      return;
    }

    // Switch to practice view and drill these specific questions
    const navPractice = document.querySelector('.nav-tab[data-target="view-practice"]');
    navPractice?.click();

    Practice.drillQuestions(
      this.lastResult.wrongQids,
      `Câu làm sai từ "${this.currentPaperTitle}"`
    );
  },

  startTimer() {
    clearInterval(this.timerInterval);
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateTimerDisplay();

      if (this.remainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        alert('Hết thời gian làm bài! Hệ thống đang tự động nộp bài thi của bạn.');
        this.finishExam();
      }
    }, 1000);
  },

  updateTimerDisplay() {
    const badge = document.getElementById('exam-timer');
    if (!badge) return;

    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    badge.textContent = `⏱️ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (this.remainingSeconds <= 300) {
      badge.classList.add('warning');
    } else {
      badge.classList.remove('warning');
    }
  },

  renderQuestion(index) {
    this.currentIndex = Math.max(0, Math.min(index, this.examQuestions.length - 1));
    const q = this.examQuestions[this.currentIndex];

    // Meta
    document.getElementById('exam-q-counter').textContent = `Câu ${this.currentIndex + 1} / ${this.examQuestions.length}`;
    document.getElementById('exam-part-badge').textContent = q.partTitle;

    // Flag button state
    const flagBtn = document.getElementById('btn-exam-flag');
    if (flagBtn) {
      const isFlagged = this.flaggedQuestions.has(this.currentIndex);
      flagBtn.classList.toggle('active', isFlagged);
      flagBtn.textContent = isFlagged ? '🚩 Bỏ đánh dấu' : '🏳️ Đánh dấu xem lại';
    }

    // Title
    document.getElementById('exam-q-text').textContent = q.question;

    // Options
    const optionsContainer = document.getElementById('exam-options-list');
    optionsContainer.innerHTML = '';

    const selectedOption = this.userAnswers[this.currentIndex];

    ['A', 'B', 'C', 'D'].forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      if (selectedOption === key) {
        btn.classList.add('selected-exam');
      }

      btn.innerHTML = `
        <span class="option-key">${key}</span>
        <span class="option-text">${q.options[key]}</span>
      `;

      btn.addEventListener('click', () => {
        this.selectOption(key);
      });

      optionsContainer.appendChild(btn);
    });

    this.updatePaletteActive();
  },

  selectOption(key) {
    this.userAnswers[this.currentIndex] = key;
    this.renderQuestion(this.currentIndex);
    this.renderPalette();
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.renderQuestion(this.currentIndex - 1);
    }
  },

  nextQuestion() {
    if (this.currentIndex < this.examQuestions.length - 1) {
      this.renderQuestion(this.currentIndex + 1);
    }
  },

  toggleFlagCurrent() {
    if (this.flaggedQuestions.has(this.currentIndex)) {
      this.flaggedQuestions.delete(this.currentIndex);
    } else {
      this.flaggedQuestions.add(this.currentIndex);
    }
    this.renderQuestion(this.currentIndex);
    this.renderPalette();
  },

  renderPalette() {
    const grid = document.getElementById('exam-palette-grid');
    if (!grid) return;
    grid.innerHTML = '';

    this.examQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;

      if (idx === this.currentIndex) {
        btn.classList.add('current');
      }

      if (this.userAnswers[idx] !== undefined) {
        btn.classList.add('exam-answered');
      }

      if (this.flaggedQuestions.has(idx)) {
        btn.classList.add('exam-marked');
      }

      btn.addEventListener('click', () => this.renderQuestion(idx));
      grid.appendChild(btn);
    });

    // Update answered count
    const answeredCount = Object.keys(this.userAnswers).length;
    document.getElementById('exam-answered-count').textContent = `${answeredCount} / ${this.examQuestions.length}`;
  },

  updatePaletteActive() {
    const btns = document.querySelectorAll('#exam-palette-grid .palette-btn');
    btns.forEach((btn, idx) => {
      btn.classList.toggle('current', idx === this.currentIndex);
    });
  },

  confirmSubmit() {
    const total = this.examQuestions.length;
    const answered = Object.keys(this.userAnswers).length;
    const unAnswered = total - answered;

    const modal = document.getElementById('modal-submit-confirm');
    const msg = document.getElementById('modal-submit-msg');

    if (unAnswered > 0) {
      msg.innerHTML = `Bạn còn <strong>${unAnswered}</strong> câu hỏi chưa trả lời.<br>Bạn có chắc chắn muốn nộp bài ngay bây giờ?`;
    } else {
      msg.textContent = `Bạn đã hoàn thành tất cả ${total} câu hỏi. Bạn có muốn nộp bài để xem kết quả?`;
    }

    modal?.classList.add('show');
  },

  finishExam() {
    clearInterval(this.timerInterval);
    const timeSpentSeconds = this.durationSeconds - this.remainingSeconds;
    const total = this.examQuestions.length;
    let correctCount = 0;
    const chapterStats = {};
    const wrongQids = [];

    this.examQuestions.forEach((q, idx) => {
      const userChoice = this.userAnswers[idx];
      const isCorrect = (userChoice === q.answer);
      if (isCorrect) {
        correctCount++;
      } else {
        wrongQids.push(q.originalId || q.id);
      }

      // Track by chapter
      if (!chapterStats[q.chapterTitle]) {
        chapterStats[q.chapterTitle] = { total: 0, correct: 0 };
      }
      chapterStats[q.chapterTitle].total++;
      if (isCorrect) chapterStats[q.chapterTitle].correct++;
    });

    const score10 = ((correctCount / total) * 10).toFixed(1);
    const percentage = Math.round((correctCount / total) * 100);

    this.lastResult = {
      paperTitle: this.currentPaperTitle,
      score10,
      percentage,
      correctCount,
      wrongCount: total - correctCount,
      wrongQids: wrongQids,
      total,
      timeSpentSeconds,
      chapterStats,
      questions: this.examQuestions,
      answers: this.userAnswers
    };

    // Save to Storage
    Storage.saveExamResult({
      paperName: this.currentPaperTitle,
      score: score10,
      total: total,
      correct: correctCount,
      wrong: total - correctCount,
      wrongQids: wrongQids,
      duration: `${Math.floor(timeSpentSeconds / 60)}p ${timeSpentSeconds % 60}s`
    });

    this.showResultScreen();
  },

  showResultScreen() {
    this.state = 'result';
    document.getElementById('exam-setup-view').style.display = 'none';
    document.getElementById('exam-testing-view').style.display = 'none';
    document.getElementById('exam-result-view').style.display = 'block';
    document.getElementById('exam-review-view').style.display = 'none';

    const res = this.lastResult;
    document.getElementById('result-paper-name').textContent = res.paperTitle;
    document.getElementById('result-score-10').textContent = res.score10;
    document.getElementById('result-percentage').textContent = `${res.percentage}%`;
    document.getElementById('result-correct').textContent = res.correctCount;
    document.getElementById('result-wrong').textContent = res.wrongCount;
    document.getElementById('result-total').textContent = res.total;

    const mins = Math.floor(res.timeSpentSeconds / 60);
    const secs = res.timeSpentSeconds % 60;
    document.getElementById('result-time').textContent = `${mins}m ${secs}s`;

    // Rating message
    let rating = 'Xuất sắc! 🎉 Kiến thức của bạn rất vững vàng, sẵn sàng đạt điểm tuyệt đối!';
    if (res.score10 < 5) rating = 'Cần củng cố thêm! Hãy ôn lại các câu làm sai và xem lại cẩm nang công thức.';
    else if (res.score10 < 7) rating = 'Khá tốt! Bạn cần luyện thêm một số bài toán tính toán và khái niệm CPU/Bộ nhớ.';
    else if (res.score10 < 8.5) rating = 'Giỏi! Phong độ rất tốt, chỉ cần lưu ý vài bẫy nhỏ để đạt điểm 10!';
    document.getElementById('result-rating-text').textContent = rating;

    // Show/hide button "Luyện tập ngay câu làm sai"
    const btnPracticeWrong = document.getElementById('btn-exam-practice-wrong');
    if (btnPracticeWrong) {
      if (res.wrongCount > 0) {
        btnPracticeWrong.style.display = 'inline-flex';
        btnPracticeWrong.innerHTML = `🎯 Luyện Tập Ngay ${res.wrongCount} Câu Làm Sai`;
      } else {
        btnPracticeWrong.style.display = 'none';
      }
    }

    // Render Chapter breakdown
    const breakdownList = document.getElementById('result-breakdown-list');
    breakdownList.innerHTML = '';
    Object.entries(res.chapterStats).forEach(([chName, stat]) => {
      const pct = Math.round((stat.correct / stat.total) * 100);
      const row = document.createElement('div');
      row.style.marginBottom = '14px';
      row.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 4px;">
          <span><strong>${chName}</strong></span>
          <span>${stat.correct}/${stat.total} câu (${pct}%)</span>
        </div>
        <div style="height: 8px; background: var(--card-border); border-radius: 4px; overflow: hidden;">
          <div style="height: 100%; width: ${pct}%; background: ${pct >= 70 ? 'var(--success)' : (pct >= 50 ? 'var(--warning)' : 'var(--danger)')}; transition: width 0.6s ease;"></div>
        </div>
      `;
      breakdownList.appendChild(row);
    });
  },

  startReview() {
    this.state = 'review';
    document.getElementById('exam-setup-view').style.display = 'none';
    document.getElementById('exam-testing-view').style.display = 'none';
    document.getElementById('exam-result-view').style.display = 'none';
    document.getElementById('exam-review-view').style.display = 'block';

    const container = document.getElementById('exam-review-container');
    container.innerHTML = '';

    this.examQuestions.forEach((q, idx) => {
      const userChoice = this.userAnswers[idx];
      const isCorrect = (userChoice === q.answer);

      const card = document.createElement('div');
      card.className = 'card';
      card.style.borderLeft = `5px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`;
      card.style.marginBottom = '18px';

      let optionsHtml = '';
      ['A', 'B', 'C', 'D'].forEach(key => {
        let cls = '';
        if (key === q.answer) cls = 'correct';
        else if (key === userChoice && !isCorrect) cls = 'incorrect';

        optionsHtml += `
          <div class="option-btn ${cls}" style="cursor: default; pointer-events: none; margin-bottom: 8px;">
            <span class="option-key">${key}</span>
            <span class="option-text">${q.options[key]}</span>
          </div>
        `;
      });

      card.innerHTML = `
        <div class="question-meta">
          <div class="meta-badges">
            <span class="badge ${isCorrect ? 'badge-primary' : 'badge-warning'}">Câu ${idx + 1} (Đề cương gốc: Câu ${q.originalId || q.id})</span>
            <span class="badge" style="background: ${isCorrect ? 'var(--success-light)' : 'var(--danger-light)'}; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
              ${isCorrect ? '✓ Đúng' : (userChoice ? '✗ Sai' : '○ Bỏ qua')}
            </span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${q.partTitle}</span>
          </div>
        </div>
        <div class="question-title">${q.question}</div>
        <div class="options-list">${optionsHtml}</div>
        <div class="explanation-box show">
          <div class="explanation-header">💡 Hướng dẫn giải chi tiết</div>
          <div class="explanation-content">
            <div style="margin-bottom: 6px;"><strong>Đáp án chuẩn: ${q.answer}</strong> — ${q.options[q.answer]}</div>
            <div>${q.explanation}</div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
};
