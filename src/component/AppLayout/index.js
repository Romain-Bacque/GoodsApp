import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import Cart from "../Cart/Cart";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Summary from "../Layout/Summary";
import Notification from "../UI/Notification";

const Layout = (props) => {
  const cartVisibility = useSelector((state) => state.ui.cartVisibility);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const cartVisibilityHandler = (value) => {
    dispatch(uiActions.showCart(value));
  };

  function listVisibilityHandler() {
    dispatch(uiActions.showGoods(true));
  }

  return (
    <>
      {cartVisibility && <Cart onHide={cartVisibilityHandler} />}
      <Header onClick={cartVisibilityHandler} />
      <Summary setIsVisible={listVisibilityHandler} />
      <main>
        {notification && (
          <Notification
            status={notification.status}
            message={notification.message}
          />
        )}
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
