import { useEffect, useState } from "react";
import { Notifications, TaskForm, TaskList, TaskSearch } from "@/components";
import styles from "../styles/home.module.css";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [inputFilterTask, setInputFilterTask] = useState("");
  const [inputTaskEdit, setInputTaskEdit] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
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
    setInputFilterTask("");
    createNotifications("Task added", "success");
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTaskCreated]));
  };

  const deleteTask = (taskId) => {
    const deletedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deletedTask);
    createNotifications("Task deleted", "delete");
    localStorage.setItem("tasks", JSON.stringify(deletedTask));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      setInputTaskEdit(taskToEdit.title);
    }
  };

  const saveEditedTask = (e) => {
    e.preventDefault();
    if (inputTaskEdit.trim() === "") {
      createNotifications("Empty input", "error");
      return;
    }
    const updatedTask = tasks.map((task) =>
      task.id === editingTask.id ? { ...task, title: inputTaskEdit } : task
    );

    setTasks(updatedTask);
    setInputTaskEdit("");
    setEditingTask(null);
    createNotifications("Task edited", "success");
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };

  const cleanUpSearch = (e) => {
    e.preventDefault();
    if (inputFilterTask.trim() === "") {
      return;
    }
    setInputFilterTask("");
  };

  return (
    <>
      <header className={styles.headerWrapper}>
        <h2>Task Tracker</h2>
      </header>
      <main className={styles.mainWrapper}>
        <section className={styles.tasksFormWrapper}>
          <h3>Remember your taks and do them!</h3>
          <TaskForm
            addTask={addTask}
            newTask={newTask}
            setNewTask={setNewTask}
          />
          <TaskSearch
            inputFilterTask={inputFilterTask}
            setInputFilterTask={setInputFilterTask}
            cleanUpSearch={cleanUpSearch}
          />
        </section>
        <section className={styles.tasksWrapper}>
          <h3>Your tasks</h3>
          <TaskList
            editingTask={editingTask}
            saveEditedTask={saveEditedTask}
            setInputTaskEdit={setInputTaskEdit}
            inputTaskEdit={inputTaskEdit}
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            filterTask={inputFilterTask}
          />
        </section>
      </main>
      <div className={styles.notifications}>
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
