import { categories } from '../../../lib/categories'

export default function Categories() {
    return (
        <section className="py-16 bg-white">
            <div className="container">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">Categories</h2>
                    <button className="text-primary font-medium hover:underline">
                        View All Categories
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                        >
                            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl bg-white rounded-2xl shadow-sm">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-dark group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}