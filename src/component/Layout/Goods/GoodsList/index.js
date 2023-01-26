import GoodsForm from "../GoodsForm";
import classes from "./style.module.css";

const GoodsList = ({ item }) => {
  const price = `$${item.price.toFixed(2)}`;

  return (
    <li>
      <div className={classes.content}>
        <h3>{item.name}</h3>
        <p className={classes.content__description}>{item.description}</p>
        <p className={classes.content__price}>{price}</p>
      </div>
      <GoodsForm item={item} />
    </li>
  );
};

export default GoodsList;
