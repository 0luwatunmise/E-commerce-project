import NavBar from "../NavBar/NavBar";
import { FcCheckmark } from "react-icons/fc";
import cartIcon from "../../assets/shopping-cart-black.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.css";

export default function ProductsPage({
  products,
  addToCart,
  cartQuantity,
  clicked,
  filterProducts,
  filteredProducts,
  setFilteredProducts,
}) {
  const [category, setCategory] = useState("all");

  return (
    <div className="products-page-container">
      <NavBar cartQuantity={cartQuantity} />

      <div className="products-header-container">
        <div className="products-header">New Arrivals</div>
        <div className="product-categories">
          <p
            className={
              category === "all" ? "category-btn active" : "category-btn"
            }
            onClick={() => {
              setFilteredProducts(null);
              setCategory("all");
            }}
          >
            ALL
          </p>
          <p
            className={
              category === "men's clothing"
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => {
              filterProducts("men's clothing");
              setCategory(`men's clothing`);
            }}
          >
            MEN
          </p>
          <p
            className={
              category === "women's clothing"
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => {
              filterProducts("women's clothing");
              setCategory(`women's clothing`);
            }}
          >
            WOMEN
          </p>
          <p
            className={
              category === "electronics"
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => {
              filterProducts("electronics");
              setCategory(`electronics`);
            }}
          >
            ELECTRONICS
          </p>
          <p
            className={
              category === "jewelery" ? "category-btn active" : "category-btn"
            }
            onClick={() => {
              filterProducts("jewelery");
              setCategory("jewelery");
            }}
          >
            JEWELERY
          </p>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts
          ? filteredProducts.map((product) => {
              return (
                <Link
                  to={`/products/${product.id}`}
                  className="product-card"
                  key={product.id}
                >
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
                        className={
                          clicked === product.id
                            ? "cart-button-added"
                            : "cart-button"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product.id);
                        }}
                      >
                        {clicked === product.id ? (
                          <FcCheckmark />
                        ) : (
                          <img src={cartIcon} className="cart-button-black" />
                        )}
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })
          : products.map((product) => {
              return (
                <Link
                  to={`/products/${product.id}`}
                  className="product-card"
                  key={product.id}
                >
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
                        className={
                          clicked === product.id
                            ? "cart-button-added"
                            : "cart-button"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product.id);
                        }}
                      >
                        {clicked === product.id ? (
                          <FcCheckmark />
                        ) : (
                          <img src={cartIcon} className="cart-button-black" />
                        )}
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
