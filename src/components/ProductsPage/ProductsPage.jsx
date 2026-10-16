import NavBar from "../NavBar/NavBar";
import { FcCheckmark } from "react-icons/fc";
import cartIcon from "../../assets/shopping-cart-black.svg";
import { Link, useSearchParams } from "react-router-dom";
import "./ProductsPage.css";
export default function ProductsPage({
  addToCart,
  cartQuantity,
  clicked,
  filteredProducts,
  activeCategory,
  setActiveCategory,
}) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const visibleProducts = filteredProducts.filter((product) => {
    const matchingSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchingCategory =
      activeCategory === "all" || product.category === activeCategory;
    return matchingSearch && matchingCategory;
  });

  return (
    <div className="products-page-container">
      <NavBar cartQuantity={cartQuantity} />

      <div className="products-header-container">
        <div className="products-header">New Arrivals</div>
        <div className="product-categories">
          <p
            className={
              activeCategory === "all" ? "category-btn active" : "category-btn"
            }
            onClick={() => {
              setActiveCategory("all");
            }}
          >
            ALL
          </p>
          <p
            className={
              activeCategory === "men's clothing"
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => {
              setActiveCategory(`men's clothing`);
            }}
          >
            MEN
          </p>
          <p
            className={
              activeCategory === "women's clothing"
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => {
              setActiveCategory(`women's clothing`);
            }}
          >
            WOMEN
          </p>
          <p
            className={
              activeCategory === "electronics"
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => {
              setActiveCategory(`electronics`);
            }}
          >
            ELECTRONICS
          </p>
          <p
            className={
              activeCategory === "jewelery"
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => {
              setActiveCategory("jewelery");
            }}
          >
            JEWELERY
          </p>
        </div>
      </div>

      <div className="products-grid">
        {visibleProducts.length === 0 && (
          <div className="no-results">
            <strong>No products found</strong>

            <label>
              We couldn't find anything matching "{searchTerm}". Try a different
              keyword or browse all products.
            </label>

            <Link to="/products" className="no-results-link">
              View all products
            </Link>
          </div>
        )}

        {visibleProducts
          ? visibleProducts.map((product) => {
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
          : filteredProducts.map((product) => {
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
