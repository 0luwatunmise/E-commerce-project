import "./Homepage.css";
import NavBar from "../General/NavBar";
import Hero from "./Hero";
import ProductsPreview from "./ProductsPreview";

export default function Homepage({products, addToCart, cartQuantity}) {
  return (
    <div className="home-page-container">
      <NavBar cartQuantity={cartQuantity} />
      <Hero />
      <ProductsPreview products={products} addToCart={addToCart} />
    </div>
  );
}
