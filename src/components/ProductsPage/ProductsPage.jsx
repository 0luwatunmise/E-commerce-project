import NavBar from "../General/NavBar";
import "./ProductsPage.css";

export default function ProductsPage() {
  return (
    <div className="products-page-container">
      <NavBar />

      <div className="products-header-container">
        <div className="products-header">New Arrivals</div>
        <div className="product-categories">
          <p>MEN</p>
          <p>WOMEN</p>
          <p>SHOES</p>
          <p>CLOTHES</p>
        </div>
      </div>

      <div className="products-grid">
        <div className="product-card">

          
            <img src="../../src/assets/hero.webp" className="product-image" />
          

          <div className="product-info-container">
            <div className="product-info">
              <div className="product-category">Men's Shirt</div>
              <div className="product-name">Striped knit shirt</div>
              <div className="product-price">$50.00</div>
            </div>

            <div>
              <button className="cart-button">
                <img
                  src="../src/assets/shopping-cart-black.svg"
                  className="cart-button-black"
                />
              </button>

            </div>
          </div>
        </div>

        <div className="product-card">

          
            <img src="../../src/assets/hero.webp" className="product-image" />
          

          <div className="product-info-container">
            <div className="product-info">
              <div className="product-category">Men's Shirt</div>
              <div className="product-name">Striped knit shirt</div>
              <div className="product-price">$50.00</div>
            </div>

            <div>
              <button className="cart-button">
                <img
                  src="../src/assets/shopping-cart-black.svg"
                  className="cart-button-black"
                />
              </button>

            </div>
          </div>
        </div>

        <div className="product-card">

          
            <img src="../../src/assets/hero.webp" className="product-image" />
          

          <div className="product-info-container">
            <div className="product-info">
              <div className="product-category">Men's Shirt</div>
              <div className="product-name">Striped knit shirt</div>
              <div className="product-price">$50.00</div>
            </div>

            <div>
              <button className="cart-button">
                <img
                  src="../src/assets/shopping-cart-black.svg"
                  className="cart-button-black"
                />
              </button>

            </div>
          </div>
        </div>

        <div className="product-card">

          
            <img src="../../src/assets/hero.webp" className="product-image" />
          

          <div className="product-info-container">
            <div className="product-info">
              <div className="product-category">Men's Shirt</div>
              <div className="product-name">Striped knit shirt</div>
              <div className="product-price">$50.00</div>
            </div>

            <div>
              <button className="cart-button">
                <img
                  src="../src/assets/shopping-cart-black.svg"
                  className="cart-button-black"
                />
              </button>

            </div>
          </div>
        </div>

        <div className="product-card">

          
            <img src="../../src/assets/hero.webp" className="product-image" />
          

          <div className="product-info-container">
            <div className="product-info">
              <div className="product-category">Men's Shirt</div>
              <div className="product-name">Striped knit shirt</div>
              <div className="product-price">$50.00</div>
            </div>

            <div>
              <button className="cart-button">
                <img
                  src="../src/assets/shopping-cart-black.svg"
                  className="cart-button-black"
                />
              </button>

            </div>
          </div>
        </div>

        <div className="product-card">

          
            <img src="../../src/assets/hero.webp" className="product-image" />
          

          <div className="product-info-container">
            <div className="product-info">
              <div className="product-category">Men's Shirt</div>
              <div className="product-name">Striped knit shirt</div>
              <div className="product-price">$50.00</div>
            </div>

            <div>
              <button className="cart-button">
                <img
                  src="../src/assets/shopping-cart-black.svg"
                  className="cart-button-black"
                />
              </button>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
