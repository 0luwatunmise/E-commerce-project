import "./NavBar.css"

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-left">
          <a>Home</a>
          <a>Products</a>
          <a>About us</a>
        </div>

        <div className="nav-bar-center">Brand Name</div>

        <div className="nav-bar-right">
          <div className="search-container">
            <input
              className="search-input"
              placeholder="what are you looking for?"
            />
            <img src="../src/assets/search.svg" className="icon" />
          </div>
          <a>
            <img src="../src/assets/shopping-cart.svg" className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}
