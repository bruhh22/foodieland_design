import { Clock, Users } from 'lucide-react'
import Button from '../common/Button'

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-2 text-sm">
                            <span className="bg-primary text-white px-3 py-1 rounded-full">🍳 Hot Recipes</span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
                                Spicy delicious chicken wings
                            </h1>

                            <p className="text-gray-600 text-lg max-w-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Recipe Info */}
                        <div className="flex items-center space-x-8 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                                <Clock size={20} />
                                <span>30 Minutes</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Users size={20} />
                                <span>Chicken</span>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format"
                                alt="John Smith"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-dark">John Smith</p>
                                <p className="text-gray-500 text-sm">15 March 2022</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">
                                View Recipes
                            </Button>
                            <Button variant="secondary">
                                ▶ Watch Video
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&h=600&fit=crop&auto=format"
                                alt="Spicy delicious chicken wings"
                                className="w-full h-[500px] object-cover"
                            />

                            {/* Floating Rating Badge */}
                            <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">⭐</span>
                                    <div>
                                        <div className="font-semibold text-dark">4.5</div>
                                        <div className="text-gray-500 text-sm">2.4k reviews</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}