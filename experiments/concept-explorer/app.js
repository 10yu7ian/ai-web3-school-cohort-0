/**
 * AI/Web3 概念学习器 - 交互逻辑
 *
 * === AI 辅助生成 vs 人工修改 ===
 * AI 生成部分：整体 JS 结构、事件绑定模板、渲染函数初稿
 * 人工修改部分：
 *   - 修复了多个空状态和边界条件（搜索无结果中的提示文案优化）
 *   - 调整了 Quiz 渲染逻辑中的状态管理，避免用户快速点击导致的问题
 *   - 手动测试所有交互路径，修复了从测验返回再进入的重复事件绑定 bug
 *   - 优化移动端长文本显示
 *   - 补充键盘导航支持（ESC 返回）
 */

(function () {
  "use strict";

  // ========== DOM refs ==========
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const selectSection = $("#select-section");
  const explainSection = $("#explain-section");
  const quizSection = $("#quiz-section");
  const resultSection = $("#result-section");

  const conceptGrid = $("#concept-grid");
  const searchInput = $("#search-input");

  const backBtn = $("#back-btn");
  const conceptTag = $("#concept-tag");
  const conceptTitle = $("#concept-title");
  const oneLiner = $("#one-liner");
  const analogy = $("#analogy");
  const keyPoints = $("#key-points");
  const useCases = $("#use-cases");
  const relatedConcepts = $("#related-concepts");
  const startQuizBtn = $("#start-quiz-btn");

  const backToExplain = $("#back-to-explain");
  const quizTitle = $("#quiz-title");
  const progressFill = $("#progress-fill");
  const progressText = $("#progress-text");
  const questionText = $("#question-text");
  const optionsContainer = $("#options-container");
  const feedbackDiv = $("#feedback");
  const nextBtn = $("#next-btn");

  const scoreDisplay = $("#score-display");
  const resultMessage = $("#result-message");
  const retryBtn = $("#retry-btn");
  const backToListBtn = $("#back-to-list");

  // ========== State ==========
  let currentConcept = null;
  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;

  // ========== Tag helpers ==========
  const tagLabels = { ai: "AI", web3: "Web3", both: "AI + Web3" };
  const tagClasses = { ai: "tag-ai", web3: "tag-web3", both: "tag-both" };

  // ========== Render concept grid ==========
  function renderGrid(filter) {
    const term = (filter || "").toLowerCase().trim();
    const filtered = concepts.filter(function (c) {
      if (!term) return true;
      return (
        c.name.toLowerCase().includes(term) ||
        c.enName.toLowerCase().includes(term) ||
        c.oneLiner.toLowerCase().includes(term) ||
        c.keyPoints.some(function (p) { return p.toLowerCase().includes(term); }) ||
        c.tag.toLowerCase().includes(term)
      );
    });

    if (filtered.length === 0) {
      conceptGrid.innerHTML =
        '<div class="card" style="grid-column: 1/-1; text-align:center; padding:2rem; color:var(--text-dim)">没有找到匹配的概念，试试「RAG」「智能合约」或「Transformer」？</div>';
      return;
    }

    conceptGrid.innerHTML = filtered
      .map(function (c) {
        return (
          '<div class="concept-card" data-id="' +
          c.id +
          '">' +
          '<span class="tag ' +
          tagClasses[c.tag] +
          '">' +
          tagLabels[c.tag] +
          "</span>" +
          "<h3>" +
          esc(c.name) +
          "</h3>" +
          "<p>" +
          esc(c.oneLiner) +
          "</p>" +
          '<span class="en-name">' +
          esc(c.enName) +
          "</span>" +
          "</div>"
        );
      })
      .join("");
  }

  function esc(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ========== Render concept detail ==========
  function renderConcept(concept) {
    currentConcept = concept;
    conceptTag.textContent = tagLabels[concept.tag];
    conceptTag.className = "tag " + tagClasses[concept.tag];
    conceptTitle.textContent = concept.name;
    oneLiner.textContent = concept.oneLiner;
    analogy.textContent = concept.analogy;

    keyPoints.innerHTML = concept.keyPoints
      .map(function (p) { return "<li>" + esc(p) + "</li>"; })
      .join("");

    useCases.innerHTML = concept.useCases
      .map(function (u) { return "<li>" + esc(u) + "</li>"; })
      .join("");

    relatedConcepts.innerHTML = concept.relatedConcepts
      .map(function (rid) {
        var rc = concepts.find(function (c) { return c.id === rid; });
        if (!rc) return "";
        return '<span class="related-tag" data-id="' + rid + '">' + esc(rc.name) + "</span>";
      })
      .join("");
  }

  // ========== Navigation ==========
  function showSection(section) {
    selectSection.classList.add("hidden");
    explainSection.classList.add("hidden");
    quizSection.classList.add("hidden");
    resultSection.classList.add("hidden");
    section.classList.remove("hidden");
  }

  function openConcept(id) {
    var concept = concepts.find(function (c) { return c.id === id; });
    if (!concept) return;
    renderConcept(concept);
    showSection(explainSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ========== Quiz ==========
  function startQuiz() {
    if (!currentConcept) return;
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    quizTitle.textContent = currentConcept.name + " · 测验";
    showSection(quizSection);
    renderQuestion();
  }

  function renderQuestion() {
    var q = currentConcept.quiz[currentQuestionIndex];
    var total = currentConcept.quiz.length;

    progressFill.style.width = ((currentQuestionIndex / total) * 100).toFixed(0) + "%";
    progressText.textContent =
      "第 " + (currentQuestionIndex + 1) + " / " + total + " 题";

    questionText.textContent = q.question;
    feedbackDiv.classList.add("hidden");
    nextBtn.classList.add("hidden");
    answered = false;

    var letters = ["A", "B", "C", "D"];
    optionsContainer.innerHTML = q.options
      .map(function (opt, i) {
        return (
          '<button class="option-btn" data-index="' +
          i +
          '">' +
          '<span class="option-letter">' +
          letters[i] +
          "</span>" +
          esc(opt) +
          "</button>"
        );
      })
      .join("");
  }

  function selectOption(index) {
    if (answered) return;
    answered = true;

    var q = currentConcept.quiz[currentQuestionIndex];
    var buttons = $$(".option-btn");
    var isCorrect = index === q.answer;

    buttons.forEach(function (btn) {
      btn.classList.add("disabled");
    });

    if (isCorrect) {
      buttons[index].classList.add("correct");
      score++;
    } else {
      buttons[index].classList.add("wrong");
      buttons[q.answer].classList.add("show-correct");
    }

    feedbackDiv.textContent = (isCorrect ? "✓ 正确！" : "✗ 不对。") + " " + q.explanation;
    feedbackDiv.className = "feedback " + (isCorrect ? "correct" : "wrong");
    feedbackDiv.classList.remove("hidden");

    if (currentQuestionIndex < currentConcept.quiz.length - 1) {
      nextBtn.textContent = "下一题 →";
    } else {
      nextBtn.textContent = "查看结果";
    }
    nextBtn.classList.remove("hidden");
  }

  function nextStep() {
    if (currentQuestionIndex < currentConcept.quiz.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    var total = currentConcept.quiz.length;
    var pct = (score / total) * 100;
    var cls, msg;

    if (pct === 100) {
      cls = "excellent";
      msg = "全对！你已经掌握了「" + currentConcept.name + "」的核心概念。";
    } else if (pct >= 60) {
      cls = "good";
      msg = "不错！建议回顾一下答错的题目，加深理解。";
    } else {
      cls = "needs-work";
      msg = "别灰心！重新看看解释部分，再来一次会有进步的。";
    }

    scoreDisplay.textContent = score + " / " + total;
    scoreDisplay.className = "score-display " + cls;
    resultMessage.textContent = msg;

    showSection(resultSection);
  }

  // ========== Events ==========
  // Grid card click
  conceptGrid.addEventListener("click", function (e) {
    var card = e.target.closest(".concept-card");
    if (!card) return;
    openConcept(card.dataset.id);
  });

  // Search
  searchInput.addEventListener("input", function () {
    renderGrid(this.value);
  });

  // Back from explain
  backBtn.addEventListener("click", function () {
    showSection(selectSection);
  });

  // Start quiz
  startQuizBtn.addEventListener("click", startQuiz);

  // Back from quiz to explain
  backToExplain.addEventListener("click", function () {
    showSection(explainSection);
  });

  // Option click
  optionsContainer.addEventListener("click", function (e) {
    var btn = e.target.closest(".option-btn");
    if (!btn) return;
    selectOption(parseInt(btn.dataset.index, 10));
  });

  // Next / View result
  nextBtn.addEventListener("click", nextStep);

  // Related concept click
  relatedConcepts.addEventListener("click", function (e) {
    var tag = e.target.closest(".related-tag");
    if (!tag) return;
    openConcept(tag.dataset.id);
  });

  // Retry quiz
  retryBtn.addEventListener("click", startQuiz);

  // Back to list from result
  backToListBtn.addEventListener("click", function () {
    showSection(selectSection);
  });

  // Keyboard: ESC to go back
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!quizSection.classList.contains("hidden")) {
        showSection(explainSection);
      } else if (!explainSection.classList.contains("hidden")) {
        showSection(selectSection);
      }
    }
  });

  // ========== Init ==========
  renderGrid("");
  showSection(selectSection);
})();
