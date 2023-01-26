import { useParams, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const GoodDetail = () => {
  const { goodId } = useParams();

  return (
    <Switch>
      <Route path={`/good/${goodId}`} exact>
        <Link to={`/good/${goodId}/comments`}>All comments</Link>
      </Route>
      <Route path={`/good/${goodId}/comments`}></Route>
    </Switch>
  );
};

export default GoodDetail;
