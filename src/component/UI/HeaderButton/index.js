import { useSelector } from "react-redux";
import classes from "./style.module.css";
import UilBag from "@iconscout/react-unicons/icons/uil-bag";
import { useEffect, useState } from "react";

const HeaderButton = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const amountClass = isHighlighted ? classes.bump : "";

  useEffect(() => {
    let timer;

    if (items.length === 0) return;

    setIsHighlighted(true);

    timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  function clickHandler() {
    props.onClick(true);
  }

  return (
    <button className={classes["cart-button"]} onClick={clickHandler}>
      <UilBag className={classes["cart-button__logo"]} />
      <span>Shopping bag</span>
      <span className={amountClass}>({totalAmount})</span>
    </button>
  );
};

export default HeaderButton;
