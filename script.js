let timerInterval;
let startTime;
let isTestRunning = false;
let selectedTime = 60; // Default to 1 minute
let totalWords = 0;
let correctWords = 0;
let totalChars = 0;

// DOM elements
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const timeSelect = document.getElementById("time-select");
const inputField = document.getElementById("input-field");
const textToType = document.getElementById("text-to-type");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const timerDisplay = document.getElementById("timer");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Default text for typing test
const sampleText = "The quick brown fox jumps over the lazy dog.";

// Timer function
function startTimer() {
    let timeRemaining = selectedTime * 60;
    startTime = Date.now();

    timerInterval = setInterval(() => {
        let timeElapsed = Math.floor((Date.now() - startTime) / 1000);
        let timeLeft = timeRemaining - timeElapsed;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerDisplay.textContent = `Time: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endTest();
        }
    }, 1000);
}

// End test and calculate results
function endTest() {
    isTestRunning = false;
    inputField.disabled = true;
    const wpm = (totalWords / selectedTime) * 60;
    const accuracy = ((correctWords / totalChars) * 100).toFixed(2);
    wpmDisplay.textContent = `Words Per Minute: ${wpm.toFixed(2)}`;
    accuracyDisplay.textContent = `Accuracy: ${accuracy}%`;
}

// Calculate WPM and accuracy on input
function updateTypingStats() {
    const typedText = inputField.value;
    totalChars = typedText.length;
    totalWords = typedText.trim().split(/\s+/).length;

    correctWords = typedText.split(" ").filter((word, index) => word === sampleText.split(" ")[index]).length;

    wpmDisplay.textContent = `Words Per Minute: ${((totalWords / ((Date.now() - startTime) / 1000)) * 60).toFixed(2)}`;
    accuracyDisplay.textContent = `Accuracy: ${(correctWords / totalChars * 100).toFixed(2)}%`;
}

// Start typing test
function startTest() {
    if (isTestRunning) return;
    isTestRunning = true;
    inputField.disabled = false;
    inputField.value = "";
    textToType.textContent = sampleText;
    startTimer();
}

// Reset the test
function resetTest() {
    clearInterval(timerInterval);
    isTestRunning = false;
    inputField.disabled = true;
    inputField.value = "";
    textToType.textContent = "The quick brown fox jumps over the lazy dog.";
    wpmDisplay.textContent = "Words Per Minute: 0";
    accuracyDisplay.textContent = "Accuracy: 0%";
    timerDisplay.textContent = "Time: 00:00";
}

// Switch theme between light and dark mode
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Handle start button click
startBtn.addEventListener("click", () => {
    selectedTime = parseInt(timeSelect.value);
    startTest();
});

// Handle reset button click
resetBtn.addEventListener("click", resetTest);

// Handle input field typing
inputField.addEventListener("input", updateTypingStats);

