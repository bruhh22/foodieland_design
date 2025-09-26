'use client'

import { useState } from 'react'
import { Menu, X, Search, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Recipes', href: '/recipes' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'About us', href: '/about' },
    ]

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-dark">
                            Foodie<span className="text-primary">land</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons & Search */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex space-x-2">
                            <a href="#" className="text-gray-400 hover:text-primary">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary">
                                <Instagram size={20} />
                            </a>
                        </div>
                        <button className="text-gray-400 hover:text-primary">
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-dark hover:text-primary"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-dark hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-4 px-3 py-2">
                                <div className="flex space-x-2">
                                    <a href="#" className="text-gray-400 hover:text-primary">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-primary">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-primary">
                                        <Instagram size={20} />
                                    </a>
                                </div>
                                <button className="text-gray-400 hover:text-primary">
                                    <Search size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}