import { useEffect } from "react";
import styles from "../styles/notifications.module.css";

const Notifications = ({ message, type, closeNotification }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeNotification();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <p className={`${styles.notification} ${styles[`${type}`]}`}>
        {message}
        <span className={`${styles.progressBar}`}></span>
      </p>
    </>
  );
};

export default Notifications;
