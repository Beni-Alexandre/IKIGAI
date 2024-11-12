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
                                <Badge>  {products.badge}</Badge>
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