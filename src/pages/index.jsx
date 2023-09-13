import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Notifications, TaskForm, TaskList } from "@/components";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || []);
    setTasks(savedTasks);
  }, []);

  const createNotifications = (textNotification, type) => {
    const notification = {
      id: Date.now(),
      textNotification,
      type,
    };

    setNotifications([...notifications, notification]);
  };

  const deleteNotification = (notificationId) => {
    const deletedNotification = notifications.filter(
      (notification) => notification.id !== notificationId
    );
    setNotifications(deletedNotification);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      createNotifications("Empty input", "delete");
      return;
    }

    const newTaskCreated = {
      id: Date.now(),
      title: newTask,
    };

    setTasks([...tasks, newTaskCreated]);
    setNewTask("");
    createNotifications("Task added", "success");
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTaskCreated]));
  };

  const deleteTask = (taskId) => {
    const deletedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deletedTask);
    createNotifications("Task deleted", "delete");
    localStorage.setItem("tasks", JSON.stringify(deletedTask));
  };

  return (
    <>
      <header className="header-wrapper">
        <h2>Task Tracker</h2>
      </header>
      <main className="main-wrapper">
        <section className="tasksForm-wrapper">
          <h3>Remember your taks and do them!</h3>
          <TaskForm
            addTask={addTask}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </section>
        <section className="tasks-wrapper">
          <h3>Your tasks</h3>
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </section>
      </main>
      <div className="notifications">
        {notifications.map((notification) => (
          <Notifications
            key={notification.id}
            type={notification.type}
            message={notification.textNotification}
            closeNotification={() => deleteNotification(notification.id)}
          />
        ))}
      </div>
    </>
  );
}