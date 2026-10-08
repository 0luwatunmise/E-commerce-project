import NavBar from "../General/NavBar";
import "./ProductsPage.css";

export default function ProductsPage({ products, addToCart, cartQuantity }) {
  return (
    <div className="products-page-container">
      <NavBar cartQuantity={cartQuantity}/>

      <div className="products-header-container">
        <div className="products-header">New Arrivals</div>
        <div className="product-categories">
          <p>MEN</p>
          <p>WOMEN</p>
          <p>ELECTRONICS</p>
          <p>JEWELERY</p>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => {
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
                  <button
                    className="cart-button"
                    onClick={() => {
                      addToCart(product.id);
                    }}
                  >
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
