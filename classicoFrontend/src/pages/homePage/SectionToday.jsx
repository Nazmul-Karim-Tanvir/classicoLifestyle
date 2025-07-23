import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { useCountdown } from '../../utils/countdown';
import products from '../../store/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const SectionToday = () => {
    const todayProducts = products.today;
    const [scrollIndex, setScrollIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/product?search=${encodeURIComponent("Today’s Deals")}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Set itemsPerPage based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(4);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.ceil(todayProducts.length / itemsPerPage) - 1;

    const scrollLeft = () => {
        setScrollIndex((prev) => Math.max(prev - 1, 0));
    };

    const scrollRight = () => {
        setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const startIndex = scrollIndex * itemsPerPage;
    const visibleProducts = todayProducts.slice(startIndex, startIndex + itemsPerPage);

    const flashSalesTargetDate = new Date('2025-07-30T00:00:00');
    const { days, hours, minutes, seconds, total } = useCountdown(flashSalesTargetDate);

    return (
        <div className="max-w-[1170px] mx-auto mt-28 px-4 sm:px-6 lg:px-0">
            {/* Section Title */}
            <div className="mb-7 flex items-center gap-3">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Today's</h1>
            </div>

            {/* Header & Arrows */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 pb-6">
                {total > 0 ? (
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-24 font-semibold">
                        <h1 className="text-3xl md:text-4xl">Flash Sales</h1>
                        <div>
                            <div className="text-sm md:text-base flex gap-7 text-gray-600">
                                <span>Days</span>
                                <span>Hours</span>
                                <span>Minutes</span>
                                <span>Seconds</span>
                            </div>
                            <div className="text-2xl md:text-4xl flex gap-3">
                                <span>{days}</span>
                                <span className="text-red-600">:</span>
                                <span>{hours}</span>
                                <span className="text-red-600">:</span>
                                <span>{minutes}</span>
                                <span className="text-red-600">:</span>
                                <span>{seconds}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-xl font-bold text-red-600">Sale Ended!</div>
                )}

                {/* Arrows */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={scrollLeft}
                        disabled={scrollIndex === 0}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={scrollIndex === maxIndex}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Product Grid (Responsive) */}
            <div className={`grid gap-6 ${itemsPerPage === 2 ? 'grid-cols-2' : 'grid-cols-4'}`}>
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            {/* View All Button */}
            <div onClick={handleCategoryClick} className="text-center pt-7">
                <button className="bg-red-600 hover:bg-red-400 text-white py-2 px-8 rounded text-sm sm:text-base">
                    View All Products
                </button>
            </div>

            <hr className="mt-6 border-gray-300" />
        </div>
    );
};

export default SectionToday;
