import { useState } from "react";
import Header from "@/home/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"
import Footer from "@/home/footer";



function Contact() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFormStatus('submitting')
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        setFormStatus('submitted')
    }
    return (
        <div>
            <Header />

            <main className="container mx-auto px-4 py-12" >
                <h1 className="mb-8 text-4xl font-bold text-center">Contact Us</h1>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader>

                            <CardTitle>Send Us a Message</CardTitle>
                            <CardDescription>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <Input id="name" name="name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <Input id="email" name="email" type="email" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <Textarea id="message" name="message" required />
                                </div>
                                <Button type="submit" disabled={formStatus === 'submitting'}  >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                </Button>
                                {formStatus === 'submitted' && (
                                    <p className="text-green-600">Thank you for your message. We'll be in touch soon!</p>
                                )}
                                {formStatus === 'error' && (
                                    <p className="text-red-600">There was an error sending your message. Please try again.</p>
                                )}
                            </form>
                        </CardContent>

                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>Here are other ways you can reach us:</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5 text-blue-500" />
                                <span>Abomey-Calavi Benin Republic</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-5 w-5 text-blue-500" />
                                <span>+229 50 61 72 75</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-blue-500" />
                                <span>ikigaitrade25@gmail.com</span>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                                <p>Monday - Friday: 9am - 6pm</p>
                                <p>Saturday: 10am - 4pm</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contact;