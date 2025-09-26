import Button from '../common/Button'

export default function ChefIntro() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                            Everyone can be a chef in their own kitchen
                        </h2>

                        <p className="text-gray-600 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>

                        <Button variant="primary">
                            Learn More
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop&auto=format"
                                alt="Chef cooking in kitchen"
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Floating Elements */}
                            <div className="absolute top-8 left-8 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl">
                                        🥗
                                    </div>
                                    <div>
                                        <div className="font-semibold text-dark">Healthy</div>
                                        <div className="text-gray-500 text-sm">Food</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                                        👨‍🍳
                                    </div>
                                    <div>
                                        <div className="font-semibold text-dark">Professional</div>
                                        <div className="text-gray-500 text-sm">Chef</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}