import React, { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

function Quiz() {
  const shuffledAnswers = useRef();
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setAnswerState("answered");
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });

    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
  });

  const handleSkippedAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Quiz Complete Image" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <div id="quiz">
      <QuestionTimer
        key={activeQuestionIndex}
        timeOut={10000}
        onTimeOut={handleSkippedAnswer}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers />
    </div>
  );
}

export default Quiz;
