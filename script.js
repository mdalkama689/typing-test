// const timerDisplay = document.querySelector(".time-in-second");
// const input = document.getElementById("hidden-input");
// const typingBox = document.getElementById("typing-box");
// const textDisplay = document.getElementById("text-display");
// const restartBtn = document.querySelector(".restart-btn");
// const accuracySpan = document.getElementById("accuracy");
// const wpmSpan = document.getElementById("wpm");
// const cpmSpan = document.getElementById("cpm");
// const timeDurationOption = document.querySelector("#select-time-duration");
// const result = document.querySelector(".result-container");
// const resultTag = document.querySelector(".result-tag");
// const resultWpm = document.querySelector(".result-wpm");
// const resultCpm = document.querySelector(".result-cpm");
// const resultAccuracy = document.querySelector(".result-accuracy");
// const resultImg = document.querySelector(".result-img")

// const slothImg    = "https://cdn-icons-png.flaticon.com/512/616/616408.png"; // Sloth
// const tortoiseImg = "https://cdn-icons-png.flaticon.com/512/1998/1998592.png"; // Tortoise
// const hedgehogImg = "https://cdn-icons-png.flaticon.com/512/1998/1998642.png"; // Hedgehog
// const rabbitImg   = "https://cdn-icons-png.flaticon.com/512/616/6164087.png"; // Rabbit
// const horseImg    = "https://cdn-icons-png.flaticon.com/512/3535/3535445.png"; // Horse
// const tigerImg    = "https://cdn-icons-png.flaticon.com/512/616/6164089.png"; // Tiger
// const cheetahImg  = "https://cdn-icons-png.flaticon.com/512/7674/7674626.png"; // Cheetah
// const pantherImg  = "https://cdn-icons-png.flaticon.com/512/8022/8022786.png"; // Panther
// const eagleImg    = "https://cdn-icons-png.flaticon.com/512/616/6164307.png"; // Eagle
// const hawkImg     = "https://cdn-icons-png.flaticon.com/512/2924/2924449.png"; // Hawk
// const flashImg    = "https://cdn-icons-png.flaticon.com/512/2107/2107957.png"; // Flash (lightning bolt)


// let timer = parseInt(timerDisplay.textContent);
// let timeInterval;
// let timerStarted = false;
// let startTime = null;

// function getResultTag(wpm) {
//   if (wpm < 10) return "Sloth";
//   if (wpm < 20) return "Tortoise";
//   if (wpm < 30) return "Hedgehog";
//   if (wpm < 40) return "Rabbit";
//   if (wpm < 50) return "Horse";
//   if (wpm < 60) return "Tiger";
//   if (wpm < 70) return "Cheetah";
//   if (wpm < 80) return "Panther";
//   if (wpm < 90) return "Eagle";
//   if (wpm < 100) return "Hawk";
//   return "Flash";
// }
// function getResultImg(wpm) {
//   if (wpm < 10) return slothImg;
// if (wpm < 20) return tortoiseImg;
// if (wpm < 30) return hedgehogImg;
// if (wpm < 40) return rabbitImg;
// if (wpm < 50) return horseImg;
// if (wpm < 60) return tigerImg;
// if (wpm < 70) return cheetahImg;
// if (wpm < 80) return pantherImg;
// if (wpm < 90) return eagleImg;
// if (wpm < 100) return hawkImg;
// return flashImg;
// }


// const wordPool = [
//   "apple",
//   "banana",
//   "grape",
//   "orange",
//   "kiwi",
//   "pineapple",
//   "mango",
//   "peach",
//   "plum",
//   "pear",
//   "watermelon",
//   "melon",
//   "cherry",
//   "blueberry",
//   "strawberry",
//   "lemon",
//   "apricot",
//   "kiwi",
//   "fruit",
//   "delicious",
//   "sweet",
//   "tasty",
//   "healthy",
//   "smoothie",
//   "juice",
//   "tart",
//   "sour",
//   "fresh",
// ];

// let currentText = "";
// let userInput = "";

// function generateRandomSentence() {
//   const sentenceLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
//   let randomSentence = [];

//   for (let i = 0; i < sentenceLength; i++) {
//     const randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
//     randomSentence.push(randomWord);
//   }

