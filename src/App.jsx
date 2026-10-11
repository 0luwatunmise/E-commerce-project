import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CartPage from "./components/CartPage/CartPage";
import fallbackProducts from "./data/products.json";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        localStorage.setItem("products", JSON.stringify(response.data));
      } catch (error) {
        console.error("API failed, using local copy:", error);
        const cached = localStorage.getItem("products");
        setProducts(cached ? JSON.parse(cached) : fallbackProducts);
      }
    };
    getProductsData();
  }, []);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  useEffect(() => {
    const saveCart = () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };
    saveCart();
  }, [cart]);

  const [clicked, setClicked] = useState(null);

  function addToCart(id) {
    const selectedProduct = products.find((product) => product.id === id);
    if (!selectedProduct) return;

    setClicked(id);

    setTimeout(() => {
      setClicked(null);
    }, 1000);

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...prevCart,
        {
          id: selectedProduct.id,
          name: selectedProduct.title,
          category: selectedProduct.category,
          image: selectedProduct.image,
          price: selectedProduct.price,
          quantity: 1,
        },
      ];
    });
  }

  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                products={products}
                addToCart={addToCart}
                cartQuantity={cartQuantity}
                clicked={clicked}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                addToCart={addToCart}
                cartQuantity={cartQuantity}
                clicked={clicked}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
