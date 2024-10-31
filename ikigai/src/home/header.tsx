
import { Button } from "@/components/ui/button";

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <img src="images/ikigai lgz.jpg" alt="" />
                    </div>

                    <Button variant="ghost">HOME</Button>
                    <Button variant="ghost">ABOUT-US</Button>
                    <Button variant="ghost">PRODUCTS</Button>
                    <Button variant="ghost">CONTACT-US</Button>
                </nav>
            </header>
        </div>
    )
}

export default Header;