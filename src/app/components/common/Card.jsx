import { Heart } from 'lucide-react'

export default function Card({
    image,
    title,
    description,
    author,
    time,
    rating,
    likes,
    className = '',
    onClick
}) {
    return (
        <div
            className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer card-hover ${className}`}
            onClick={onClick}
        >
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <Heart size={20} className="text-gray-400 hover:text-red-500" />
                </button>
                {rating && (
                    <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-lg flex items-center">
                        <span className="text-sm font-medium">{rating}</span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-2 line-clamp-2">
                    {title}
                </h3>

                {description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                        {time && (
                            <div className="flex items-center">
                                <span>🕒 {time}</span>
                            </div>
                        )}
                        {author && (
                            <div className="flex items-center">
                                <span>👨‍🍳 {author}</span>
                            </div>
                        )}
                    </div>

                    {likes && (
                        <div className="flex items-center space-x-1">
                            <Heart size={16} />
                            <span>{likes}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}