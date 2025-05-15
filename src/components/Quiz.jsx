// src/components/Quiz.jsx
import React, { useState } from "react";
import { quizData } from "../quizData"; // Import your questions
import Question from "./Question";
import Result from "./Result";
import "./Quiz.css";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setQuizStarted(false); // Go back to start screen
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container start-screen">
        <h1>Welcome to the Quiz!</h1>
        <button onClick={handleStartQuiz} className="start-button">
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <Result
          score={score}
          totalQuestions={quizData.length}
          onRestartQuiz={handleRestartQuiz}
        />
      ) : (
        <>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / quizData.length) * 100
                }%`,
              }}
            >
              Question {currentQuestionIndex + 1} of {quizData.length}
            </div>
          </div>
          <Question
            question={quizData[currentQuestionIndex]}
            onAnswerOptionClick={handleAnswerOptionClick}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
