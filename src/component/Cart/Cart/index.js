import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Modal from "../../UI/Modal";
import classes from "./style.module.css";
import { cartActions } from "../../../store/cart-slice";
import CartItem from "../CartItem";
import { sendCartData } from "../../../store/cart-actions";
import Checkout from "../CheckOut";

const Cart = ({ onHide }) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const totalAmount = useSelector((state) => +state.cart.totalAmount);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const formattedTotalAmount = `$${
    totalAmount > 0 ? totalAmount.toFixed(2) : "0.00"
  }`;
  const hasItems = cart.items.length > 0;

  function addHandler(item) {
    dispatch(cartActions.add({ ...item, amount: 1 }));
  }

  function removeHandler(id) {
    dispatch(cartActions.remove(id));
  }

  const clickHandler = () => {
    setIsCheckOut(true);
  };

  // send orders to data base
  const postOrdersHandler = (userData) => {
    dispatch(sendCartData({ user: userData, orderedItems: cart.items }));
    onHide(false);
  };

  useEffect(() => {
    const parsedCart = JSON.stringify({
      items: cart.items,
      totalAmount: cart.totalAmount,
    });

    localStorage.setItem("cart", parsedCart);
  }, [cart]);

  let modalContent = (
    <>
      {cart?.items.length > 0 && (
        <ul className={classes.list}>
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={addHandler.bind(null, item)}
              onRemove={removeHandler.bind(null, item.id)}
            />
          ))}
        </ul>
      )}
      <div className={classes.content}>
        <h2>Total Amount</h2>
        <span className={classes.content__price}>{formattedTotalAmount}</span>
      </div>
      {isCheckOut && (
        <Checkout
          onHide={() => onHide(false)}
          onSendRequest={postOrdersHandler}
        />
      )}
      {!isCheckOut && (
        <div className={classes.actions}>
          <button className="button-alt" onClick={() => onHide(false)}>
            Close
          </button>
          {hasItems && (
            <button type="button" onClick={clickHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  return <Modal>{modalContent}</Modal>;
};

export default Cart;
