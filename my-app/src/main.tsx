import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import ContactSupport from "./pages/ContactSupport"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsdetails" element={<ProductDetails />} />
        <Route path="/contactsupport" element={<ContactSupport />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
