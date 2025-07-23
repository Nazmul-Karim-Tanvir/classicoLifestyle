import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import products from '../../store/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const SectionExploreProducts = () => {
    const navigate = useNavigate();
    const handleCategoryClick = () => {
        navigate(`/product?search=${encodeURIComponent("Our Products")}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const ourProducts = products.ourProducts;

    const itemsPerPage = 8; // 4 per row * 2 rows
    const [scrollIndex, setScrollIndex] = useState(0);

    const scrollLeft = () => {
        setScrollIndex((prev) => Math.max(prev - 1, 0));
    };

    const scrollRight = () => {
        const maxIndex = Math.ceil(ourProducts.length / itemsPerPage) - 1;
        setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const startIndex = scrollIndex * itemsPerPage;
    const visibleProducts = ourProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='max-w-[1170px] mx-auto my-7 sm:px-6 lg:px-0'>
            {/* Title */}
            <div className="mb-7 flex items-center gap-3">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Our Products</h1>
            </div>

            {/* Header + Controls */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center pb-9 gap-4 md:gap-0'>
                <h1 className='text-3xl md:text-4xl pr-0 md:pr-6 font-semibold'>
                    Explore Our Products
                </h1>
                <div className="flex items-center gap-4">
                    <button
                        onClick={scrollLeft}
                        disabled={scrollIndex === 0}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600 cursor-pointer"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={(scrollIndex + 1) * itemsPerPage >= ourProducts.length}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600 cursor-pointer"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            {/* View All Button */}
            <div className='text-center pt-7'>
                <button onClick={handleCategoryClick} className='bg-red-600 hover:bg-red-400 text-white py-2 px-8 my-6 rounded text-sm sm:text-base'>
                    View All Products
                </button>
            </div>
        </div>
    );
};

export default SectionExploreProducts;
