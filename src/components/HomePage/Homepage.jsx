import "./Homepage.css";
import NavBar from "../General/NavBar";
import Hero from "./Hero";
import ProductsPreview from "./ProductsPreview";

export default function Homepage({products, addToCart}) {
  return (
    <div className="home-page-container">
      <NavBar />
      <Hero />
      <ProductsPreview products={products} addToCart={addToCart} />
    </div>
  );
}
