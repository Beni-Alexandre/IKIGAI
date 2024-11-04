
import Home from "./home/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import About from "./aboutpage/about"
import Contact from "./Contactpage/contact"
import Products from "./productpage/product"




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
