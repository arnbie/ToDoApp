import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import TodoAppVisual from "./TodoApp"; // Asegúrate de que la ruta sea correcta

import Tasca from "./components/tasca";

const App = () => {
  // Estado inicial de las tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender React", doTask: false },
    { id: 2, text: "Hacer una To-Do App", doTask: false },
  ]);

  // Estado para el input de la nueva tarea
  const [newTask, setNewTask] = useState("");

  // Función para alternar el estado de una tarea
  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, doTask: !task.doTask } : task
      )
    );
  };

  // Función para añadir una nueva tarea
  const addTask = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask, doTask: false },
      ]);
      setNewTask(""); // Limpia el input
    }
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>

      {/* Formulario para añadir una nueva tarea */}
      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          className="task-input"
        />
        <button type="submit" className="add-task-button">
          Agregar
        </button>
      </form>

      <ul className="todo-list">
        {tasks.map((task) => (
          <Tasca
            key={task.id}
            text={task.text}
            doTask={task.doTask}
            onToggle={() => toggleTaskStatus(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;