import React from "react";
import quizComplete from "../assets/quiz-complete.png";
import QUESTION from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => QUESTION[index].answers[0] === answer
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswers - correctAnswers;

  return (
    <div id="summary">
      <img src={quizComplete} alt="Quiz Complete Image" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number"> {skippedAnswersShare} %</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number"> {correctAnswersShare} %</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number"> {wrongAnswersShare} %</span>
          <span className="text">skipped</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += "wrong";
          }

          <li key={answer}>
            <h3>{index + 1}</h3>
            <p className="question">{QUESTIONS[index].text}</p>
            <p className="user-answer">{answer}</p>
          </li>;
        })}
      </ol>
    </div>
  );
}
