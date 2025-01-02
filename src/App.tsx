import Home from "pages/home";
import { Routes, Route } from "react-router-dom";
import About from "pages/about";
import Contact from "pages/contact";
import Products from "pages/product";
import React from "react";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
