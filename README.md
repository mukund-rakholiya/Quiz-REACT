# Quiz-React

## Overview 🎯
**Quiz-React** is an interactive quiz application built with React that challenges users with multiple-choice questions. It provides real-time feedback, tracks progress, and allows users to retry the quiz. The application dynamically handles skipped, correct, and incorrect answers while maintaining a smooth user experience.

## Features ✨
- 🕒 **Timer-Based Questions:** Each question has a countdown timer to add a challenge.
- ✅ **Instant Answer Validation:** Shows real-time feedback on whether the answer is correct or incorrect.
- 🔄 **Replay Functionality:** Users can reset and attempt the quiz again.
- 📊 **Performance Summary:** Displays a summary with the percentage of correct, incorrect, and skipped questions.
- 🎨 **Responsive UI:** Clean and user-friendly interface with engaging visuals.

## Project Structure 📂
```bash
src/
├── assets/                 # Images and static assets
├── components/             # UI components
│   ├── Header.jsx          # Quiz title and logo
│   ├── Quiz.jsx            # Main quiz logic
│   ├── Question.jsx        # Individual question component
│   ├── QuestionTimer.jsx   # Countdown timer for each question
│   ├── Answers.jsx         # Displays multiple-choice options
│   ├── Summary.jsx         # Shows quiz results
│   ├── ResetQuiz.jsx       # Button to restart quiz
├── question.js             # Question dataset
├── App.js                  # Root component
└── index.js                # Entry point
```

## Installation & Setup 🚀
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mukund-rakholiya/Quiz-React.git
   cd Quiz-React
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## Usage 🏆
- Start the quiz by answering the questions within the given time.
- Skip a question if unsure; it will be marked as skipped.
- At the end, review your performance in the summary section.
- Click **"Play again!"** to restart the quiz.

## Future Enhancements 🚀
- 🎤 **Add Audio Questions**
- 🔢 **Support for Different Question Types (True/False, Fill in the Blank, etc.)**
- 📈 **Leaderboard Feature**
- 🌐 **Multiplayer Mode**

## License 📝
This project is licensed under the MIT License.
