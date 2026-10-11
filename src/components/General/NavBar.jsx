import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar({ cartQuantity }) {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-left">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link-active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "nav-link-active" : "")}
          >
            Products
          </NavLink>
          <a>About us</a>
        </div>

        <div className="nav-bar-center">HELLIOS</div>

        <div className="nav-bar-right">
          <div className="search-container">
            <input
              className="search-input"
              placeholder="what are you looking for?"
            />
            <img src="../src/assets/search.svg" className="search-icon" />
          </div>

          <div>
            <div className="cart-icon-container">
              <NavLink to="/cart">
                <img
                  src="../src/assets/shopping-cart.svg"
                  className="cart-icon"
                />
              </NavLink>
              <div className="cart-quantity">{cartQuantity}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
