import { useEffect, useState } from "react";
import {
  LanguageSelector,
  Notifications,
  TaskForm,
  TaskList,
  TaskSearch,
} from "@/components";
import styles from "../styles/home.module.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [inputFilterTask, setInputFilterTask] = useState("");
  const [inputTaskEdit, setInputTaskEdit] = useState("");

  useEffect(() => {
    try {
      const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      setTasks(savedTasks);
    } catch (error) {
      console.error("Error: ", error);
    }
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
    try {
      e.preventDefault();
      if (newTask.trim() === "") {
        createNotifications(t("notifications.error"), "delete");
        return;
      }

      const newTaskCreated = {
        id: Date.now(),
        title: newTask,
      };

      setTasks([...tasks, newTaskCreated]);
      setNewTask("");
      setInputFilterTask("");
      createNotifications(t("notifications.success"), "success");
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTaskCreated]));
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const deleteTask = (taskId) => {
    try {
      const deletedTask = tasks.filter((task) => task.id !== taskId);
      setTasks(deletedTask);
      createNotifications(t("notifications.delete"), "delete");
      localStorage.setItem("tasks", JSON.stringify(deletedTask));
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      setInputTaskEdit(taskToEdit.title);
    }
  };

  const saveEditedTask = (e) => {
    try {
      e.preventDefault();
      if (inputTaskEdit.trim() === "") {
        createNotifications(t("notifications.error"), "error");
        return;
      }
      const updatedTask = tasks.map((task) =>
        task.id === editingTask.id ? { ...task, title: inputTaskEdit } : task
      );

      setTasks(updatedTask);
      setInputTaskEdit("");
      setEditingTask(null);
      createNotifications(t("notifications.edit"), "success");
      localStorage.setItem("tasks", JSON.stringify(updatedTask));
    } catch (error) {
      console.error("Error: ", error);
    }
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
        <h2>{t("header.title")}</h2>
        <div className={styles.selectLangWrapper}>
          <LanguageSelector />
        </div>
      </header>
      <main className={styles.mainWrapper}>
        <section className={styles.tasksFormWrapper}>
          <h3>{t("main.title1")}</h3>
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
          <h3>{t("main.title2")}</h3>
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
