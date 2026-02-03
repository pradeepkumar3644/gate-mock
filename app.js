/*************************************************
 * GATE MOCK – MODULAR EXAM ENGINE (FIXED)
 *************************************************/

import { MOCKS } from "./mocks/index.js";
console.log("MOCKS LOADED:", MOCKS);


/* -------- STATE -------- */

let CURRENT_MOCK = null;
let QUESTIONS = [];
let ANSWERS = {};

let currentIndex = 0;
const responses = {};
const markedForReview = {};
const visited = {};

/* -------- DOM ELEMENTS -------- */

const questionMeta = document.getElementById("questionMeta");
const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const paletteDiv = document.getElementById("palette");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const clearBtn = document.getElementById("clearBtn");
const markBtn = document.getElementById("markBtn");
const submitBtn = document.getElementById("submitBtn");

const mockSelect = document.getElementById("mockSelect");
const startBtn = document.getElementById("startBtn");

/* -------- MOCK SELECTOR -------- */

MOCKS.forEach(m => {
  const opt = document.createElement("option");
  opt.value = m.id;
  opt.innerText = m.name;
  mockSelect.appendChild(opt);
});

startBtn.onclick = () => {
  const mockId = mockSelect.value;
  if (!mockId) {
    alert("Please select a mock");
    return;
  }

  CURRENT_MOCK = MOCKS.find(m => m.id === mockId);
  QUESTIONS = CURRENT_MOCK.questions;
  ANSWERS = CURRENT_MOCK.answers;

  currentIndex = 0;

  initPalette();
  loadQuestion();
  startTimer(CURRENT_MOCK.duration);
};

/* -------- FUNCTIONS -------- */

function initPalette() {
  paletteDiv.innerHTML = "";
  QUESTIONS.forEach((q, i) => {
    const btn = document.createElement("button");
    btn.innerText = q.qno;
    btn.className = "not-visited";
    btn.onclick = () => {
      currentIndex = i;
      loadQuestion();
    };
    paletteDiv.appendChild(btn);
  });
}

function loadQuestion() {
  const q = QUESTIONS[currentIndex];
  if (!q) return;

  visited[q.qno] = true;

  questionMeta.innerText =
    `Question ${q.qno} | ${q.section} | ${q.marks} Mark${q.marks > 1 ? "s" : ""}`;

  questionText.innerText = q.question;
  optionsDiv.innerHTML = "";

  if (q.type === "MCQ") {
    q.options.forEach((op, idx) => {
      const checked = responses[q.qno] === idx;
      optionsDiv.innerHTML += `
        <label>
          <input type="radio" name="option"
            ${checked ? "checked" : ""}
            onchange="saveMCQ(${q.qno}, ${idx})">
          ${op}
        </label>`;
    });
  }

  if (q.type === "MSQ") {
    const saved = responses[q.qno] || [];
    q.options.forEach((op, idx) => {
      const checked = saved.includes(idx);
      optionsDiv.innerHTML += `
        <label>
          <input type="checkbox"
            ${checked ? "checked" : ""}
            onchange="saveMSQ(${q.qno}, ${idx})">
          ${op}
        </label>`;
    });
  }

  if (q.type === "NAT") {
    optionsDiv.innerHTML = `
      <input type="number"
        placeholder="Enter answer"
        value="${responses[q.qno] ?? ""}"
        onchange="responses[${q.qno}] = this.value">
    `;
  }

  updatePalette();
}

/* -------- RESPONSE HANDLERS -------- */

window.saveMCQ = function (qno, idx) {
  responses[qno] = idx;
  updatePalette();
};

window.saveMSQ = function (qno, idx) {
  if (!responses[qno]) responses[qno] = [];
  if (responses[qno].includes(idx))
    responses[qno] = responses[qno].filter(x => x !== idx);
  else
    responses[qno].push(idx);
  updatePalette();
};

