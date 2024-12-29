import React from "react";
import { useState, useRef } from "react";
import Header from "components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card";
// import { Button } from "@/components/ui/button";
import { Badge } from "components/ui/badge";
import { Input } from "components/ui/input";

import { Search } from "lucide-react";
import Footer from "components/footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
// import { Label } from "@/components/ui/label";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog";
const initialProducts = [
  {
    id: 1,
    name: "Huile de Palme",
    price: 1000,
    category: "Aliment",
    badge: "Hot",
    image: "/images/palm oil 01.jpg",
  },
  {
    id: 2,
    name: "Cannelle",
    price: 10000,
    category: "Épicerie",
    badge: "Best Seller",
    image: "/images/cannelle01.jpg",
  },
  {
    id: 3,
    name: "Curcuma",
    price: 8000,
    category: "Épicerie",
    badge: "New",
    image: "/images/curcuma01.jpg",
  },
  {
    id: 4,
    name: "Ail",
    price: 13000,
    category: "Épicerie",
    badge: "Top Rated",
    image: "/images/garlic01.jpg",
  },
  {
    id: 5,
    name: "Gingembre",
    price: 7000,
    category: "Épicerie",
    badge: "Trending",
    image: "/images/gingembre01.jpg",
  },
  {
    id: 6,
    name: "Clou de girofle",
    price: 15000,
    category: "Épicerie",
    badge: "Eco-friendly",
    image: "/images/clou de girofle01.jpg",
  },
  {
    id: 7,
    name: "Badiane",
    price: 8000,
    category: "Épicerie",
    badge: "Hot",
    image: "/images/badiane01.jpg",
  },
  {
    id: 8,
    name: "Thym",
    price: 5000,
    category: "Épicerie",
    badge: "Top Rated",
    image: "/images/thym01.jpg",
  },
  {
    id: 9,
    name: "Romarin",
    price: 9000,
    category: "Épicerie",
    badge: "Top Rated",
    image: "/images/romarin01.jpg",
  },
  {
    id: 10,
    name: "Poivre noir ",
    price: 10000,
    category: "Épicerie",
    badge: "Top Rated",
    image: "/images/poivrenoir01.jpg",
  },
  {
    id: 11,
    name: "Poivre long",
    price: 6000,
    category: "Épicerie",
    badge: "Top Rated",
    image: "/images/poivrelong01.jpg",
  },
  {
    id: 12,
    name: "Piment rouge",
    price: 3500,
    category: "Épicerie",
    badge: "Top Rated",
    image: "/images/pimmentrouge01.jpg",
  },
  {
    id: 13,
    name: "Laurier",
    price: 5000,
    category: "Épicerie",
    badge: "Top Rated",
    image: "/images/laurier01.jpg",
  },
];
function Products() {
  const [products, setProducts] = useState(initialProducts);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  //   const [newProduct, setNewProduct] = useState({
  //     name: "",
  //     price: "",
  //     category: "",
  //     badge: "",
  //     image: "",
  //   });
  //   const fileInputRef = useRef<HTMLInputElement>(null);
  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  // const handleAddProduct = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const productToAdd = {
  //     ...newProduct,
  //     id: products.length + 1,
  //     price: parseFloat(newProduct.price),
  //   };
  //   setProducts([...products, productToAdd]);
  //   setNewProduct({ name: "", price: "", category: "", badge: "", image: "" });
  // };
  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setNewProduct({ ...newProduct, image: reader.result as string });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold text-center">Nos Produits</h1>
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-1/3 relative">
            <Input
              type="text"
              placeholder="Rechercher des produits..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="pl-10"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="flex gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Toutes catégories</SelectItem>
                <SelectItem value="Épicerie">Épicerie</SelectItem>
                <SelectItem value="Aliment">Aliment</SelectItem>
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
          {filteredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full "
                  sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                />
                {product.badge && (
                  <Badge className="absolute top-2 right-2 z-10">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>
                  {product.price.toFixed(1)} FCFA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Catégorie: {product.category}</p>
                <Badge> {product.badge}</Badge>
              </CardContent>
              <CardFooter>
                {/* <Button className="w-full">Order</Button> */}
                {/* <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Commander</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Order this product</DialogTitle>
                      <DialogDescription>
                        Choose the quantity and order.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="quantity" className="text-right">
                          Quantity
                        </Label>
                        <Input
                          type="number"
                          id="name"
                          min={1}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          value="@peduarte"
                          className="col-span-3"
                        />
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          value="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Send the order</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog> */}
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            Aucun produit trouvé.
          </p>
        )}
        {/* <div className="mt-12">
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
                  Enter the details of the new product here. Click save when
                  you're done.
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
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                      }
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
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Select
                      value={newProduct.category}
                      onValueChange={(value) =>
                        setNewProduct({ ...newProduct, category: value })
                      }
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        <SelectItem value="Épicerie">Épicerie</SelectItem>
                        <SelectItem value="Aliment">Aliment</SelectItem>
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
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, badge: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="image" className="text-right">
                      UploadImage
                    </label>
                    <div className="col-span-3">
                      <input
                        type="file"
                        id="image"
                        accept="image/"
                        onChange={handleImageUpload}
                        className="hidden"
                        ref={fileInputRef}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full"
                      >
                        <ImageIcon className="mr-2 h-4 w-4" />
                        {
                          newProduct.image !==
                            "/placeholder.svg?height=400&width=600"
                          //   ? t.imageUploaded
                          //   : t.selectImage
                        }
                      </Button>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Product</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
export default Products;
