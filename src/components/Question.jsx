// src/components/Question.jsx
import React from "react";
import "./Question.css"; // We'll create this CSS file next

const Question = ({ question, onAnswerOptionClick }) => {
  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      <div className="options-container">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswerOptionClick(option.isCorrect)}
            className="option-button"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
