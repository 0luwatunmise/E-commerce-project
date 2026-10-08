import "./CartPage.css";
import { Link } from "react-router-dom";

export default function CartPage({ cart, setCart }) {
  function increaseItemQuantity(id) {
    setCart((prevCart) => {
      return prevCart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem,
      );
    });
  }

    function deccreaseItemQuantity(id) {
    setCart((prevCart) => {
      return prevCart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
          : cartItem,
      );
    });
  }

  return (
    <div className="cart-page-container">
      <div>
        <Link to="/">
          <div className="cart-brand-name">HELLIOS</div>
        </Link>
        <div className="shopping-cart">Shopping Cart</div>
      </div>

      <div className="cart-container">
        <div>
          <div className="order-summary-container">
            <div className="order-summary-header">
              <label className="product">Product Info</label>
              <label>Quantity</label>
              <label>Price</label>
              <label></label>
            </div>

            {cart.map((cartItem) => {
              return (
                <div className="order-summary-body" key={cartItem.id}>
                  <div className="order-product-info">
                    <div className="order-image-container">
                      <img src={cartItem.image} className="order-image" />
                    </div>

                    <div className="order-desc">
                      <div className="order-name">{cartItem.title}</div>
                      <div className="order-category">{cartItem.category}</div>
                    </div>
                  </div>

                  <div class="quantity">
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => increaseItemQuantity(cartItem.id)}
                    >
                      +
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button type="button" aria-label="Decrease quantity" onClick={()=>{deccreaseItemQuantity(cartItem.id)}}>
                      &minus;
                    </button>
                  </div>

                  <label className="cart-price">
                    {cartItem.price.toFixed(2)}
                  </label>

                  <button className="delete-order-btn">
                    <img src="../../src/assets/trash.svg" />
                  </button>
                </div>
              );
            })}
          </div>

          <button className="update-cart-btn">Update Cart</button>
        </div>

        <div>
          <div className="payment-summary-container">
            <div className="payment-summary-header">
              <label>Payment Summary</label>
            </div>

            <div className="payment-summary-body">
              <label className="summary-text">Sub Total</label>{" "}
              <label className="summary-price"> $ 2000</label>
              <label className="summary-text">Tax(10%)</label>{" "}
              <label className="summary-price"> $ 200</label>
              <label className="summary-text">Delivery </label>{" "}
              <label className="summary-price"> $ 15</label>
            </div>

            <div className="payment-summary-total">
              <label className="summary-total">Total</label>{" "}
              <label className="summary-total-price">$ 2215</label>
            </div>
          </div>

          <button className="checkout-btn"> CheckOut </button>
        </div>
      </div>
    </div>
  );
}
