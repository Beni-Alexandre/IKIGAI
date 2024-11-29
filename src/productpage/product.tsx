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
import { Search, SlidersHorizontal, Upload } from 'lucide-react';
import Footer from "@/home/footer";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"


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
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [sortBy, setSortBy] = useState("name")
    const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', badge: '' })

    const filteredProducts = products
        .filter(product =>
            (selectedCategory === "All" || product.category === selectedCategory) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name)
            if (sortBy === "price-asc") return a.price - b.price
            if (sortBy === "price-desc") return b.price - a.price
            return 0
        })

    const handleAddProduct = (e: React.FormEvent) => {
        e.preventDefault()
        const productToAdd = {
            ...newProduct,
            id: products.length + 1,
            price: parseFloat(newProduct.price)
        }
        setProducts([...products, productToAdd])
        setNewProduct({ name: '', price: '', category: '', badge: '' })
    }

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
                            onChange={(e) => { setSearchTerm(e.target.value) }}
                            className="pl-10"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />

                    </div>
                    <div className="flex gap-4">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Categories</SelectItem>
                                <SelectItem value="Grocery">Grocery</SelectItem>
                                <SelectItem value="Food">Food</SelectItem>

                            </SelectContent>
                        </Select>
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name">Name</SelectItem>
                                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) =>

                        <Card key={product.id} className="flex flex-col">
                            {/* <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                                <img
                                    src="IKIGAI/images/oil1.jpg"
                                    alt={product.name}
                                    // fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {product.badge && (
                                    <Badge className="absolute top-2 right-2 z-10">
                                        {product.badge}
                                    </Badge>
                                )}
                            </div> */}
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription>{product.price.toFixed(1)} FCFA</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Category: {product.category}</p>
                                <Badge>  {product.badge}</Badge>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Add to cart</Button>

                            </CardFooter>
                        </Card>
                    )}
                </div>


                {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">No products found. Try adjusting your filters.</p>
                )}

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Upload className="mr-2 h-4 w-4" /> Add Product
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add New Product</DialogTitle>
                                <DialogDescription>
                                    Enter the details of the new product here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleAddProduct}>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            value={newProduct.name}
                                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="price" className="text-right">
                                            Price
                                        </Label>
                                        <Input
                                            id="price"
                                            type="number"
                                            value={newProduct.price}
                                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="category" className="text-right">
                                            Category
                                        </Label>
                                        <Select
                                            value={newProduct.category}
                                            onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                                        >
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="All">All Categories</SelectItem>
                                                <SelectItem value="Grocery">Grocery</SelectItem>
                                                <SelectItem value="Food">Food</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="badge" className="text-right">
                                            Badge
                                        </Label>
                                        <Input
                                            id="badge"
                                            value={newProduct.badge}
                                            onChange={(e) => setNewProduct({ ...newProduct, badge: e.target.value })}
                                            className="col-span-3"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save Product</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Products; 