import "./ProductsPreview.css";
import { Link } from "react-router-dom";

export default function ProductsPreview({ products }) {
  const productsPreview = products.slice(0, 8);
  console.log(productsPreview);

  return (
    <div className="preview-products-container">
      <div className="product-link-container">
        <Link to="/products" className="view-products-link">
          View all products
        </Link>
      </div>

      <div className="product-card-container">
        {productsPreview.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img className="product-image" src={product.image} />
              </div>

              <div className="product-info-container">
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <div className="product-name">{product.title}</div>
                  <div className="product-price">${product.price}</div>
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
          );
        })}
      </div>
    </div>
  );
}
