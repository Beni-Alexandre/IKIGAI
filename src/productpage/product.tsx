import Header from "@/home/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { useState } from "react";


// const initialProducts = [
//     { id: 1, name: "Smart Home Assistant", price: 129.99, category: "Electronics", badge: "Hot" },
//     { id: 2, name: "Wireless Earbuds", price: 89.99, category: "Electronics", badge: "Best Seller" },
//     { id: 3, name: "Fitness Tracker", price: 59.99, category: "Wearables", badge: "New" },
//     { id: 4, name: "Eco-friendly Water Bottle", price: 24.99, category: "Lifestyle", badge: null },
//     { id: 5, name: "Ergonomic Office Chair", price: 199.99, category: "Furniture", badge: "Trending" },
//     { id: 6, name: "Portable Charger", price: 39.99, category: "Electronics", badge: null },
//     { id: 7, name: "Yoga Mat", price: 29.99, category: "Fitness", badge: null },
//     { id: 8, name: "Noise-Cancelling Headphones", price: 149.99, category: "Electronics", badge: "Top Rated" },
//     { id: 9, name: "Stainless Steel Lunchbox", price: 34.99, category: "Lifestyle", badge: "Eco-friendly" },
// ]

const products = [
    { id: 1, name: "Palm Oil", price: 1000, category: "Food", badge: "Hot" },
    { id: 2, name: "Bottle of Water", price: 100, category: "Food", badge: "Best Seller" },
    { id: 3, name: "Hands Sanitizer", price: 500, category: "Food", badge: "New" },
    { id: 4, name: "Oil", price: 700, category: "Food", badge: "Top Rated" },
    { id: 5, name: "Liquid Soap", price: 900, category: "Food", badge: "Trending" },
    { id: 6, name: "Soap", price: 1000, category: "Food", badge: "Eco-friendly" },
    { id: 7, name: "Shoes", price: 8000, category: "Food", badge: "Hot" },
    { id: 8, name: "Paints", price: 7000, category: "Food", badge: "Top Rated" },


]
function Products() {

    const [product, setProduct] = useState("")
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-12" >
                <h1 className="mb-8 text-4xl font-bold text-center">Products</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((products) =>

                        <Card key={products.id}>
                            <CardHeader>
                                <CardTitle>{products.name}</CardTitle>
                                <CardDescription>{products.price.toFixed(1)} FCFA</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Category: {products.category}</p>
                                {products.badge}
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Add to cart</Button>

                            </CardFooter>
                        </Card>
                    )}
                </div>
            </main>
        </div>
    )
}
export default Products; 