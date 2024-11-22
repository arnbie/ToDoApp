import React from "react";
import "./TodoApp.css"; // Importamos el archivo CSS
import Tasca from "./components/tasca";

const TodoAppVisual = () => {
  return (
    <div className="todo-container">
      <h1 className="todo-header">To-Do App</h1>
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Nueva tarea..."
          className="todo-input"
        />
        <button className="todo-add-button">Agregar</button>
      </div>
      <ul className="todo-list">
        {/* Ejemplo de tareas estáticas */}
        <Tasca text="Aprender React" doTask={true} />
        <li className="todo-item">
          <span className="todo-text todo-completed">
            Hacer una To-Do App
          </span>
          <div className="todo-actions">
            <button className="todo-complete-button">✔</button>
            <button className="todo-delete-button">❌</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoAppVisual;