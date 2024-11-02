
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";






function Header() {
    return (
        <div>
            <header className="bg-white shadow-sm">
                <nav>
                    <div className="logo">
                        <img src="images/ikigai lgz.jpg" alt="" />
                    </div>
                    <div className="space-x-4">

                        <Link to='/'> <Button variant="ghost">HOME</Button></Link>

                        <Link to="/about"> <Button variant="ghost">ABOUT-US</Button></Link>
                        <Button variant="ghost">PRODUCTS</Button>
                        <Button variant="ghost">CONTACT-US</Button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;