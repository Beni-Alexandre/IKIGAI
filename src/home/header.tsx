
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";






function Header() {
    return (
        <div>
            <header className="bg-white shadow-sm">
                <nav>
                    <div className="text-2xl font-bold text-blue-600">Ikigai</div>
                    {/* <div className="logo">
                        <img src="images/ikigai lg.jpg" alt="" />
                    </div> */}
                    <div className="space-x-4">

                        <Link to='/'> <Button variant="ghost">HOME</Button></Link>

                        <Link to="/about"> <Button variant="ghost">ABOUT-US</Button></Link>
                        <Link to="/product">         <Button variant="ghost">PRODUCTS</Button></Link>
                        <Link to="/contact">  <Button variant="ghost">CONTACT-US</Button></Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;