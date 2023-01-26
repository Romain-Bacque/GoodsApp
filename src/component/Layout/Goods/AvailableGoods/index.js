import React, { useEffect, useState } from "react";
import GoodsList from "../GoodsList";
import Card from "../../../UI/Card";
import classes from "./style.module.css";
import axios from "axios";

// const dummy_list = [
//   {
//     id: "g1",
//     name: "black t-shirt",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 43.89,
//   },
//   {
//     id: "g2",
//     name: "green t-shirt",
//     description: "Impedit quae soluta eius quam maxime dolorem.",
//     price: 23.99,
//   },
//   {
//     id: "g3",
//     name: "blue t-shirt",
//     description: "Vitae commodi perspiciatis aspernatur, deserunt.",
//     price: 31.99,
//   },
//   {
//     id: "g4",
//     name: "red t-shirt",
//     description: "Dignissimos nostrum delectus.",
//     price: 10.99,
//   },
// ];

const AvailableGoods = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [httpError, setHttpError] = useState(null);
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await axios.get(
          "https://goods-app-102fe-default-rtdb.firebaseio.com/goods.json"
        );

        if (response.status !== 200) throw new Error(response.status);

        const data = response.data;

        const loadedList = [];

        for (let key in data) {
          loadedList.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        setIsLoaded(true);
        setHttpError(null);
        setGoods(loadedList);
      } catch (err) {
        setIsLoaded(true);
        setHttpError(err.message);
      }
    };

    fetchGoods();
  }, []);

  if (!isLoaded) {
    return (
      <article className={classes.loading}>
        <p>is Loading...</p>
      </article>
    );
  }

  if (httpError) {
    return (
      <article className={classes.error}>
        <p>{httpError}</p>
      </article>
    );
  }

  const goodsList = (
    <ul className={classes.list}>
      {goods.map((item) => (
        <GoodsList key={item.id} item={item} />
      ))}
    </ul>
  );

  return (
    <Card className={classes["card-visible"]}>
      <ul className={classes.list}>{goodsList}</ul>
    </Card>
  );
};

export default AvailableGoods;
