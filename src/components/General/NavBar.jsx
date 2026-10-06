import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-left">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <a>About us</a>
        </div>

        <div className="nav-bar-center">HELLIOS</div>

        <div className="nav-bar-right">
          <div className="search-container">
            <input
              className="search-input"
              placeholder="what are you looking for?"
            />
            <img src="../src/assets/search.svg" className="icon" />
          </div>
          <Link to="/cart">
            <img src="../src/assets/shopping-cart.svg" className="icon" />
          </Link>
        </div>
      </div>
    </>
  );
}