//   return randomSentence.join(" ");
// }

// function generateRandomText() {
//   let randomText = "";
//   for (let i = 0; i < 1; i++) {
//     randomText += generateRandomSentence() + "\n";
//   }
//   return randomText;
// }

// function loadNewText() {
//   currentText = generateRandomText();
//   userInput = "";
//   input.value = "";
//   renderText();
// }

// function renderText() {
//   textDisplay.innerHTML = "";
//   for (let i = 0; i < currentText.length; i++) {
//     const span = document.createElement("span");
//     span.classList.add("char");

//     if (i < userInput.length) {
//       span.textContent = currentText[i];
//       if (userInput[i] === currentText[i]) {
//         span.classList.add("correct");
//       } else {
//         span.classList.add("incorrect");
//       }
//     } else {
//       span.textContent = currentText[i];
//       if (i === userInput.length) {
//         span.classList.add("current");
//       }
//     }

//     textDisplay.appendChild(span);
//   }
// }

// function startTimer() {
//   if (timerStarted) return;

//   timerStarted = true;
//   startTime = new Date();

//   timeInterval = setInterval(() => {
//     if (timer > 0) {
//       timer--;
//       timerDisplay.textContent = timer;
//       timeDurationOption.disabled = true;
//     } else {
//       clearInterval(timeInterval);
//       userInput = input.value;
//       renderText();

//       input.disabled = true;
//       timeDurationOption.disabled = false;
//       const acc = calculateAccuracy();
//       const wpm = calculateWPM();
//       const cpm = calculateCPM();
//       const tag = getResultTag(wpm);
//       const img = getResultImg(wpm)
//       resultImg.src = img

//       resultTag.textContent = tag;
//       resultWpm.textContent = `${wpm} WPM`;
//       resultCpm.textContent = `(${cpm} CPM)`;
//       resultAccuracy.textContent = `${acc}%`;

//       result.style.display = "flex";
//     }
//   }, 1000);
// }

// function calculateAccuracy() {
//   let correct = 0;
//   for (let i = 0; i < userInput.length; i++) {
//     if (userInput[i] === currentText[i]) {
//       correct++;
//     }
//   }

//   const totalTyped = userInput.length;
//   const accuracy = totalTyped === 0 ? 0 : (correct / totalTyped) * 100;
//   return Math.round(accuracy);
// }

// function calculateWPM() {
//   const now = new Date();
//   const seconds = (now - startTime) / 1000;
//   const wordCount = userInput.trim().split(/\s+/).length;
//   const wpm = seconds === 0 ? 0 : (wordCount / seconds) * 60;
//   return Math.floor(wpm);
// }

// function calculateCPM() {
//   const now = new Date();
//   const seconds = (now - startTime) / 1000;
//   const characterCount = userInput.length;
//   const cpm = seconds === 0 ? 0 : (characterCount / seconds) * 60;
//   return Math.floor(cpm);
// }

// input.addEventListener("input", (e) => {
//   if (!timerStarted) startTimer();

//   userInput = e.target.value;
//   renderText();

//   if (userInput.endsWith(" ")) {
//     const acc = calculateAccuracy();
//     const wpm = calculateWPM();
//     const cpm = calculateCPM();

//     accuracySpan.textContent = acc;
//     wpmSpan.textContent = wpm;
//     cpmSpan.textContent = cpm;
//   }

//   if (userInput.length === currentText.length) {
//     setTimeout(() => {
//       loadNewText();
//     }, 200);
//   }
// });

// typingBox.addEventListener("keydown", () => {
//   input.focus();
// });

// function updateTimer() {
//   timer = parseInt(timeDurationOption.value);
//   timerDisplay.textContent = timer;
// }

// timeDurationOption.addEventListener("change", updateTimer);

// restartBtn.addEventListener("click", () => {
//   clearInterval(timeInterval);
//   updateTimer();
//   input.disabled = false;
//   timerStarted = false;
//   startTime = null;
//   input.value = "";
//   accuracySpan.textContent = 0;
//   wpmSpan.textContent = 0;
//   cpmSpan.textContent = 0;
//   loadNewText();
// });

// loadNewText();

// const bgMusic = document.querySelector("#bgMusic");

