import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

import axios from "axios";

// action thunks
export const sendCartData = (order) => {
  return async (dispatch) => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Pending",
          message: "pending...",
        })
      );

      try {
        const response = await axios.post(
          "https://goods-app-102fe-default-rtdb.firebaseio.com/orders.json",
          { order }
        );

        if (!response.status === 200) throw new Error(response.status);

        dispatch(cartActions.reset());
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Order is successfully sent!",
          })
        );
      } catch (error) {
        console.log(error);
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Error during sending!",
          })
        );
      }
    };

    await sendCartData();
  };
};
