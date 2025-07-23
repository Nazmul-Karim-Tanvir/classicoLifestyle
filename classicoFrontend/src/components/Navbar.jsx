import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingCart, Search, Menu, X, UserCircle } from 'lucide-react';
import useCartStore from '../store/cartStore';
import useWishListStore from '../store/wishlistStore';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser");
        setIsLoggedIn(!!loggedInUser);
    }, [location]);

    const totalQuantity = useCartStore(state =>
        state.cartItems.reduce((total, item) => total + item.quantity, 0)
    );

    const totalQuantity1 = useWishListStore(state =>
        state.wishListItems.reduce((total, item) => total + (item.quantity || 1), 0)
    );

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/product' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white pt-6 pb-4 px-4 md:px-8 border-b border-gray-300 relative z-50">
            <div className="max-w-[1170px] mx-auto flex items-center justify-between">
                {/* Brand */}
                <Link to="/" className="text-xl font-bold text-gray-900">Exclusive</Link>

                {/* Nav Links - Desktop */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-sans font-medium">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`hover:underline hover:underline-offset-4 ${location.pathname === link.path ? 'underline underline-offset-4 text-black font-semibold' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side - Search + Icons */}
                <div className="flex items-center gap-4">
                    {/* Desktop Search */}
                    <div className="hidden md:flex border border-gray-300 px-3 py-1 rounded-md w-60">
                        <input
                            type="text"
                            placeholder="What are you Looking for?"
                            className="flex-grow outline-none text-sm"
                        />
                        <Search className="ml-3 w-5 h-5" />
                    </div>

                    {/* Mobile Search Icon */}
                    <div className="md:hidden">
                        <Search className="w-6 h-6 text-gray-700" />
                    </div>

                    {/* Wishlist */}
                    <Link to="/wishList" className="relative text-gray-700">
                        <Heart className="w-6 h-6 hover:text-red-500" />
                        {totalQuantity1 > 0 && (
                            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full" style={{ minWidth: '18px', height: '18px' }}>
                                {totalQuantity1}
                            </span>
                        )}
                    </Link>

                    {/* Cart */}
                    <Link to="/cart" className="relative text-gray-700">
                        <ShoppingCart className="w-6 h-6 hover:text-blue-500" />
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full" style={{ minWidth: '18px', height: '18px' }}>
                                {totalQuantity}
                            </span>
                        )}
                    </Link>

                    {/* Sign In / Profile - Always Visible */}
                    {isLoggedIn ? (
                        <Link to="/profilepage" title="Profile">
                            <UserCircle className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                        </Link>
                    ) : (
                        <Link
                            to="/signUp"
                            className="text-sm font-medium text-black border border-gray-400 rounded-md px-3 py-1 hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            Sign In
                        </Link>
                    )}

                    {/* Hamburger - Mobile */}
                    <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Slide Menu */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
                <ul className="flex flex-col gap-6 text-gray-700 font-medium px-6 mt-4">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={`block text-lg ${location.pathname === link.path ? 'underline underline-offset-4 text-black font-semibold' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;