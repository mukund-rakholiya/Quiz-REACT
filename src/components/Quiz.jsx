import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";


function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },
  []); 

  const handleSkippedAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]);

  if (quizIsComplete) {
    return  <Summary userAnswers={userAnswers}/>
  }

  return (
    <Question 
      key={activeQuestionIndex}
      index = {activeQuestionIndex}
      answerState={answerState}
      onSkippedAnswer={handleSkippedAnswer}
    />
  );
}
  export default Quiz;