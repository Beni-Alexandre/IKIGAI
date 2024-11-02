
import Home from "./home/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./Aboutpage/about"



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </>
  )
}

export default App
