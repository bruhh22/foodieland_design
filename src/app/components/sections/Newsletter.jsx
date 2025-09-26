'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import Button from '../common/Button'

export default function Newsletter() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Newsletter signup:', email)
        setEmail('')
        alert('Thank you for subscribing!')
    }

    return (
        <section className="py-16 bg-gradient-to-br from-blue-100 to-white">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-dark">
                                Deliciousness to your inbox
                            </h2>

                            <p className="text-gray-600 text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address..."
                                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                </div>
                                <Button type="submit" variant="primary">
                                    Subscribe
                                </Button>
                            </form>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&auto=format"
                                    alt="Delicious food bowl"
                                    className="w-full h-[350px] object-cover"
                                />

                                {/* Floating Elements */}
                                <div className="absolute top-8 left-8 bg-white rounded-full p-3 shadow-lg animate-bounce">
                                    <span className="text-2xl">🥗</span>
                                </div>

                                <div className="absolute top-20 right-8 bg-white rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                                    <span className="text-2xl">🍃</span>
                                </div>

                                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                                    <span className="text-2xl">🥄</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}