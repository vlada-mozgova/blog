import ReactDOM from "react-dom";
import classes from "./notification.module.scss";

const Notification = ({ title, message, status }) => {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  return ReactDOM.createPortal(
    <div className={`${classes.notification} ${statusClasses}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
};

export default Notification;
