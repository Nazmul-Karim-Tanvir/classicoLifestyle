import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import androidstore from '../assets/images/footerImages/applestore.png';
import playstore from '../assets/images/footerImages/playstore.png';
import qrcode from '../assets/images/footerImages/qrcode.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-0">
            <div className="max-w-[1170px] mx-auto flex flex-col gap-10 md:flex-row md:justify-between flex-wrap">

                {/* Column 1: Exclusive */}
                <div className="max-w-[200px] w-full md:w-auto">
                    <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
                    <div className="mt-4 md:mt-0">
                        <p className="text-sm text-gray-200 mb-1">Subscribe</p>
                        <p className="text-sm text-gray-200 mb-4">Get 10% off your first order</p>
                        <div className="flex items-center border border-white rounded px-3 py-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent outline-none text-sm w-full text-white placeholder:text-gray-400"
                            />
                            <button className="text-white ml-2 text-xl">➤</button>
                        </div>
                    </div>
                </div>

                {/* Column 2: Support */}
                <div className="max-w-[200px] w-full md:w-auto">
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-200 mt-4 md:mt-0">
                        <li>111 Bijoy Sarani, Dhaka,</li>
                        <li>DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                {/* Column 3: Account */}
                <div className="max-w-[200px] w-full md:w-auto">
                    <h3 className="text-lg font-semibold mb-4">Account</h3>
                    <ul className="space-y-2 text-sm text-gray-200 mt-4 md:mt-0">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                {/* Column 4: Quick Link */}
                <div className="max-w-[200px] w-full md:w-auto">
                    <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
                    <ul className="space-y-2 text-sm text-gray-200 mt-4 md:mt-0">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Column 5: Download App */}
                <div className="max-w-[240px] w-full md:w-auto">
                    <h3 className="text-lg font-semibold mb-4">Download App</h3>
                    <div className="mt-4 md:mt-0">
                        <p className="text-sm text-gray-200 mb-2">Save $3 with App New User Only</p>

                        <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                            <img
                                src={qrcode}
                                alt="QR"
                                className="w-[80px] h-[80px] object-contain bg-white p-1"
                            />
                            <div className="flex flex-col gap-2">
                                <img
                                    src={playstore}
                                    alt="Google Play"
                                    className="w-[100px] object-contain"
                                />
                                <img
                                    src={androidstore}
                                    alt="App Store"
                                    className="w-[100px] object-contain"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 text-gray-200 text-lg mt-2">
                            <FaFacebookF className="hover:text-white cursor-pointer" />
                            <FaTwitter className="hover:text-white cursor-pointer" />
                            <FaInstagram className="hover:text-white cursor-pointer" />
                            <FaLinkedinIn className="hover:text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="text-center text-gray-200 text-xs mt-12">
                © Copyright Nazmul Karim Tanvir 2025. All right reserved
            </div>
        </footer>
    );
};

export default Footer;
