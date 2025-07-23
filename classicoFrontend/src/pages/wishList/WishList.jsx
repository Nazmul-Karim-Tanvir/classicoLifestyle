import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react'; // ✅ Importing Heart icon
import useWishListStore from '../../store/wishlistStore';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';

const WishList = () => {
    const wishListItems = useWishListStore(state => state.wishListItems);
    const navigate = useNavigate(); // ✅ Using navigate properly

    return (
        <div className="max-w-[1170px] mx-auto py-10">
            <div className="max-w-[1170px] mx-auto text-sm text-gray-500 mb-6 px-4 md:px-0 pb-6">
                <Link to="/" className="hover:underline">Home</Link> / <span>Wishlist</span>
            </div>

            <h2 className="text-xl font-semibold mb-8 text-center sm:text-left">Your Wishlist</h2>
            {/* Empty Wishlist View */}
            {wishListItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center text-gray-500 py-20">
                    <Heart size={80} className="mb-6 opacity-40 text-red-400" />
                    <p className="text-xl font-semibold mb-2">Your wishlist is empty</p>
                    <p className="max-w-sm text-gray-400">
                        Looks like you haven&apos;t added anything to your wishlist yet.
                    </p>
                    <button
                        onClick={() => navigate("/product")}
                        className="mt-6 border border-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition"
                    >
                        Return To Shop
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishListItems.map(product => (
                        <ProductCard key={product.id} {...product} isInWishListPage={true} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishList;