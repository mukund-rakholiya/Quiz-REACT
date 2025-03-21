import React from "react";

export default function Answers(answers, selectedAnsewer, answerState) {
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClasses = "";
        const isSelected = userAnswers[userAnswers.length - 1] === answer;

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "Wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClasses}
              onClick={() => handleSelectAnswer(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
