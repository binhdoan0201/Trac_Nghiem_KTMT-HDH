// Main App Coordinator (Quản lý giao diện, thống kê Spaced Repetition, sao lưu dữ liệu & điều hướng)

document.addEventListener('DOMContentLoaded', () => {
  // Load settings
  const settings = Storage.getSettings();
  applyTheme(settings.theme || 'light');
  applyFontSize(settings.fontSize || 16);

  // Initialize Modules
  Practice.init();
  Exam.init();
  CheatSheet.render();
  renderStatsView();

  // Tab Switcher
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
      });

      const activeView = document.getElementById(target);
      if (activeView) {
        activeView.classList.add('active');
      }

      if (target === 'view-cheatsheet') {
        CheatSheet.render();
      } else if (target === 'view-stats') {
        renderStatsView();
      } else if (target === 'view-practice') {
        Practice.renderPalette();
      }
    });
  });

  // Theme Toggle Button
  const themeBtn = document.getElementById('btn-theme-toggle');
  themeBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    settings.theme = newTheme;
    Storage.saveSettings(settings);
  });

  // Font size scaler
  const fontDecBtn = document.getElementById('btn-font-dec');
  const fontIncBtn = document.getElementById('btn-font-inc');
  fontDecBtn?.addEventListener('click', () => {
    let size = parseInt(settings.fontSize || 16);
    if (size > 14) {
      size -= 1;
      settings.fontSize = size;
      applyFontSize(size);
      Storage.saveSettings(settings);
    }
  });
  fontIncBtn?.addEventListener('click', () => {
    let size = parseInt(settings.fontSize || 16);
    if (size < 22) {
      size += 1;
      settings.fontSize = size;
      applyFontSize(size);
      Storage.saveSettings(settings);
    }
  });

  // Reset Data Modal
  const resetBtn = document.getElementById('btn-reset-data');
  const resetModal = document.getElementById('modal-reset-confirm');
  resetBtn?.addEventListener('click', () => {
    resetModal?.classList.add('show');
  });
  document.getElementById('btn-modal-cancel-reset')?.addEventListener('click', () => {
    resetModal?.classList.remove('show');
  });
  document.getElementById('btn-modal-confirm-reset')?.addEventListener('click', () => {
    Storage.clearAll();
    resetModal?.classList.remove('show');
    Practice.generateAllShuffledQuestions();
    Practice.applyFilters();
    Practice.renderPalette();
    renderStatsView();
    alert('Đã xóa toàn bộ dữ liệu học tập và lịch sử thi trên thiết bị này thành công!');
  });
});

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const btn = document.getElementById('btn-theme-toggle');
    if (btn) btn.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    const btn = document.getElementById('btn-theme-toggle');
    if (btn) btn.textContent = '🌙';
  }
}

function applyFontSize(size) {
  document.documentElement.style.setProperty('--font-base', `${size}px`);
}

