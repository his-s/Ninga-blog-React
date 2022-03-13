import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>This Page Not Found</p>
      <Link to="/">Go to home page ...</Link>
    </div>
  );
};

export default NotFound;
