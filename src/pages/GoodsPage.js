import { useSelector } from "react-redux";

import AvailableGoods from "../component/Layout/Goods/AvailableGoods";

const Goods = () => {
  const goodsVisible = useSelector((state) => state.ui.goodsVisibility);

  return <section>{goodsVisible && <AvailableGoods />}</section>;
};

export default Goods;
