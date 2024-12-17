
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';
import { useState } from "react";



function Header() {

    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return (
        <div>
            <header className="bg-white shadow-sm">
                <nav>
                    <Link to="/">    <div className="text-2xl font-bold text-blue-600">Ikigai</div></Link>


                    <div className="space-x-4">
                        <div className="menu-icon" onClick={handleShowNavbar} >
                            <Menu /></div>
                        <div className={`menu ${showNavbar && "active"}`}>
                            <ul>
                                <Link to='/'> <Button variant="ghost">HOME</Button></Link>

                                <Link to="/about"> <Button variant="ghost">ABOUT-US</Button></Link>
                                <Link to="/product">         <Button variant="ghost">PRODUCTS</Button></Link>
                                <Link to="/contact">  <Button variant="ghost">CONTACT-US</Button></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;