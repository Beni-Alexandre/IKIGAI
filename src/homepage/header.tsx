
import { Button } from "@/components/ui/button";


function Header() {
    return (
        <div>
            <header className="bg-white shadow-sm">
                <nav>
                    <div className="logo">
                        <img src="images/ikigai lgz.jpg" alt="" />
                    </div>
                    <div className="space-x-4">
                        <Button variant="ghost">HOME</Button>
                        <Button variant="ghost">ABOUT-US</Button>
                        <Button variant="ghost">PRODUCTS</Button>
                        <Button variant="ghost">CONTACT-US</Button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;