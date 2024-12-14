import Header from "@/home/header";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Zap } from "lucide-react"
import Footer from "@/home/footer";
function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <h1 className="mb-8 text-4xl font-bold text-center">About Ikigai</h1>

                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg">
                                At Ikigai, we strive to bring harmony to your life through carefully curated products that align with current trends and timeless needs. Our mission is to help you discover items that not only serve a purpose but also bring joy and meaning to your everyday experiences.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Our Values</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <Target className="h-10 w-10 text-blue-500 mb-2" />
                                <CardTitle>Purpose-Driven</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>We believe in offering products that serve a meaningful purpose in our customers' lives.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <TrendingUp className="h-10 w-10 text-green-500 mb-2" />
                                <CardTitle>Trend-Responsive</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>We stay ahead of the curve, adapting our offerings to match current market trends and consumer needs.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Zap className="h-10 w-10 text-yellow-500 mb-2" />
                                <CardTitle>Innovation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>We continuously seek innovative products and solutions to enhance our customers' lives.</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Our Story</h2>
                    <Card>
                        <CardContent className="prose max-w-none">
                            <p className="mt-4">
                                Ikigai was founded in 2020 with a simple yet powerful idea: to create a retail experience that goes beyond mere transactions. We wanted to build a platform where every product tells a story and serves a purpose.
                            </p>
                            <p>
                                Our journey began when our founders, a group of passionate entrepreneurs, realized that in the fast-paced world of retail, there was a gap between what people bought and what truly added value to their lives. They envisioned a company that would bridge this gap, offering products that not only meet immediate needs but also contribute to long-term satisfaction and well-being.
                            </p>
                            <p>
                                The name "Ikigai" comes from the Japanese concept that combines one's passion, mission, vocation, and profession. It represents the intersection of what you love, what you're good at, what the world needs, and what you can be paid for. This philosophy is at the heart of everything we do at Ikigai Retail.
                            </p>
                            <p>
                                Today, we continue to grow and evolve, always with our core mission in mind: to help our customers find their own ikigai through the products we offer and the shopping experience we provide.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* <section>
                    <h2 className="text-2xl font-bold mb-6">Our Team</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { name: "HONFOGA Nelson", role: "CEO & Founder", image: "/placeholder.svg?height=100&width=100" },
                            { name: "Ange marie", role: "Head of Product Curation", image: "/placeholder.svg?height=100&width=100" },
                            { name: "Olade", role: "Chief Trend Officer", image: "/placeholder.svg?height=100&width=100" },
                        ].map((member) => (
                            <Card key={member.name}>
                                <CardHeader>
                                    <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
                                    <CardTitle>{member.name}</CardTitle>
                                    <CardDescription>{member.role}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section> */}
            </main>
            <Footer />
        </div>
    )
}

export default About;