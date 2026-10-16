import "./ProductDetails.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function ProductDetails({ products, addToCart, cartQuantity }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <NavBar cartQuantity={cartQuantity} />
      <MdOutlineKeyboardBackspace
        className="back-button"
        onClick={() => {
          goBack();
        }}
      />
      <div className="product-details-page">
        <div className="details-image-container">
          <img src={product.image} className="details-image" />
        </div>

        <div className="details-info-container">
          <div className="details-name">{product.title}</div>
          <div className="details-price">${product.price}</div>
          <div className="description-container">
            <div className="description-header">Description</div>
            <div className="description-text">{product.description}</div>
          </div>
          <div className="cart-btn-container">
            <button
              className="btn-type2 details-cart"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
