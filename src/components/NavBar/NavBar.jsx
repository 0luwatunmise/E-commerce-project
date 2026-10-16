import "./NavBar.css";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import searchIcon from "../../assets/search.svg";
import cartIcon from "../../assets/shopping-cart.svg";
import { useState } from "react";

export default function NavBar({ cartQuantity }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get("search") || "");

  function search() {
    const term = input.trim();
    navigate(
      term ? `/products?search=${encodeURIComponent(term)}` : "/products",
    );
  }

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
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <img
              src={searchIcon}
              className="search-icon"
              onClick={() => {
                search();
              }}
            />
          </div>

          <div>
            <div className="cart-icon-container">
              <NavLink to="/cart">
                <img src={cartIcon} className="cart-icon" />
              </NavLink>
              <div className="cart-quantity">{cartQuantity}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
