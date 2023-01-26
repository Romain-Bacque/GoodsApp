import classes from "./style.module.css";

const Notification = (props) => {
  let specialClass = "";

  if (props.status === "success") {
    specialClass = classes.success;
  } else if (props.status === "error") {
    specialClass = classes.error;
  }

  return (
    <p className={`${classes.notification} ${specialClass}`}>{props.message}</p>
  );
};

export default Notification;
