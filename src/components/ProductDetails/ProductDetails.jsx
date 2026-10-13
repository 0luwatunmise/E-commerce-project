import "./ProductDetails.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function ProductDetails() {
  return (
    <>
      <MdOutlineKeyboardBackspace className="back-button" />
      <div className="product-details-page">
        <div className="details-image-container">
          <img src="../../src/assets/hero.webp" className="details-image" />
        </div>

        <div className="details-info-container">
          <div className="details-name">Black leather pants</div>
          <div className="details-price">$109</div>
          <div className="details-description">
            <div className="description-header">More about this product</div>
            <div className="description-text">
              the gallery, with a main image, prev/next arrows and four
              clickable thumbnails (the active one gets a border). Right: the
              name with a wishlist heart, price, a collapsible description,
              color swatches, a quantity control with the Add to Cart button,
              then SKU, category, tags and share links. Placeholders: the
              product data is a hardcoded object at the top of the JSX, so you
              can swap in a FakeStore API product later. Images are placehold.co
              URLs.
            </div>
          </div>
          <button className="btn-type2 details-cart">Add to cart</button>
        </div>
      </div>
    </>
  );
}
