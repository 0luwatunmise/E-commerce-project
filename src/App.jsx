import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CartPage from "./components/CartPage/CartPage";
import fallbackProducts from "./data/products.json";

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

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage products={products} />} />
          <Route
            path="/products"
            element={<ProductsPage products={products} />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
