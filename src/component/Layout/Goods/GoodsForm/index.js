import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../UI/Input";
import { cartActions } from "../../../../store/cart-slice";
import { useEffect } from "react";

const GoodsForm = ({ item }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const dispatch = useDispatch();
  const amountInputRef = useRef();
  const cart = useSelector((state) => state.cart);

  const submitCartHandler = (event) => {
    event.preventDefault();

    const amountValue = amountInputRef.current.value;
    const amountValueNumber = +amountValue;

    if (
      amountValueNumber > 5 ||
      amountValueNumber < 1 ||
      amountValue.length === 0
    ) {
      setAmountIsValid(false);
      return;
    }

    const cartList = {
      id: item.id,
      name: item.name,
      description: item.description,
      amount: +amountInputRef.current.value,
      price: item.price,
    };

    dispatch(cartActions.add(cartList));
  };

  useEffect(() => {
    const parsedCart = JSON.stringify({
      items: cart.items,
      totalAmount: cart.totalAmount,
    });

    localStorage.setItem("cart", parsedCart);
  }, [cart]);

  return (
    <form onSubmit={submitCartHandler}>
      <Input
        label="Quantity:"
        ref={amountInputRef}
        input={{
          type: "number",
          id: "quantity",
          min: "0",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>Add To Cart</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default GoodsForm;
