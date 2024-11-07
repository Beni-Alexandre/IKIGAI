
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TrendingUp, ShoppingBag, Gift, Sun } from 'lucide-react';

import { Link } from "react-router-dom";

function Homemain() {
    return (
        <div>
            <section className="bg-blue-600 text-white">
                <div className="container mx-auto px-4 py-20 text-center"></div>
                <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl" >
                    Discover Products That Match Your Moment
                </h1>
                <p className="mb-10 text-xl">
                    Ikigai brings you the most relevant and in-demand items, perfectly aligned with current trends and seasons.
                </p>
                <Link to="/product">       <Button className="explore_button" size="lg" variant="secondary">
                    Explore Our Collection
                </Button></Link>
            </section >
            <section className="reason">
                <div className="container mx-auto px-4">
                    <h2 className="mb-12 text-center text-3xl font-bold">Why Choose IKIGAI</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader>
                            <TrendingUp className="h-10 w-10 text-blue-500" />
                            <CardTitle>Trend-Responsive</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <CardDescription>We adapt our product range to match current market demands and consumption trends.</CardDescription>
                        </CardContent>

                    </Card>
                    <Card>
                        <CardHeader>
                            <ShoppingBag className="h-10 w-10 text-green-500" />
                            <CardTitle>Curated Selection</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <CardDescription>Our products are carefully selected to meet the evolving preferences of our customers.</CardDescription>
                        </CardContent>

                    </Card>
                    <Card>
                        <CardHeader>
                            <Gift className="h-10 w-10 text-red-500" />
                            <CardTitle>Seasonal Specials</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <CardDescription>We offer products that resonate with the spirit of each season and festive period.</CardDescription>
                        </CardContent>

                    </Card>
                    <Card>
                        <CardHeader>
                            <Sun className="h-10 w-10 text-yellow-500" />
                            <CardTitle>Always Relevant</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Our ever-evolving product range ensures you always find what you need, when you need it.</CardDescription>
                        </CardContent>
                    </Card>
                </div>

            </section>

            <section className="container mx-auto px-4 py-20 text-center">
                <h2 className="mb-6 text-3xl font-bold">Stay Ahead with Ikigai.</h2>
                <p className="mb-10 text-xl text-gray-600">
                    Be the first to know about our latest products and upcoming trends.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Sign Up for Updates
                </Button>
            </section>

            <footer className="bg-gray-800 py-10 text-gray-300">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Ikigai. All rights reserved.</p>
                </div>
            </footer>
        </div >


    )
}

export default Homemain;