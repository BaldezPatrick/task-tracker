import { useEffect } from "react";

const Notifications = ({ message, type, closeNotification }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeNotification();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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