// const toggle = document.getElementById("toggleBtn");
// const statusText = document.getElementById("status");

// toggle.addEventListener("change", () => {
//   statusText.textContent = toggle.checked ? "Music ON" : "Music OFF";
//   if (toggle.checked) {
//     bgMusic.play();
//   } else {
//     bgMusic.pause();
//   }
// });

// const closeBtn = document.querySelector(".fa-xmark");

// closeBtn.addEventListener("click", () => {
//   result.style.display = "none";
// });


// const modalOverlay = document.getElementById('typingModal');
// const openModalBtn = document.querySelector('.open-modal-btn');
// const closeModalBtn = document.querySelector('.close-button');

// openModalBtn.addEventListener('click', () => {
//     modalOverlay.style.display = 'flex';
// });

// closeModalBtn.addEventListener('click', () => {
//     modalOverlay.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     if (event.target === modalOverlay) {
//         modalOverlay.style.display = 'none';
//     }
// });


// const isMobile = window.innerWidth <= 1024; 
// const shareBox = document.getElementById('shareBox');
// const infoIcon = document.getElementById('infoIcon');

// if (isMobile) {
//   let isVisible = false;

//   infoIcon.addEventListener('click', (e) => {
//     e.stopPropagation();
//     isVisible = !isVisible;
//     shareBox.classList.toggle('visible', isVisible);
//   });

//   shareBox.addEventListener('click', (e) => {
//     e.stopPropagation();
//   });

//   document.addEventListener('click', () => {
//     isVisible = false;
//     shareBox.classList.remove('visible');
//   });
// } else {
//   const iconBox = document.getElementById('infoIconBox');
//   iconBox.addEventListener('mouseenter', () => {
//     shareBox.classList.add('visible');
//   });
//   iconBox.addEventListener('mouseleave', () => {
//     shareBox.classList.remove('visible');
//   });
// }


const timerDisplay = document.querySelector(".time-in-second");
const input = document.getElementById("hidden-input");
const typingBox = document.getElementById("typing-box");
const textDisplay = document.getElementById("text-display");
const restartBtn = document.querySelector(".restart-btn");
const accuracySpan = document.getElementById("accuracy");
const wpmSpan = document.getElementById("wpm");
const cpmSpan = document.getElementById("cpm");
const timeDurationOption = document.querySelector("#select-time-duration");
const result = document.querySelector(".result-container");
const resultTag = document.querySelector(".result-tag");
const resultWpm = document.querySelector(".result-wpm");
const resultCpm = document.querySelector(".result-cpm");
const resultAccuracy = document.querySelector(".result-accuracy");
const resultImg = document.querySelector(".result-img");

const slothImg    = "https://cdn-icons-png.flaticon.com/512/616/616408.png"; // Sloth
const tortoiseImg = "https://cdn-icons-png.flaticon.com/512/1998/1998592.png"; // Tortoise
const hedgehogImg = "https://cdn-icons-png.flaticon.com/512/1998/1998642.png"; // Hedgehog
const rabbitImg   = "https://cdn-icons-png.flaticon.com/512/616/6164087.png"; // Rabbit
const horseImg    = "https://cdn-icons-png.flaticon.com/512/3535/3535445.png"; // Horse
const tigerImg    = "https://cdn-icons-png.flaticon.com/512/616/6164089.png"; // Tiger
const cheetahImg  = "https://cdn-icons-png.flaticon.com/512/7674/7674626.png"; // Cheetah
const pantherImg  = "https://cdn-icons-png.flaticon.com/512/8022/8022786.png"; // Panther
const eagleImg    = "https://cdn-icons-png.flaticon.com/512/616/6164307.png"; // Eagle
const hawkImg     = "https://cdn-icons-png.flaticon.com/512/2924/2924449.png"; // Hawk
const flashImg    = "https://cdn-icons-png.flaticon.com/512/2107/2107957.png"; // Flash (lightning bolt)


let timer = parseInt(timerDisplay.textContent);
let timeInterval;
let timerStarted = false;
let startTime = null;

