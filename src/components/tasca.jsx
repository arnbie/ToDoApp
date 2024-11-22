import React from "react";
import "../TodoApp.css";

const Tasca = ({ text, doTask, onToggle }) => {
  return (
    <li className="todo-item">
      <span className={`todo-text ${doTask ? "todo-completed" : ""}`}>{text}</span>
      <div className="todo-actions">
        {doTask ? (
          <button className="todo-delete-button" onClick={onToggle}>
            ❌
          </button>
        ) : (
          <button className="todo-complete-button" onClick={onToggle}>
            ✔
          </button>
        )}
      </div>
    </li>
  );
};

export default Tasca;