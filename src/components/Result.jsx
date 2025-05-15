// src/components/Result.jsx
import React from "react";
import "./Result.css";

const Result = ({ score, totalQuestions, onRestartQuiz }) => {
  return (
    <div className="result-container">
      <h2>Quiz Finished!</h2>
      <p>
        Your Score: {score} out of {totalQuestions}
      </p>
      <button onClick={onRestartQuiz} className="restart-button">
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
