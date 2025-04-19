const timerDisplay = document.querySelector(".time-in-second");

//
const input = document.getElementById("hidden-input");
const typingBox = document.getElementById("typing-box");
const textDisplay = document.getElementById("text-display");
const restartBtn = document.querySelector(".restart-btn");

const startTimer = () => {
  let timer = timerDisplay.textContent;

  const timeInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerDisplay.textContent = timer;
    } else {
      clearInterval(timeInterval);
      input.disabled = true;
    }
  }, 1000);
};

input.addEventListener("keydown", () => {
  startTimer();
});
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

input.addEventListener("input", (e) => {
  userInput = e.target.value;
  renderText();

  if (userInput.length === currentText.length) {
    setTimeout(() => {
      loadNewText();
    }, 200);
  }
});

typingBox.addEventListener("click", () => {
  input.focus();
});

loadNewText();


// calculate accuracy 

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

  
  input.addEventListener("input", (e) => {
    userInput = e.target.value;
    renderText();
  
    // ✅ Check if Spacebar was typed
    if (userInput.endsWith(" ")) {
      const acc = calculateAccuracy();
      console.log("Current Accuracy:", acc + "%");
  
      // Optional: show it in DOM
      document.getElementById("accuracy").textContent = acc;
    }
  
    // ✅ If whole text is typed
    if (userInput.length === currentText.length) {
      setTimeout(() => {
        loadNewText();
      }, 200);
    }
  });

  