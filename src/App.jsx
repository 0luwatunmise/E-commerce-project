import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CartPage from "./components/CartPage/CartPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
