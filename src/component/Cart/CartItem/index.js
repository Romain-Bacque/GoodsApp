import classes from "./style.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.content}>
      <div>
        <h3>{props.name}</h3>
        <div>
          <span className={classes.content__price}>{price}</span>
          <span className={classes.content__amount}>X {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button className="button-alt" onClick={props.onRemove}>
          -
        </button>
        <button className="button-alt" onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
