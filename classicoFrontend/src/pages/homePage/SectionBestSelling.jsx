import products from '../../store/products.js'
import ProductCard from '../../components/ProductCard.jsx'
import { useNavigate } from "react-router-dom";

const SectionBestSelling = () => {
    const navigate = useNavigate();
    const bestSelling = products.thisMonth;

    const handleCategoryClick = () => {
        navigate(`/product?search=${encodeURIComponent("This Month")}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className='max-w-[1170px] mx-auto mt-30 sm:px-6 lg:px-0'>
            {/* Title bar */}
            <div className="max-w-[1170px] mx-auto mb-7 flex items-center gap-3">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">This Month</h1>
            </div>

            {/* Heading and button */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mx-auto pb-9 gap-4 md:gap-0'>
                <h1 className='text-3xl md:text-4xl pr-0 md:pr-6 font-semibold'>
                    Best Selling Products
                </h1>
                <button onClick={handleCategoryClick} className='text-white bg-red-600 rounded px-4 py-2 sm:px-6 sm:py-2 md:px-6 md:py-3 text-sm sm:text-base md:text-base whitespace-nowrap'>
                    View All
                </button>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5">
                {bestSelling.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            <hr className='border-gray-300 my-8' />
        </div>
    )
}

export default SectionBestSelling