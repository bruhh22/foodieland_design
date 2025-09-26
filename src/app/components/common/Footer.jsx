import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
    const footerLinks = {
        'Foodieland': [
            { name: 'Recipes', href: '/recipes' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
            { name: 'About us', href: '/about' },
        ],
    }

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-dark mb-4">
                            Foodie<span className="text-primary">land</span>
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-semibold text-dark mb-4">{title}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-600 hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-100 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm mb-4 md:mb-0">
                            © 2023 Foodieland. All rights reserved.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}