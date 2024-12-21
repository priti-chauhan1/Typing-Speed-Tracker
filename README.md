# Documentation for Typing Speed Tracker Project

This project is a simple Typing Speed Tracker web application that allows users to track their typing speed and accuracy during a typing test. The project includes features like:
- A timer that counts down from the selected test duration.
- Calculation of words per minute (WPM) and typing accuracy.
- A theme toggle button to switch between light and dark modes.
- A reset button to restart the test.

### Table of Contents
1. [Project Overview](#project-overview)
2. [How to Use the Typing Speed Tracker](#how-to-use-the-typing-speed-tracker)
3. [Features](#features)
4. [Code Explanation](#code-explanation)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
5. [How to Run the Project Locally](#how-to-run-the-project-locally)
## Project Overview
The Typing Speed Tracker is a web application that lets you test your typing speed and accuracy. The user selects the test duration (1 minute, 3 minutes, or 5 minutes) and starts the test by typing a given sentence. The app will calculate and display:
- **Words Per Minute (WPM)**: A measure of how many words you type per minute.
- **Accuracy**: A percentage that shows how accurately you typed the given text.
It also allows you to toggle between light and dark themes and reset the test whenever needed.
## How to Use the Typing Speed Tracker
1. **Select Test Duration**: 
   - Use the dropdown menu to choose a duration (1 minute, 3 minutes, or 5 minutes).
   2. **Start the Test**: 
   - Click on the "Start Test" button to begin the typing test.
3. **Type the Text**: 
   - Start typing the text that appears on the screen in the "Type here" area. The text to type is a sample sentence: "The quick brown fox jumps over the lazy dog."
   4. **Track Your Progress**: 
   - As you type, the app will calculate and show your typing speed (WPM) and typing accuracy in real-time.
5. **End the Test**: 
   - The timer will automatically stop when the selected time is over, and the results will be shown.
6. **Reset the Test**: 
   - If you want to try again, press the "Reset" button to clear the text and results and start from scratch.
7. **Switch Themes**: 
   - Use the "Toggle Dark Mode" button to switch between light and dark mode to suit your preference.
## Features
- **Timer**: The app includes a countdown timer that tracks how long you've been typing.
- **Words Per Minute (WPM)**: The number of words you type per minute, updated in real-time.
- **Accuracy**: Shows the percentage of correctly typed characters relative to the total characters.
- **Dark Mode Toggle**: Allows switching between light and dark modes for better readability or user preference.
- **Reset Button**: Resets the typing test so you can start again.

## Code Explanation
### HTML
The HTML file defines the structure and layout of the web page. Here's a breakdown of the key sections:
1. **Header**:
   - Contains the main title ("Typing Speed Tracker") and the "Toggle Dark Mode" button.
2. **Timer and Test Duration Section**:
   - A dropdown menu (`<select>`) to choose the test duration (1, 3, or 5 minutes).
   - A button to start the test.
3. **Typing Area**:
   - A paragraph (`<p>`) that shows the sample text ("The quick brown fox...").
   - A `<textarea>` where users can type the text. It's initially disabled.
4. **Results Section**:
   - Displays the typing statistics: Words per Minute (WPM), Accuracy, and the Timer.
5. **Progress Section**:
   - A reset button to restart the typing test.
### CSS
The CSS file defines the visual style of the app. Here’s an overview of its key elements:
1. **Body and Container**:
   - The body uses Flexbox to center the content.
   - The container has padding, rounded corners, and a shadow for a neat and polished look.
2. **Typography and Buttons**:
   - The header uses a large font size for the title.
   - Buttons have hover effects, changing the background color when hovered over.
3. **Theme Styles**:
   - The `dark-mode` class changes the background color of the body and container to darker shades when the user switches to dark mode.
4. **Textarea Styles**:
   - The textarea has a border and padding to make it look neat. The disabled state makes the background light gray.
### JavaScript
The JavaScript file adds interactivity to the app. Here's how it works:
1. **Variables**: 
   - We define several variables for managing the test (e.g., `timerInterval`, `startTime`, `totalWords`, `correctWords`).
2. **Timer Function**:
   - `startTimer()` starts the countdown timer when the test begins. It updates every second and stops when time is up.
3. **Test Logic**:
   - The `startTest()` function enables the typing field, starts the timer, and sets the text to be typed.
   - The `endTest()` function calculates the WPM and accuracy once the timer runs out.
   - `updateTypingStats()` calculates the WPM and accuracy dynamically as the user types.
4. **Reset Logic**:
   - The `resetTest()` function clears the text, stops the timer, and resets all the statistics.
5. **Dark Mode Toggle**:
   - The `themeToggleBtn` toggles the `dark-mode` class on the body when clicked, allowing users to switch between light and dark themes.
6. **Event Listeners**:
   - Event listeners are used to handle button clicks (Start, Reset, Theme Toggle) and updates to the typing area (input events).
## How to Run the Project Locally

1. **Clone or Download the Project Files**:
   - Download the HTML, CSS, and JavaScript files to your local machine.
   2. **Open the HTML File in a Browser**:
   - Open the `index.html` file in any modern web browser (Google Chrome, Firefox, etc.) to run the Typing Speed Tracker.
3. **Use the App**:
    You can now use the app by selecting a test duration, typing the text, and seeing the results.

Conclusion
This project is a fun and simple way to practice your typing speed and accuracy. By following the instructions in this documentation, you should be able to run and use the Typing Speed Tracker with ease. You can also modify the project to add more features, such as different texts for typing, or advanced accuracy tracking methods.

