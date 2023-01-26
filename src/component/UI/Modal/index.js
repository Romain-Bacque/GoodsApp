import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./style.module.css";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHide}></div>;
  };

  const Overlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onHide} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default React.memo(Modal);
