import { useState } from "react";
import Header from "@/home/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import Footer from "@/home/footer";



const initialProducts = [
    { id: 1, name: "Palm Oil", price: 1000, category: "Food", badge: "Hot" },
    { id: 2, name: "Cannelle", price: 10000, category: "Grocery", badge: "Best Seller" },
    { id: 3, name: "Curcuma", price: 8000, category: "Grocery", badge: "New" },
    { id: 4, name: "Ail", price: 13000, category: "Grocery", badge: "Top Rated" },
    { id: 5, name: "Gigembre", price: 7000, category: "Grocery", badge: "Trending" },
    { id: 6, name: "Clou de girofle", price: 15000, category: "Grocery", badge: "Eco-friendly" },
    { id: 7, name: "Badiane", price: 8000, category: "Grocery", badge: "Hot" },
    { id: 8, name: "Thym", price: 5000, category: "Grocery", badge: "Top Rated" },
    { id: 9, name: "Romarin", price: 9000, category: "Grocery", badge: "Top Rated" },
    { id: 10, name: "Poivre noir ", price: 10000, category: "Grocery", badge: "Top Rated" },
    { id: 11, name: "Poivre long", price: 6000, category: "Grocery", badge: "Top Rated" },
    { id: 12, name: "Piment rouge", price: 3500, category: "Grocery", badge: "Top Rated" },
    { id: 13, name: "Laurier", price: 5000, category: "Grocery", badge: "Top Rated" },


]
function Products() {
    const [products, setProducts] = useState(initialProducts)
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-12" >
                <h1 className="mb-8 text-4xl font-bold text-center">Our Products</h1>
                <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="w-full md:w-1/3 relative">
                        <Input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((products) =>

                        <Card key={products.id}>
                            <CardHeader>
                                <CardTitle>{products.name}</CardTitle>
                                <CardDescription>{products.price.toFixed(1)} FCFA</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Category: {products.category}</p>
                                <Badge>  {products.badge}</Badge>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Add to cart</Button>

                            </CardFooter>
                        </Card>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Products; 