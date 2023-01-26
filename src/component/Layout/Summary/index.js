import { useState } from "react";

import classes from "./style.module.css";

const Summary = ({ setIsVisible }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  function clickHandler() {
    setIsButtonVisible(false);
    setIsVisible();
  }

  const buttonClasses = !isButtonVisible ? "button-visible" : "";

  return (
    <div className={classes.summary}>
      <p className={classes.summary__description}>
        Your clothes are as unique as you are
      </p>
      <h2 className={classes.summary__title}>
        Brightening clothes at low price
      </h2>

      <button type="button" className={buttonClasses} onClick={clickHandler}>
        Shop Now
      </button>
    </div>
  );
};

export default Summary;
