const timerDisplay = document.querySelector(".time-in-second");
const input = document.getElementById("hidden-input");
const typingBox = document.getElementById("typing-box");
const textDisplay = document.getElementById("text-display");
const restartBtn = document.querySelector(".restart-btn");
const accuracySpan = document.getElementById("accuracy");
const wpmSpan = document.getElementById("wpm");
const cpmSpan = document.getElementById("cpm");  

let timer = timerDisplay.textContent;
let timeInterval;
let timerStarted = false;
let startTime = null;

const wordPool = [
  "apple", "banana", "grape", "orange", "kiwi", "pineapple", "mango", 
  "peach", "plum", "pear", "watermelon", "melon", "cherry", "blueberry", 
  "strawberry", "lemon", "apricot", "kiwi", "fruit", "delicious", 
  "sweet", "tasty", "healthy", "smoothie", "juice", "tart", "sour", "fresh"
];

let currentText = "";
let userInput = "";
let currentIndex = 0;

// Function to generate a random sentence
function generateRandomSentence() {
  const sentenceLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Random sentence length between 5 and 10 words
  let randomSentence = [];
  
  for (let i = 0; i < sentenceLength; i++) {
    const randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    randomSentence.push(randomWord);
  }

  return randomSentence.join(" ") + "."; // Return a random sentence
}

// Function to generate multiple random sentences (3 lines)
function generateRandomText() {
  let randomText = "";
  for (let i = 0; i < 3; i++) {
    randomText += generateRandomSentence() + "\n"; // Add 3 random sentences with new lines
  }
  return randomText;
}

// Function to load the new text
function loadNewText() {
  currentText = generateRandomText(); // Generate random text with multiple lines
  userInput = "";
  input.value = "";
  renderText();
}

// Function to render the text on the screen
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

// Timer functions
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
return Math.round(accuracy);
}

function calculateWPM() {
  const now = new Date();
  const seconds = (now - startTime) / 1000;
  const wordCount = userInput.trim().split(/\s+/).length;
  const wpm = seconds === 0 ? 0 : (wordCount / seconds) * 60;
  return Math.floor(wpm);
}

function calculateCPM() {
  const now = new Date();
  const seconds = (now - startTime) / 1000;
  const characterCount = userInput.length;
  const cpm = seconds === 0 ? 0 : (characterCount / seconds) * 60;
  return Math.floor(cpm);
}

// Event listeners
input.addEventListener("input", (e) => {
  if (!timerStarted) startTimer();

  userInput = e.target.value;
  renderText();

  if (userInput.endsWith(" ")) {
    const acc = calculateAccuracy();
    const wpm = calculateWPM();
    const cpm = calculateCPM();  

    accuracySpan.textContent = acc;
    wpmSpan.textContent = wpm;
    cpmSpan.textContent = cpm; 
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
  cpmSpan.textContent = "CPM: 0";  // Reset CPM
  loadNewText();
});

loadNewText();
