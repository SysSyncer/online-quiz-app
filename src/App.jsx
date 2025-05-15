// src/App.jsx
import React from "react";
import Quiz from "./components/Quiz";
import "./App.css"; // We'll create this for global styles

function App() {
  return (
    <div className="app">
      <header>
        <h1>Online Quiz App</h1>
      </header>
      <main>
        <Quiz />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Your Quiz App</p>
      </footer>
    </div>
  );
}

export default App;
