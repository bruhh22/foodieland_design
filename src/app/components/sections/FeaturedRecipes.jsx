import Card from '../common/Card'
import { recipes } from '../../../lib/recipes'

export default function FeaturedRecipes() {
    const featuredRecipes = recipes.slice(9, 17)

    return (
        <section className="py-16 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                        Try this delicious recipe to make your day
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredRecipes.map((recipe) => (
                        <Card
                            key={recipe.id}
                            image={recipe.image}
                            title={recipe.title}
                            description={recipe.description}
                            author={recipe.author}
                            time={recipe.time}
                            rating={recipe.rating}
                            likes={recipe.likes}
                            onClick={() => console.log('Navigate to recipe:', recipe.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}