import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";

function App() {
  return (
    <div className="app">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
