import "./CartPage.css";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

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

  function decreaseItemQuantity(id) {
    setCart((prevCart) => {
      return prevCart.map((cartItem) =>
        cartItem.id === id && cartItem.quantity > 1
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
          : cartItem,
      );
    });
  }

  function deleteCartItem(id) {
    setCart((prevCart) => {
      return prevCart.filter((cartItem) => cartItem.id !== id);
    });
  }

  let subTotal = 0;
  cart.forEach((cartItem) => {
    subTotal += cartItem.quantity * cartItem.price;
  });
  const taxPrice = subTotal * 0.1;
  const deliveryPrice = 15;
  const totalPrice = subTotal + taxPrice + deliveryPrice;

  return (
    <>
      {cart.length >= 1 ? (
        <div className="cart-page-container">
          <div>
            <Link to="/products">
              <div className="cont-shopping">Continue Shopping</div>
            </Link>

            <div className="shopping-cart">Shopping Cart</div>
          </div>

          <div className="cart-container">
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
                        <div className="order-name">{cartItem.name}</div>
                        <div className="order-category">
                          {cartItem.category}
                        </div>
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
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => {
                          decreaseItemQuantity(cartItem.id);
                        }}
                      >
                        &minus;
                      </button>
                    </div>

                    <label className="cart-price">
                      {(cartItem.price * cartItem.quantity).toFixed(2)}
                    </label>

                    <button
                      className="delete-order-btn"
                      onClick={() => {
                        deleteCartItem(cartItem.id);
                      }}
                    >
                      <img src="../../src/assets/trash.svg" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="payment-summary-container">
                <div className="payment-summary-header">
                  <label>Payment Summary</label>
                </div>

                <div className="payment-summary-body">
                  <label className="summary-text">Sub Total</label>{" "}
                  <label className="summary-price">
                    {" "}
                    $ {Math.round(subTotal).toFixed(2)}
                  </label>
                  <label className="summary-text">Tax(10%)</label>{" "}
                  <label className="summary-price">
                    {" "}
                    $ {Math.round(taxPrice).toFixed(2)}
                  </label>
                  <label className="summary-text">Delivery </label>{" "}
                  <label className="summary-price"> $ {deliveryPrice}</label>
                </div>

                <div className="payment-summary-total">
                  <label className="summary-total">Total</label>{" "}
                  <label className="summary-total-price">
                    $ {Math.round(totalPrice).toFixed(2)}
                  </label>
                </div>
              </div>

              <button className="checkout-btn"> CheckOut </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-page">

          <div className="cart-title">Shopping Cart</div>

          <div className="empty-cart">
            <div className="empty-icon"><TiShoppingCart /></div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/" className="shop-btn">
              Start Shopping
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
