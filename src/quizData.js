// src/quizData.js
export const quizData = [
  {
    id: 1,
    questionText: "What is the capital of France?",
    options: [
      { id: "a", text: "Berlin", isCorrect: false },
      { id: "b", text: "Madrid", isCorrect: false },
      { id: "c", text: "Paris", isCorrect: true },
      { id: "d", text: "Rome", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: "Which planet is known as the Red Planet?",
    options: [
      { id: "a", text: "Earth", isCorrect: false },
      { id: "b", text: "Mars", isCorrect: true },
      { id: "c", text: "Jupiter", isCorrect: false },
      { id: "d", text: "Venus", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "What is the largest ocean on Earth?",
    options: [
      { id: "a", text: "Atlantic Ocean", isCorrect: false },
      { id: "b", text: "Indian Ocean", isCorrect: false },
      { id: "c", text: "Arctic Ocean", isCorrect: false },
      { id: "d", text: "Pacific Ocean", isCorrect: true },
    ],
  },
  // Add more questions as needed
];