function getResultTag(wpm) {
  if (wpm < 10) return "Sloth";
  if (wpm < 20) return "Tortoise";
  if (wpm < 30) return "Hedgehog";
  if (wpm < 40) return "Rabbit";
  if (wpm < 50) return "Horse";
  if (wpm < 60) return "Tiger";
  if (wpm < 70) return "Cheetah";
  if (wpm < 80) return "Panther";
  if (wpm < 90) return "Eagle";
  if (wpm < 100) return "Hawk";
  return "Flash";
}

function getResultImg(wpm) {
  if (wpm < 10) return slothImg;
  if (wpm < 20) return tortoiseImg;
  if (wpm < 30) return hedgehogImg;
  if (wpm < 40) return rabbitImg;
  if (wpm < 50) return horseImg;
  if (wpm < 60) return tigerImg;
  if (wpm < 70) return cheetahImg;
  if (wpm < 80) return pantherImg;
  if (wpm < 90) return eagleImg;
  if (wpm < 100) return hawkImg;
  return flashImg;
}


const wordPool = [
  "apple", "banana", "grape", "orange", "kiwi", "pineapple", "mango", 
  "peach", "plum", "pear", "watermelon", "melon", "cherry", "blueberry", 
  "strawberry", "lemon", "apricot", "kiwi", "fruit", "delicious", "sweet", 
  "tasty", "healthy", "smoothie", "juice", "tart", "sour", "fresh",
];

let currentText = "";
let userInput = "";

function generateRandomSentence() {
  const sentenceLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  let randomSentence = [];

  for (let i = 0; i < sentenceLength; i++) {
    const randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    randomSentence.push(randomWord);
  }

  return randomSentence.join(" ");
}

function generateRandomText() {
  let randomText = "";
  for (let i = 0; i < 1; i++) {
    randomText += generateRandomSentence() + "\n";
  }
  return randomText;
}

function loadNewText() {
  currentText = generateRandomText();
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
      timeDurationOption.disabled = true;
    } else {
      clearInterval(timeInterval);
      userInput = input.value;
      renderText();

      input.disabled = true;
      timeDurationOption.disabled = false;
      const acc = calculateAccuracy();
      const wpm = calculateWPM();
      const cpm = calculateCPM();
      const tag = getResultTag(wpm);
      const img = getResultImg(wpm);
      resultImg.src = img;

      resultTag.textContent = tag;
      resultWpm.textContent = `${wpm} WPM`;
      resultCpm.textContent = `(${cpm} CPM)`;
      resultAccuracy.textContent = `${acc}%`;

      result.style.display = "flex";
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

typingBox.addEventListener("keydown", () => {
  input.focus();
});

function updateTimer() {
  timer = parseInt(timeDurationOption.value);
  timerDisplay.textContent = timer;
}

timeDurationOption.addEventListener("change", updateTimer);

restartBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  updateTimer();
  input.disabled = false;
  timerStarted = false;
  startTime = null;
  input.value = "";
  accuracySpan.textContent = 0;
  wpmSpan.textContent = 0;
  cpmSpan.textContent = 0;
  loadNewText();
});

loadNewText();

const bgMusic = document.querySelector("#bgMusic");

const toggle = document.getElementById("toggleBtn");
const statusText = document.getElementById("status");

toggle.addEventListener("change", () => {
  statusText.textContent = toggle.checked ? "Music ON" : "Music OFF";
  if (toggle.checked) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
});

const closeBtn = document.querySelector(".fa-xmark");

closeBtn.addEventListener("click", () => {
  result.style.display = "none";
});

const modalOverlay = document.getElementById('typingModal');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-button');

openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

const isMobile = window.innerWidth <= 1024; 
const shareBox = document.getElementById('shareBox');
const infoIcon = document.getElementById('infoIcon');

if (isMobile) {
  let isVisible = false;

  infoIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    isVisible = !isVisible;
    shareBox.classList.toggle('visible', isVisible);
  });

  shareBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.addEventListener('click', () => {
    isVisible = false;
    shareBox.classList.remove('visible');
  });
} else {
  const iconBox = document.getElementById('infoIconBox');
  iconBox.addEventListener('mouseenter', () => {
    shareBox.classList.add('visible');
  });
  iconBox.addEventListener('mouseleave', () => {
    shareBox.classList.remove('visible');
  });
}
