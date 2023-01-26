import React, { Fragment } from "react";
import HeaderButton from "../../UI/HeaderButton";
import classes from "./style.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1 className={classes.header__title}>Goods.</h1>
        <HeaderButton onClick={props.onClick} />
      </div>
    </Fragment>
  );
};

export default Header;
