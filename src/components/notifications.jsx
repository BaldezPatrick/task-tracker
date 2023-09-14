import { useEffect } from "react";

const Notifications = ({ message, type, closeNotification }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeNotification();
    }, 2000);

    return () => clearTimeout(timer);
  }, [closeNotification]);

  return (
    <>
      <p className={`notification ${type}`}>
        {message}
        <span className="progressBar"></span>
      </p>
    </>
  );
};

export default Notifications;
