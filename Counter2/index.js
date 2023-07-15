/**
 * Listener
 */
document.getElementById("btnDecr").addEventListener("click", decreaseCounter);
document.getElementById("btnReset").addEventListener("click", resetCounter);
document.getElementById("btnIncr").addEventListener("click", increaseCounter);

/**
 * Model
 */
let counter = 0;

function decreaseCounter() {
  counter--;
  updateCounter();
  updateCounterColor("red");
  counterElement.parentNode.style.color = "black";
}

function resetCounter() {
  counter = 0;
  updateCounter();
  updateCounterColor("black");
  counterElement.parentNode.style.color = "white";
}

function increaseCounter() {
  counter++;
  updateCounter();
  updateCounterColor("green");
  counterElement.parentNode.style.color = "black";
}

/**
 * View
 */
const counterElement = document.getElementById("counter");

function updateCounter() {
  counterElement.textContent = counter;
}

function updateCounterColor(color) {
  counterElement.parentNode.style.backgroundColor = color;
}

// Initial update
updateCounter();
updateCounterColor("white");
