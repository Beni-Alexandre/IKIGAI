
import Home from "./home/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import About from "./aboutpage/about"
import Contact from "./Contactpage/contact"
import Product from "./Productpage/products"



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
