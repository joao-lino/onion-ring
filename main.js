const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const timeLeft = document.querySelector(".time-left");
const timeFav = document.querySelector(".timeTit");
const timeInput = document.getElementById("time-input");
const changeTimeButton = document.getElementById("change-time-button");
const innerBox = document.getElementById("inner-box");

let timerId;
let minutes = parseInt(localStorage.getItem("timerValue")) || parseInt(timeInput.value);
let seconds = 0;
let isRunning = false;

function toggleTimer() {
  if (isRunning) {
    clearInterval(timerId);
    isRunning = false;
  } else {
    isRunning = true;
    timerId = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerId);
          isRunning = false;
          innerBox.style.width = "0%";
          return;
        }
        minutes--;
        seconds = 60;
      }
      seconds--;
      timeLeft.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      timeFav.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      const totalTimeInSeconds = minutes * 60 + seconds;
      const percentageLeft = (totalTimeInSeconds / (minutes * 60)) * 100;
      innerBox.style.width = `${percentageLeft}%`;
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerId);
  isRunning = false;
  minutes = parseInt(localStorage.getItem("timerValue")) || parseInt(timeInput.value);
  seconds = 0;
  timeLeft.textContent = `${minutes}:00`;
  innerBox.style.width = "100%";
  audio.pause();
  audio.currentTime = 0;
  bell.pause(); // pause the bell audio as well
}

function updateTime() {
  minutes = parseInt(timeInput.value);
  seconds = 0;
  timeLeft.textContent = `${minutes}:00`;
  localStorage.setItem("timerValue", minutes);
  resetTimer();
}

function changeTime() {
  updateTime();
}

// Set the initial timeLeft text content
timeLeft.textContent = `${minutes}:00`;

startButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
changeTimeButton.addEventListener("click", changeTime);
timeInput.addEventListener("change", updateTime);



//darkmode

const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("body");
let darkMode = localStorage.getItem("dark-mode");
var logo = document.getElementById("main-logo");
//var themeIcon = document.getElementById("sun");
//var bars = document.getElementById("bars");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
  logo.src = "white-logo.svg";
  //themeIcon.src = "sun.svg";
  //bars.src = "icons/bars-white.svg";
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
  logo.src="logo.svg";
  //themeIcon.src = "icon.svg";
  //bars.src = "./icons/bars.svg";

};

if (darkMode === "enabled") {
  enableDarkMode();

  // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


/* Open */
function openNav() {
  document.getElementById("hidden-nav").style.height = "100%";
}

function closeNav() {
  document.getElementById("hidden-nav").style.height = "0%";
}

/* Open */
function openNav0() {
  document.getElementById("hidden-nav0").style.height = "100%";
}

function closeNav0() {
  document.getElementById("hidden-nav0").style.height = "0%";
}


/* to-do */  /*


const addBtn = document.getElementById("add-btn");
const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", addTodoItem);

function addTodoItem() {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.classList.add("todo-checkbox");
  todoItem.appendChild(todoCheckbox);

  const todoText = document.createElement("input");
  todoText.type = "text";
  todoText.classList.add("todo-text");
  todoText.placeholder = "Enter a to-do...";
  todoItem.appendChild(todoText);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";
  todoItem.appendChild(deleteBtn);

  todoList.appendChild(todoItem);

  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(todoItem);
  });

  // Add event listener to todoText input
  todoText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTodoItem();
    }
  });
}


*/
