import "./NavBar.css";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import searchIcon from "../../assets/search.svg";
import cartIcon from "../../assets/shopping-cart.svg";
import { useState, useEffect, useRef } from "react";

export default function NavBar({ cartQuantity }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get("search") || "");
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  function search() {
    const term = input.trim();
    if (term === "") {
      return;
    }
    navigate(`/products?search=${encodeURIComponent(term)}`);
    setSearchOpen(false);
  }

  useEffect(() => {
    if (searchOpen) inputRef.current.focus();
  }, [searchOpen]);

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

        <div className={`nav-bar-center ${searchOpen ? "open" : ""}`}>HELLIOS</div>

        <div className="nav-bar-right">
          <div className="search-container">
            <input
              ref={inputRef}
              className={`search-input ${searchOpen ? "open" : ""} `}
              placeholder="what are you looking for?"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <img
              src={searchIcon}
              className="search-icon"
              onClick={() => {
                !searchOpen ? setSearchOpen(true) : search();
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
