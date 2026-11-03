// LocalStorage Manager for Computer Architecture & OS Quiz System
// Supports Practice progress, Leitner Spaced Repetition, Bookmarks, Exam History & Backup
const Storage = {
  KEYS: {
    PRACTICE_PROGRESS: 'ktmt_practice_progress',
    BOOKMARKS: 'ktmt_bookmarks',
    EXAM_HISTORY: 'ktmt_exam_history',
    SETTINGS: 'ktmt_settings',
    LEITNER_BOX: 'ktmt_leitner_box'
  },

  // Get settings
  getSettings() {
    try {
      const data = localStorage.getItem(this.KEYS.SETTINGS);
      return data ? JSON.parse(data) : {
        theme: 'light',
        fontSize: 16,
        shuffleOptions: true, // Always true as requested
        sound: true
      };
    } catch (e) {
      return { theme: 'light', fontSize: 16, shuffleOptions: true, sound: true };
    }
  },

  saveSettings(settings) {
    localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
  },

  // Practice Progress: { [qid]: { selected: 'A', isCorrect: true, timestamp: 12345 } }
  getProgress() {
    try {
      const data = localStorage.getItem(this.KEYS.PRACTICE_PROGRESS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },

  saveAnswer(qid, selectedOption, isCorrect) {
    const progress = this.getProgress();
    progress[qid] = {
      selected: selectedOption,
      isCorrect: isCorrect,
      timestamp: Date.now()
    };
    localStorage.setItem(this.KEYS.PRACTICE_PROGRESS, JSON.stringify(progress));

    // Update Leitner Spaced Repetition Box
    this.updateLeitner(qid, isCorrect);
  },

  // Leitner Spaced Repetition System (3 Levels)
  // Level 1: Cần ôn luyện / Chưa vững (Mới hoặc làm sai)
  // Level 2: Đang rèn luyện (Đúng 1 lần liên tiếp)
  // Level 3: Đã thành thạo (Đúng từ 2 lần liên tiếp trở lên)
  getLeitnerData() {
    try {
      const data = localStorage.getItem(this.KEYS.LEITNER_BOX);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },

  updateLeitner(qid, isCorrect) {
    const leitner = this.getLeitnerData();
    const item = leitner[qid] || {
      level: 1,
      consecutive: 0,
      totalAttempts: 0,
      totalCorrect: 0,
      lastReviewed: 0
    };

    item.totalAttempts = (item.totalAttempts || 0) + 1;
    item.lastReviewed = Date.now();

    if (isCorrect) {
      item.totalCorrect = (item.totalCorrect || 0) + 1;
      item.consecutive = (item.consecutive || 0) + 1;
      if (item.consecutive >= 2) {
        item.level = 3; // Mastered
      } else {
        item.level = 2; // Learning
      }
    } else {
      item.consecutive = 0;
      item.level = 1; // Needs reinforcement
    }

    leitner[qid] = item;
    localStorage.setItem(this.KEYS.LEITNER_BOX, JSON.stringify(leitner));
    return item;
  },

  getLeitnerLevel(qid) {
    const leitner = this.getLeitnerData();
    return leitner[qid] ? leitner[qid].level : 1;
  },

  getLeitnerSummary(totalCount = 150) {
    const leitner = this.getLeitnerData();
    const progress = this.getProgress();
    let l1 = 0, l2 = 0, l3 = 0;

    for (let id = 1; id <= totalCount; id++) {
      const entry = leitner[id];
      if (!entry) {
        l1++; // Chưa làm xếp vào Hộp 1
      } else if (entry.level === 3) {
        l3++;
      } else if (entry.level === 2) {
        l2++;
      } else {
        l1++;
      }
    }

    return {
      level1: l1,
      level2: l2,
      level3: l3,
      total: totalCount
    };
  },

  // Bookmarks: array of qids [1, 5, 23, ...]
  getBookmarks() {
    try {
      const data = localStorage.getItem(this.KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  toggleBookmark(qid) {
    let bookmarks = this.getBookmarks();
    const idx = bookmarks.indexOf(qid);
    let bookmarked = false;
    if (idx > -1) {
      bookmarks.splice(idx, 1);
    } else {
      bookmarks.push(qid);
      bookmarked = true;
    }
    localStorage.setItem(this.KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    return bookmarked;
  },

  isBookmarked(qid) {
    const bookmarks = this.getBookmarks();
    return bookmarks.includes(qid);
  },

  // Exam History: [ { id, date, paperName, score, total, correct, wrong, wrongQids, duration, breakdown } ]
  getExamHistory() {
    try {
      const data = localStorage.getItem(this.KEYS.EXAM_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveExamResult(result) {
    const history = this.getExamHistory();
    history.unshift({
      id: Date.now(),
      date: new Date().toLocaleString('vi-VN'),
      ...result
    });
    // keep max 30 tests
    if (history.length > 30) history.pop();
    localStorage.setItem(this.KEYS.EXAM_HISTORY, JSON.stringify(history));
  },

  // Export all learning data to JSON
  exportData() {
    const backup = {
      version: '2.0',
      exportedAt: new Date().toISOString(),
      progress: this.getProgress(),
      bookmarks: this.getBookmarks(),
      history: this.getExamHistory(),
      leitner: this.getLeitnerData(),
      settings: this.getSettings()
    };
    return JSON.stringify(backup, null, 2);
  },

  // Import learning data from JSON
  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.progress) localStorage.setItem(this.KEYS.PRACTICE_PROGRESS, JSON.stringify(data.progress));
      if (data.bookmarks) localStorage.setItem(this.KEYS.BOOKMARKS, JSON.stringify(data.bookmarks));
      if (data.history) localStorage.setItem(this.KEYS.EXAM_HISTORY, JSON.stringify(data.history));
      if (data.leitner) localStorage.setItem(this.KEYS.LEITNER_BOX, JSON.stringify(data.leitner));
      if (data.settings) localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(data.settings));
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  },

  // Clear all data
  clearAll() {
    localStorage.removeItem(this.KEYS.PRACTICE_PROGRESS);
    localStorage.removeItem(this.KEYS.BOOKMARKS);
    localStorage.removeItem(this.KEYS.EXAM_HISTORY);
    localStorage.removeItem(this.KEYS.LEITNER_BOX);
  }
};
