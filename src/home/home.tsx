import Header from "./header"
import Homemain from "./homemain"
import About from "@/Aboutpage/about";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
    return (
        <div>

            <Router>
                <Header />
                <Routes>
                    <Route path="/" />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>



            <Homemain />
        </div>
    )
}
export default Home;