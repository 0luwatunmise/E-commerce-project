import "./ProductsPreview.css";
import { Link } from "react-router-dom";

export default function ProductsPreview() {
  return (
    <div className="preview-products-container">
      <div className="product-link-container">
        <Link to="/products" className="view-products-link">
          View all products
        </Link>
      </div>

      <div className="product-card-container">
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

        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
      </div>
    </div>
  );
}
