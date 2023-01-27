import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "./component/AppLayout";
import { Route, Redirect, Switch } from "react-router-dom";
import Goods from "./pages/GoodsPage";
import GoodDetail from "./pages/GoodDetailPage";
import { fetchGoods } from "./store/cart-actions";
import { cartActions } from "./store/cart-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      dispatch(
        cartActions.replace({
          items: cart.items,
          totalAMount: cart.totalAmount,
        })
      );
    }
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/goods" />
        </Route>
        <Route path="/goods" exact>
          <Goods />
        </Route>
        <Route path="/goods/:goodId" exact>
          <GoodDetail />
        </Route>
        <Route path="*">
          <Redirect to="/goods" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