function renderStatsView() {
  const container = document.getElementById('stats-view-content');
  if (!container) return;

  const progress = Storage.getProgress();
  const bookmarks = Storage.getBookmarks();
  const history = Storage.getExamHistory();
  const leitnerSummary = Storage.getLeitnerSummary(QUIZ_DATA.length);

  const totalQuestions = QUIZ_DATA.length;
  const answeredCount = Object.keys(progress).length;
  const correctCount = Object.values(progress).filter(p => p.isCorrect).length;
  const wrongCount = answeredCount - correctCount;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // Percentage for Leitner Spaced Repetition Boxes
  const pct1 = Math.round((leitnerSummary.level1 / totalQuestions) * 100);
  const pct2 = Math.round((leitnerSummary.level2 / totalQuestions) * 100);
  const pct3 = Math.round((leitnerSummary.level3 / totalQuestions) * 100);

  // Wrong questions list from Practice
  const wrongQids = Object.entries(progress)
    .filter(([_, v]) => !v.isCorrect)
    .map(([k, _]) => parseInt(k));

  let wrongHtml = '';
  if (wrongQids.length === 0) {
    wrongHtml = `
      <div style="padding: 24px; text-align: center; color: var(--text-muted);">
        ✨ Sổ tay hiện chưa ghi nhận câu sai nào trong phiên ôn tập! Hãy làm bài thật tốt để giữ vững phong độ.
      </div>
    `;
  } else {
    wrongHtml = `
      <div style="margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <span style="font-weight: 600;">Danh sách <strong>${wrongQids.length}</strong> câu làm sai cần xem lại ngay:</span>
        <button class="btn btn-secondary" style="font-size: 0.82rem; padding: 6px 14px;" onclick="goToPracticeWithWrong()">
          🚀 Luyện tập ngay toàn bộ câu sai này
        </button>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${wrongQids.map(qid => `
          <button class="palette-btn incorrect" style="width: 44px; height: 44px; font-weight: 700;" onclick="jumpToWrongQuestion(${qid})" title="Câu ${qid} - Bấm để ôn lại">
            ${qid}
          </button>
        `).join('')}
      </div>
    `;
  }

  // Exam history list
  let historyHtml = '';
  if (history.length === 0) {
    historyHtml = `
      <div style="padding: 24px; text-align: center; color: var(--text-muted);">
        Chưa có lượt thi thử nào được ghi lại. Hãy chọn tab <strong>"⏱️ Thi Thử"</strong> để bắt đầu thử sức với Bài thi số 1, 2, 3!
      </div>
    `;
  } else {
    historyHtml = `
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
          <thead>
            <tr style="border-bottom: 2px solid var(--card-border); color: var(--text-muted);">
              <th style="padding: 10px 8px;">Thời gian</th>
              <th style="padding: 10px 8px;">Tên bài thi</th>
              <th style="padding: 10px 8px;">Số câu</th>
              <th style="padding: 10px 8px;">Đúng / Sai</th>
              <th style="padding: 10px 8px;">Thời lượng</th>
              <th style="padding: 10px 8px; text-align: center;">Điểm số</th>
              <th style="padding: 10px 8px; text-align: right;">Hành động</th>
            </tr>
          </thead>
          <tbody>
            ${history.map(item => `
              <tr style="border-bottom: 1px solid var(--card-border);">
                <td style="padding: 10px 8px; white-space: nowrap;">${item.date}</td>
                <td style="padding: 10px 8px; font-weight: 600;">${item.paperName || 'Bài thi trắc nghiệm'}</td>
                <td style="padding: 10px 8px;">${item.total} câu</td>
                <td style="padding: 10px 8px;">
                  <span style="color: var(--success); font-weight: 600;">${item.correct}</span> / 
                  <span style="color: var(--danger); font-weight: 600;">${item.total - item.correct}</span>
                </td>
                <td style="padding: 10px 8px;">${item.duration}</td>
                <td style="padding: 10px 8px; text-align: center; font-weight: 800; font-size: 1rem; color: ${parseFloat(item.score) >= 8 ? 'var(--success)' : (parseFloat(item.score) >= 5 ? 'var(--warning)' : 'var(--danger)')};">
                  ${item.score}/10
                </td>
                <td style="padding: 10px 8px; text-align: right;">
                  ${item.wrongQids && item.wrongQids.length > 0 ? `
                    <button class="btn btn-secondary" style="font-size: 0.78rem; padding: 4px 10px;" onclick="drillExamMistakes(${item.id})">
                      🎯 Ôn ${item.wrongQids.length} câu sai
                    </button>
                  ` : `
                    <span style="color: var(--success); font-size: 0.8rem; font-weight: 600;">✓ Hoàn hảo</span>
                  `}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  container.innerHTML = `
    <div style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px;">
      <div>
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">
          📊 Phân Tích Năng Lực, Hệ Thống Spaced Repetition & Sổ Tay Sai
        </h2>
        <p style="color: var(--text-muted); font-size: 0.95rem;">
          Dữ liệu lưu trữ độc lập trên trình duyệt của bạn (bảo mật tuyệt đối, không cần đăng nhập).
        </p>
      </div>

      <!-- Backup / Restore Actions -->
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary" style="font-size: 0.82rem; padding: 7px 12px;" onclick="exportLearningData()" title="Tải xuống tệp sao lưu dữ liệu học tập">
          💾 Xuất Sao Lưu (JSON)
        </button>
        <button class="btn btn-secondary" style="font-size: 0.82rem; padding: 7px 12px;" onclick="triggerImportData()" title="Khôi phục dữ liệu từ tệp sao lưu">
          📂 Nhập Dữ Liệu
        </button>
        <input type="file" id="backup-file-input" accept=".json" style="display: none;" onchange="handleImportFile(event)">
      </div>
    </div>

    <!-- Summary Stats -->
    <div class="stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
      <div class="stat-box blue">
        <div class="number">${answeredCount}/${totalQuestions}</div>
        <div class="label">Câu đã làm (${Math.round((answeredCount/totalQuestions)*100)}%)</div>
      </div>
      <div class="stat-box green">
        <div class="number">${correctCount}</div>
        <div class="label">Làm đúng (${accuracy}% chính xác)</div>
      </div>
      <div class="stat-box red">
        <div class="number">${wrongCount}</div>
        <div class="label">Làm sai cần ôn lại</div>
      </div>
      <div class="stat-box" style="border-top: 3px solid var(--warning);">
        <div class="number" style="color: var(--warning);">${bookmarks.length}</div>
        <div class="label">Câu đã đánh dấu ⭐</div>
      </div>
    </div>

    <!-- Spaced Repetition (Leitner 3-Level Box Dashboard) -->
    <div class="card" style="margin-top: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 8px;">
          🧠 Hệ Thống Ghi Nhớ Giãn Cách Spaced Repetition (Hộp Leitner)
        </h3>
        <span style="font-size: 0.82rem; color: var(--text-muted);">
          Phương pháp học chủ động giúp ghi nhớ kiến thức dài hạn
        </span>
      </div>

      <!-- Spaced Repetition Progress Bar -->
      <div style="height: 12px; background: var(--card-border); border-radius: 6px; overflow: hidden; display: flex; margin-bottom: 18px;">
        <div style="width: ${pct3}%; background: var(--success); transition: width 0.6s ease;" title="Hộp 3: ${pct3}%"></div>
        <div style="width: ${pct2}%; background: var(--warning); transition: width 0.6s ease;" title="Hộp 2: ${pct2}%"></div>
        <div style="width: ${pct1}%; background: var(--danger); transition: width 0.6s ease;" title="Hộp 1: ${pct1}%"></div>
      </div>

      <!-- Leitner 3 Boxes Cards Grid -->
      <div class="leitner-grid">
        <div class="leitner-box box-1">
          <div class="leitner-badge">Hộp 1: Cần Ôn Luyện</div>
          <div class="leitner-count">${leitnerSummary.level1} <span>/ ${totalQuestions} câu (${pct1}%)</span></div>
          <p class="leitner-desc">Các câu chưa làm hoặc mới làm sai. Cần củng cố ngay để không mất điểm.</p>
          <button class="btn btn-leitner red" onclick="practiceLeitnerBox(1)">
            🎯 Ôn luyện Hộp 1
          </button>
        </div>

        <div class="leitner-box box-2">
          <div class="leitner-badge">Hộp 2: Đang Rèn Luyện</div>
          <div class="leitner-count">${leitnerSummary.level2} <span>/ ${totalQuestions} câu (${pct2}%)</span></div>
          <p class="leitner-desc">Các câu đã làm đúng 1 lần liên tiếp. Cần làm đúng thêm 1 lần nữa để nâng cấp lên Thành thạo.</p>
          <button class="btn btn-leitner yellow" onclick="practiceLeitnerBox(2)">
            ⚡ Ôn luyện Hộp 2
          </button>
        </div>

        <div class="leitner-box box-3">
          <div class="leitner-badge">Hộp 3: Đã Thành Thạo</div>
          <div class="leitner-count">${leitnerSummary.level3} <span>/ ${totalQuestions} câu (${pct3}%)</span></div>
          <p class="leitner-desc">Các câu đã làm đúng từ 2 lần liên tiếp trở lên. Kiến thức đã khắc sâu vào trí nhớ dài hạn!</p>
          <button class="btn btn-leitner green" onclick="practiceLeitnerBox(3)">
            ⭐ Duy trì Hộp 3
          </button>
        </div>
      </div>
    </div>

    <!-- Wrong Questions Notebook -->
    <div class="card" style="margin-top: 20px;">
      <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 14px; color: var(--danger); display: flex; align-items: center; gap: 8px;">
        ❌ Sổ Tay Câu Hay Sai (Mistake Notebook)
      </h3>
      ${wrongHtml}
    </div>

    <!-- Exam History -->
    <div class="card" style="margin-top: 20px;">
      <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 14px; color: var(--primary); display: flex; align-items: center; gap: 8px;">
        📝 Lịch Sử Các Lần Thi Thử
      </h3>
      ${historyHtml}
    </div>
  `;
}

// Global helper functions
window.jumpToWrongQuestion = function(qid) {
  document.querySelector('.nav-tab[data-target="view-practice"]')?.click();
  Practice.jumpToQuestionId(qid);
};

window.goToPracticeWithWrong = function() {
  document.querySelector('.nav-tab[data-target="view-practice"]')?.click();
  document.querySelectorAll('.practice-filter-pill').forEach(p => p.classList.remove('active'));
  const wrongPill = document.querySelector('.practice-filter-pill[data-tag="wrong"]');
  if (wrongPill) {
    wrongPill.classList.add('active');
    Practice.currentFilter.tag = 'wrong';
    Practice.currentFilter.targetedQids = null;
    Practice.applyFilters();
  }
};

window.practiceLeitnerBox = function(level) {
  document.querySelector('.nav-tab[data-target="view-practice"]')?.click();
  document.querySelectorAll('.practice-filter-pill').forEach(p => p.classList.remove('active'));
  const targetPill = document.querySelector(`.practice-filter-pill[data-tag="box${level}"]`);
  if (targetPill) {
    targetPill.classList.add('active');
    Practice.currentFilter.tag = `box${level}`;
    Practice.currentFilter.targetedQids = null;
    Practice.applyFilters();
  }
};

window.drillExamMistakes = function(examId) {
  const history = Storage.getExamHistory();
  const exam = history.find(e => e.id === examId);
  if (!exam || !exam.wrongQids || exam.wrongQids.length === 0) {
    alert('Không tìm thấy câu sai của bài thi này!');
    return;
  }

  document.querySelector('.nav-tab[data-target="view-practice"]')?.click();
  Practice.drillQuestions(exam.wrongQids, `Câu sai từ "${exam.paperName}"`);
};

window.exportLearningData = function() {
  const jsonStr = Storage.exportData();
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `KTMT_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

window.triggerImportData = function() {
  document.getElementById('backup-file-input')?.click();
};

window.handleImportFile = function(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const result = Storage.importData(event.target.result);
    if (result.success) {
      alert('Nhập dữ liệu sao lưu thành công!');
      Practice.generateAllShuffledQuestions();
      Practice.applyFilters();
      Practice.renderPalette();
      renderStatsView();
    } else {
      alert('Tệp dữ liệu không hợp lệ: ' + result.error);
    }
  };
  reader.readAsText(file);
};
