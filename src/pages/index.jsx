import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Notifications from "@/components/notifications";
import TaskList from "@/components/taskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [notifications, setNotifications] = useState([]);

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
  };

  const deleteTask = (taskId) => {
    const deletedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deletedTask);
    createNotifications("Task deleted", "delete");
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
