let tenths = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;

let bootCheck = false;

function startTimer() {
  if (bootCheck === false) {
    bootCheck = true;
    interval = setInterval(counter, 10);
  }
}

function stopTimer() {
  clearInterval(interval);
  bootCheck = false;
}

function resetTimer() {
  clearInterval(interval);
  bootCheck = false;

  tenths = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.querySelector("#stopwatch-display").innerText = "00 : 00 : 00 : 00";
}

function counter() {
  if (tenths < 100) tenths++;

  updateDisplay();

  if (tenths === 99 && seconds != 60) {
    tenths = 0;
    seconds++;

    updateDisplay();
  }

  if (seconds > 59) {
    seconds = 0;
    minutes++;

    updateDisplay();
  }

  if (minutes > 59) {
    minutes = 0;
    hours++;

    updateDisplay();
  }
}

function formatDigit(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function updateDisplay() {
  document.querySelector("#stopwatch-display").innerText = `${formatDigit(
    hours
  )} : ${formatDigit(minutes)} : ${formatDigit(seconds)} : ${formatDigit(
    tenths
  )}`;
}
