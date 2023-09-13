import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      return;
    }

    const newTaskCreated = {
      id: Date.now(),
      title: newTask,
    };

    setTasks([...tasks, newTaskCreated]);
    setNewTask("");
  };

  const deleteTask = (taskId) => {
    const deletedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deletedTask);
  };

  return (
    <>
      <header className="header-wrapper">
        <h2>Task Tracker</h2>
      </header>
      <main className="main-wrapper">
        <section className="tasksForm-wrapper">
          <h3>Remember your taks and do them!</h3>
          <form onSubmit={addTask}>
            <input
              type="text"
              placeholder="New task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button id="send-task" type="submit">
              Send
            </button>
          </form>
        </section>
        <section className="tasks-wrapper">
          <h3>Your tasks</h3>
          <ul className="tasks-items-wrapper">
            {tasks.map((task) => (
              <li key={task.id} className="tasks-item">
                {task.title}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
