// ===============================
// Variablen
// ===============================
let targetNumber;
let lives = 3;
let points = 0;
let time = 30;
let timerInterval;

// ===============================
// HTML-Elemente
// ===============================
const display = document.getElementById("display");
const target = document.getElementById("target");
const livesDisplay = document.getElementById("lives");
const pointsDisplay = document.getElementById("points");
const timeDisplay = document.getElementById("time");

// ===============================
// Neue Runde starten
// ===============================
function newRound() {
  targetNumber = Math.floor(Math.random() * 200) + 50;
  target.textContent = targetNumber;
  display.value = "";
  startTimer();
}

// ===============================
// Timer starten
// ===============================
function startTimer() {
  clearInterval(timerInterval);
  time = 30;
  timeDisplay.textContent = time;

  timerInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if (time === 0) {
      clearInterval(timerInterval);
      loseLife();
    }
  }, 1000);
}

// ===============================
// Taschenrechner Funktionen
// ===============================
function add(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

// ===============================
// Ergebnis prüfen
// ===============================
function checkResult() {
  try {
    const result = eval(display.value);

    if (result === targetNumber) {
      clearInterval(timerInterval);
      alert("✅ Richtig!");
      points++;
      pointsDisplay.textContent = points;
      newRound();
    } else {
      clearInterval(timerInterval);
      loseLife();
    }
  } catch {
    alert("Ungültige Rechnung!");
  }
}

// ===============================
// Leben verlieren
// ===============================
function loseLife() {
  lives--;
  livesDisplay.textContent = lives;
  alert("❌ Falsch oder Zeit abgelaufen!");

  if (lives === 0) {
    alert("💀 Game Over! Punkte: " + points);
    lives = 3;
    points = 0;
    livesDisplay.textContent = lives;
    pointsDisplay.textContent = points;
  }

  newRound();
}

// ===============================
// Spiel starten
// ===============================
newRound();
