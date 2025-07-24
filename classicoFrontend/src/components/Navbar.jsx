import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingCart, Menu, X, UserCircle } from 'lucide-react';
import useCartStore from '../store/cartStore';
import useWishListStore from '../store/wishlistStore';
import logo from '/classico1.jpg';

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
        <nav className="max-w-[90%] mx-auto py-7 relative z-50">
            <div className="flex items-center justify-between">
                {/* Brand */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Classico Lifestyle Logo"
                        className="h-7 md:h-12 w-auto object-contain rounded shadow-2xl shadow-amber-100"
                    />
                </Link>

                {/* Nav Links - Desktop */}
                <ul className="hidden md:flex gap-8 text-gray-700 text-3xl font-semibold lobster-regular">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`hover:underline hover:underline-offset-4 decoration-[#FCE823] ${location.pathname === link.path ? 'underline underline-offset-4 text-black tracking-wide' : ''
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side - Icons */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Wishlist */}
                    <Link to="/wishList" className="relative text-gray-700">
                        <Heart className="w-6 h-6 sm:w-8 sm:h-8 hover:text-red-500" />
                        {totalQuantity1 > 0 && (
                            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full" style={{ minWidth: '18px', height: '18px' }}>
                                {totalQuantity1}
                            </span>
                        )}
                    </Link>

                    {/* Cart */}
                    <Link to="/cart" className="relative text-gray-700">
                        <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-500" />
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full" style={{ minWidth: '18px', height: '18px' }}>
                                {totalQuantity}
                            </span>
                        )}
                    </Link>

                    {/* Profile or Sign In */}
                    {isLoggedIn ? (
                        <Link to="/profilepage" title="Profile">
                            <UserCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 hover:text-blue-600" />
                        </Link>
                    ) : (
                        <Link
                            to="/signUp"
                            className="text-sm font-medium text-black border border-gray-400 rounded-md px-3 py-1 hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            Sign In
                        </Link>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                        {menuOpen ? <X className="w-6 h-6 sm:w-8 sm:h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Slide Menu */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        <X className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                    </button>
                </div>
                <ul className="flex flex-col gap-4 sm:gap-6 text-gray-700 text-lg sm:text-xl font-semibold px-4 sm:px-6 mt-4 lobster-regular">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={`block hover:underline hover:underline-offset-4 decoration-[#FCE823] ${location.pathname === link.path ? 'underline underline-offset-4 text-black tracking-wide' : ''
                                    }`}
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
