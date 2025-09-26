import { Instagram as InstagramIcon } from 'lucide-react'
import Button from '../common/Button'

export default function Instagram() {
    const instagramPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop&auto=format",
            likes: "15K",
            caption: "Delicious pasta recipe"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop&auto=format",
            likes: "12K",
            caption: "Healthy breakfast bowl"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop&auto=format",
            likes: "18K",
            caption: "Fresh salad mix"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop&auto=format",
            likes: "20K",
            caption: "Homemade pizza"
        }
    ]

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                        Check out @foodieland on Instagram
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {instagramPosts.map((post) => (
                        <div
                            key={post.id}
                            className="relative group cursor-pointer rounded-2xl overflow-hidden"
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                                    <InstagramIcon size={32} className="mx-auto mb-2" />
                                    <p className="font-semibold">{post.likes} likes</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        variant="primary"
                        className="inline-flex items-center space-x-2"
                    >
                        <InstagramIcon size={20} />
                        <span>Visit Our Instagram</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}