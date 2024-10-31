
import { Button } from "@/components/ui/button";


function Homemain() {
    return (
        <section className="bg-blue-600 text-white">
            <div className="container mx-auto px-4 py-20 text-center"></div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl" >
                Discover Products That Match Your Moment
            </h1>
            <p className="mb-10 text-xl">
                Ikigai brings you the most relevant and in-demand items, perfectly aligned with current trends and seasons.
            </p>
            <Button size="lg" variant="secondary">
                Explore Our Collection
            </Button>
        </section >


    )
}

export default Homemain;