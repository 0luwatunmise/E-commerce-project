import "./Hero.css";
import hero from '../../assets/hero.webp'
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <p>Look good, feel better, spend less.</p>
        </div>

        <Link to="/products" className="hero-link">
          SHOP NOW
        </Link>

        <img
          src={hero}
          alt="clothes on a hanger"
          fetchPriority="high"
          loading="eager"
          className="hero-image"
        />
      </div>
    </>
  );
}
