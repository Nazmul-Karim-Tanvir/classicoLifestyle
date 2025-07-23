import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../../store/products';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';

const categories = {
    all: 'All Products',
    today: "Today’s Deals",
    thisMonth: "This Month",
    ourProducts: "Our Products",
    women: "Woman’s Fashion",
    men: "Men’s Fashion",
    electronics: "Electronics",
    home: "Home & Lifestyle",
    medicine: "Medicine",
    sports: "Sports & Outdoor",
    baby: "Baby’s & Toys",
    groceries: "Groceries & Pets",
    health: "Health & Beauty",
    smartphone: "Smartphone",
    monitor: "Monitor",
    watch: "Watch",
    camera: "Camera",
    headphones: "Headphones",
    gamepad: "Gamepad",
};

const Product = () => {
    const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [perPage, setPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    // Handle URL query param to set category
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let categoryFromQuery = params.get('search');

        if (categoryFromQuery) {
            categoryFromQuery = decodeURIComponent(categoryFromQuery).trim();

            const matchedKey = Object.entries(categories).find(
                ([, label]) => label.toLowerCase() === categoryFromQuery.toLowerCase()
            )?.[0];

            if (matchedKey) {
                setActiveCategory(matchedKey);
                setCurrentPage(1);
            }
        }
    }, [location.search]);

    // Filter products by category
    const getFilteredProducts = () => {
        if (activeCategory === 'all') {
            return Object.values(products).flat();
        }
        return products[activeCategory] || [];
    };

    useEffect(() => {
        setFilteredProducts(getFilteredProducts());
        setCurrentPage(1);
    }, [activeCategory]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredProducts.length / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + perPage);

    // Handlers
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handlePerPageChange = (e) => {
        setPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <div className="max-w-[1170px] mx-auto py-10">
            <div className="text-sm text-gray-500 mb-6 px-0 md:px-0 pb-2">
                <Link to="/" className="hover:underline">Home</Link> / <span>Products</span>
            </div>

            {/* Row: category dropdown (left) + per page selector (right) */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 py-4 border-b-1 border-gray-300">
                {/* Category dropdown */}
                <div className="w-full sm:w-auto">
                    <label
                        htmlFor="categorySelect"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                        Select Category
                    </label>
                    <select
                        id="categorySelect"
                        value={activeCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full sm:w-auto border rounded px-3 py-2 text-sm"
                    >
                        {Object.entries(categories).map(([key, label]) => (
                            <option key={key} value={key}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Per page selector */}
                <div className="flex items-center gap-2 text-sm bg-gray-100 px-4 py-2 rounded w-full sm:w-auto justify-center sm:justify-end">
                    <label htmlFor="perPage" className="text-gray-600 whitespace-nowrap">
                        Show per page:
                    </label>
                    <select
                        id="perPage"
                        value={perPage}
                        onChange={handlePerPageChange}
                        className="border rounded px-2 py-1 text-sm"
                    >
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={12}>12</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {paginatedProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 text-lg py-20">
                    No products available in this category.
                </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > perPage && (
                <div className="flex justify-center mt-10 gap-4">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded border text-sm font-medium ${currentPage === 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white hover:bg-gray-100'
                            }`}
                    >
                        Prev
                    </button>
                    <span className="text-sm text-gray-600 pt-2">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded border text-sm font-medium ${currentPage === totalPages
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white hover:bg-gray-100'
                            }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Product;