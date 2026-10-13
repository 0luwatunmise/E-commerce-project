import "./Homepage.css";
import NavBar from "../NavBar/NavBar";
import Hero from "./Hero";
import ProductsPreview from "./ProductsPreview";

export default function Homepage({products, addToCart, cartQuantity, clicked}) {
  return (
    <div className="home-page-container">
      <NavBar cartQuantity={cartQuantity} />
      <Hero />
      <ProductsPreview products={products} addToCart={addToCart} clicked={clicked}/>
    </div>
  );
}
