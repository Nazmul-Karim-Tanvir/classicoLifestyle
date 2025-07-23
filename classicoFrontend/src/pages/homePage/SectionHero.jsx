import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCategoryStore from '../../store/useCategoryStore';

import { FaApple } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { GiPirateCoat } from "react-icons/gi";
import { SiRepublicofgamers } from "react-icons/si";

import asusrog from '../../assets/images/heroImages/asusrog1.jpg';
import bagimage from '../../assets/images/heroImages/guchi4.jpg';
import blazzer from '../../assets/images/heroImages/blazzer2.jpg';
import iphoneHero from '../../assets/images/heroImages/iphone-hero.png';

const slides = [
    {
        title: 'iPhone 14 Series',
        description: 'Up to 10% off Voucher',
        image: iphoneHero,
        LogoIcon: FaApple,
    },
    {
        title: 'Stylish Backpack',
        description: 'Trendy & Spacious',
        image: bagimage,
        LogoIcon: HiShoppingBag,
    },
    {
        title: 'Exclusive Formal Jacket',
        description: 'Stay Warm in Style – 15% Off',
        image: blazzer,
        LogoIcon: GiPirateCoat,
    },
    {
        title: 'ASUS ROG',
        description: 'Next-Gen Gaming Laptop',
        image: asusrog,
        LogoIcon: SiRepublicofgamers,
    },
];

const SectionHero = () => {
    const categories = useCategoryStore((state) => state.categories);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const CurrentLogoIcon = slides[current].LogoIcon;

    return (
        <div className="max-w-[1170px] mx-auto flex gap-6 py-4 px-4 sm:px-6 lg:px-0 flex-col md:flex-row">
            {/* Left Sidebar - Categories */}
            <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0">
                <ul className="flex flex-wrap md:flex-col gap-2 md:gap-4 text-sm md:text-base lg:text-xl font-medium text-gray-600">
                    {categories.map((item) => (
                        <Link
                            key={item}
                            to={`/product?search=${encodeURIComponent(item)}`}
                            className="
                                cursor-pointer 
                                hover:text-black
                                md:block
                                md:bg-transparent
                                md:px-0
                                md:py-0
                                md:rounded-none
                                md:m-0
                                bg-gray-200 
                                text-gray-800 
                                px-3 
                                py-1 
                                rounded-full 
                                whitespace-nowrap
                                inline-block
                                transition
                            "
                        >
                            {item}
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Right Side - Hero Carousel */}
            <div className="w-full md:w-3/4 relative bg-black text-white overflow-hidden rounded-md flex flex-col justify-center min-h-[360px] px-4 py-6 sm:p-6 md:p-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 h-full">
                    {/* Text Area */}
                    <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center gap-3 pb-10">
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <CurrentLogoIcon className="text-white w-10 h-10 sm:w-12 sm:h-12" />
                            <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] text-gray-200 font-medium">
                                {slides[current].title}
                            </p>
                        </div>
                        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight min-h-[60px]">
                            {slides[current].description}
                        </h2>
                        <Link
                            to="/product"
                            className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition mx-auto md:mx-0 text-sm sm:text-base mt-2 sm:mt-4"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <span className="border-b border-white leading-none">Shop Now</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={slides[current].image}
                            alt={slides[current].title}
                            className="w-full max-w-[300px] sm:max-w-[350px] object-contain h-[200px] sm:h-[220px]"
                        />
                    </div>
                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-white w-4' : 'bg-gray-500 w-2'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionHero;
