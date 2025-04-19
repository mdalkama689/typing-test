const timerDisplay = document.querySelector(".time-in-second");
const input = document.getElementById("hidden-input");
const typingBox = document.getElementById("typing-box");
const textDisplay = document.getElementById("text-display");
const restartBtn = document.querySelector(".restart-btn");
const accuracySpan = document.getElementById("accuracy");

const wpmSpan = document.getElementById("wpm");

let timer = timerDisplay.textContent;
let timeInterval;
let timerStarted = false;
let startTime = null;

const texts = [
  "Typing is a superpower. Practice makes perfect.",
  "The quick brown fox jumps over the lazy dog.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Stay hungry, stay foolish.",
  "First, solve the problem. Then, write the code.",
];

let currentText = "";
let userInput = "";
let currentIndex = 0;

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}

function loadNewText() {
  currentText = getRandomText();
  userInput = "";
  input.value = "";
  renderText();
}

function renderText() {
  textDisplay.innerHTML = "";
  for (let i = 0; i < currentText.length; i++) {
    const span = document.createElement("span");
    span.classList.add("char");

    if (i < userInput.length) {
      span.textContent = currentText[i];
      if (userInput[i] === currentText[i]) {
        span.classList.add("correct");
      } else {
        span.classList.add("incorrect");
      }
    } else {
      span.textContent = currentText[i];
      if (i === userInput.length) {
        span.classList.add("current");
      }
    }

    textDisplay.appendChild(span);
  }
}

function startTimer() {
  if (timerStarted) return;

  timerStarted = true;
  startTime = new Date();

  timeInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerDisplay.textContent = timer;
    } else {
      clearInterval(timeInterval);
      input.disabled = true;
    }
  }, 1000);
}

function calculateAccuracy() {
  let correct = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === currentText[i]) {
      correct++;
    }
  }

  const totalTyped = userInput.length;
  const accuracy = totalTyped === 0 ? 0 : (correct / totalTyped) * 100;
  return accuracy.toFixed(2);
}

function calculateWPM() {
  const now = new Date();
  const seconds = (now - startTime) / 1000;
  const wordCount = userInput.trim().split(/\s+/).length;
  const wpm = seconds === 0 ? 0 : (wordCount / seconds) * 60;
  return Math.floor(wpm);
}

input.addEventListener("input", (e) => {
  if (!timerStarted) startTimer();

  userInput = e.target.value;
  renderText();

  if (userInput.endsWith(" ")) {
    const acc = calculateAccuracy();
    const wpm = calculateWPM();
    accuracySpan.textContent = acc;
    wpmSpan.textContent = wpm;
  }

  if (userInput.length === currentText.length) {
    setTimeout(() => {
      loadNewText();
    }, 200);
  }
});

typingBox.addEventListener("click", () => {
  input.focus();
});

restartBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  timer = 20;
  timerDisplay.textContent = timer;
  input.disabled = false;
  timerStarted = false;
  startTime = null;
  input.value = "";
  accuracySpan.textContent = "0";
  wpmSpan.textContent = "0";
  loadNewText();
});

loadNewText();
