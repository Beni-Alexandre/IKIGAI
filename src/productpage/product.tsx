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



function Products() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-12" >
                <h1 className="mb-8 text-4xl font-bold text-center">Products</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Product name</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="text-blue-600" variant="outline">Buy Now</Button>

                    </CardFooter>
                </Card>

            </main>
        </div>
    )
}
export default Products; 