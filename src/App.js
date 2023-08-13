import React from "react";

import { Routes, Route } from "react-router-dom";

import { Cart, Login, ProductDetails } from "./pages";

import "./App.css";

import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