function updatePalette() {
  const buttons = paletteDiv.children;
  QUESTIONS.forEach((q, i) => {
    const btn = buttons[i];
    btn.className = "not-visited";

    if (visited[q.qno]) btn.className = "not-answered";
    if (responses[q.qno] !== undefined) btn.className = "answered";
    if (markedForReview[q.qno]) btn.className = "marked";
  });
}

/* -------- NAVIGATION -------- */

nextBtn.onclick = () => {
  if (currentIndex < QUESTIONS.length - 1) {
    currentIndex++;
    loadQuestion();
  }
};

prevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
};

clearBtn.onclick = () => {
  const qno = QUESTIONS[currentIndex].qno;
  delete responses[qno];
  delete markedForReview[qno];
  loadQuestion();
};

markBtn.onclick = () => {
  const qno = QUESTIONS[currentIndex].qno;
  markedForReview[qno] = !markedForReview[qno];
  updatePalette();
};

/* -------- TIMER -------- */

function startTimer(minutes) {
  let time = minutes * 60;
  const timeSpan = document.getElementById("time");

  const interval = setInterval(() => {
    time--;

    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;

    timeSpan.innerText =
      `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

    if (time <= 0) {
      clearInterval(interval);
      alert("Time over! Test submitted.");
      evaluateTest();
    }
  }, 1000);
}

/* -------- EVALUATION -------- */

function evaluateTest() {
  let total = 0, ga = 0, cse = 0;
  const details = [];

  QUESTIONS.forEach(q => {
    const key = ANSWERS[q.qno];
    const user = responses[q.qno];

    let correct = false;
    let status = "Not Attempted";
    let marks = 0;

    if (user !== undefined && key) {
      if (key.type === "MCQ") correct = user === key.correct;

      if (key.type === "MSQ")
        correct = Array.isArray(user) &&
          user.length === key.correct.length &&
          user.every(v => key.correct.includes(v));

      if (key.type === "NAT")
        correct = Math.abs(Number(user) - key.correct) <= (key.tolerance || 0);

      if (correct) {
        status = "Correct";
        marks = q.marks;
        total += q.marks;
        q.section === "GA" ? ga += q.marks : cse += q.marks;
      } else {
        status = "Wrong";
        marks = - (q.negative || 0);
        total += marks;
      }
    }

    details.push({
      qno: q.qno,
      section: q.section,
      question: q.question,
      user: user === undefined ? "—" : JSON.stringify(user),
      correct: key ? JSON.stringify(key.correct) : "—",
      status,
      statusColor:
        status === "Correct" ? "green" :
        status === "Wrong" ? "red" : "gray",
      marks
    });
  });

  renderResponseSheet({ total, ga, cse, details });
}


function renderResponseSheet(result) {
  const { total, ga, cse, details } = result;

  let rows = "";

  details.forEach(d => {
    rows += `
      <tr>
        <td>${d.qno}</td>
        <td>${d.section}</td>
        <td>${d.question}</td>
        <td>${d.user}</td>
        <td>${d.correct}</td>
        <td style="color:${d.statusColor}">${d.status}</td>
        <td>${d.marks}</td>
      </tr>
    `;
  });

  document.body.innerHTML = `
    <div style="padding:30px;font-family:Arial">
      <h2>GATE Response Sheet</h2>

      <p><b>GA Marks:</b> ${ga}</p>
      <p><b>CSE Marks:</b> ${cse}</p>
      <p><b>Total Marks:</b> ${total.toFixed(2)}</p>

      <hr>

      <table border="1" cellpadding="8" cellspacing="0" width="100%">
        <tr style="background:#f0f0f0">
          <th>Q.No</th>
          <th>Section</th>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
          <th>Status</th>
          <th>Marks</th>
        </tr>
        ${rows}
      </table>
    </div>
  `;
}


submitBtn.onclick = () => {
  if (confirm("Submit test?")) evaluateTest();
};
