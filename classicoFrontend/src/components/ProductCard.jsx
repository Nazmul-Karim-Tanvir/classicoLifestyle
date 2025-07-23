import { Heart, Star as StarIcon, StarHalf, StarOff, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import useWishListStore from '../store/wishlistStore';
import useSidebarStore from '../store/useSidebarStore.js'; // ✅ ADD THIS
import { toast } from 'react-toastify';
import getStarArray from '../utils/getStarArray.js';

const ProductCard = ({
    id,
    image,
    productName,
    newPrice,
    oldPrice,
    offer,
    rating,
    starCount,
    reviews = [], // ✅ ADD reviews prop
    isInWishListPage = false,
}) => {
    const stars = getStarArray(rating);
    const navigate = useNavigate();

    const cartItems = useCartStore((state) => state.cartItems);
    const addToCart = useCartStore((state) => state.addToCart);
    const existingItem = cartItems.find((item) => item.id === id);

    const wishListItems = useWishListStore((state) => state.wishListItems);
    const toggleWishList = useWishListStore((state) => state.toggleWishList);
    const isInWishList = wishListItems.some((item) => item.id === id);

    const openSidebar = useSidebarStore((state) => state.openSidebar); // ✅ Zustand action

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart({ id, image, productName, newPrice, oldPrice, offer, rating, starCount, quantity: 1 });
        toast.success('Product added to cart');
    };

    const handleIncrement = (e) => {
        e.stopPropagation();
        addToCart({ ...existingItem, quantity: 1 });
        toast.success('Product quantity increased');
    };

    const handleDecrement = (e) => {
        e.stopPropagation();
        addToCart({ ...existingItem, quantity: -1 });
        toast.info(existingItem.quantity > 1 ? 'Product quantity decreased' : 'Product removed from cart');
    };

    const handleToggleWishList = (e) => {
        e.stopPropagation();
        toggleWishList({ id, image, productName, newPrice, oldPrice, offer, rating, starCount });
        toast[isInWishList ? 'info' : 'success'](isInWishList ? 'Removed from wishlist' : 'Added to wishlist');
    };

    const goToDetail = () => navigate(`/product/${id}`);

    return (
        <div className="max-w-[270px] shadow rounded cursor-pointer" onClick={goToDetail}>
            <div className="h-[250px] group relative bg-gray-100 rounded overflow-hidden">
                {offer && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {offer}
                    </div>
                )}

                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10 items-end">
                    <div
                        onClick={handleToggleWishList}
                        className={`rounded-full p-2 cursor-pointer transition-colors z-20 ${isInWishList ? 'bg-red-500 text-white' : 'bg-white'
                            }`}
                        title={isInWishList ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                        {isInWishListPage ? <Trash2 size={16} /> : <Heart size={16} />}
                    </div>
                </div>

                {existingItem ? (
                    <div className="absolute bottom-0 w-full px-3 py-2 text-sm font-medium bg-black/50 backdrop-blur-sm text-white rounded-t flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
                        <div className="flex justify-center md:justify-start items-center gap-2">
                            <button
                                onClick={handleDecrement}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500 text-lg flex items-center justify-center transition active:scale-90"
                            >
                                −
                            </button>
                            <div className="min-w-[36px] px-3 py-1 text-center rounded-full bg-white/20 backdrop-blur-sm font-semibold">
                                {existingItem.quantity}
                            </div>
                            <button
                                onClick={handleIncrement}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-green-500 text-lg flex items-center justify-center transition active:scale-90"
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/cart');
                            }}
                            className="text-xs px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition active:scale-95 w-full md:w-auto text-center"
                        >
                            View Cart
                        </button>
                    </div>
                ) : (
                    <div className="absolute bottom-0 w-full text-center py-2 text-sm font-medium bg-black/90 text-white cursor-pointer transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
                        <button
                            className="w-full py-2 hover:bg-white/20 transition active:scale-95 duration-150 rounded"
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>
                    </div>
                )}

                <div className="flex items-center justify-center h-full px-4">
                    <img src={image} alt={productName} className="max-h-[150px] object-contain" />
                </div>
            </div>

            <div className="py-2 px-2">
                <h3 className="text-lg font-medium line-clamp-1">{productName}</h3>

                <div className="flex items-start pt-1.5 gap-2">
                    <span className="text-red-600 font-medium">${newPrice}</span>
                    <span className="text-gray-400 font-medium line-through">${oldPrice}</span>
                </div>

                <div className="flex items-center gap-1 text-sm pt-1">
                    {stars.map((type, index) =>
                        type === 'full' ? (
                            <StarIcon key={index} size={16} className="text-yellow-500 fill-yellow-500" />
                        ) : type === 'half' ? (
                            <StarHalf key={index} size={16} className="text-yellow-500 fill-yellow-500" />
                        ) : (
                            <StarOff key={index} size={16} className="text-gray-300 fill-none" />
                        )
                    )}
                    <span
                        className="text-gray-500 ml-1 cursor-pointer hover:underline"
                        title="View Reviews"
                        onClick={(e) => {
                            e.stopPropagation();
                            openSidebar(reviews, rating); // ✅ Open sidebar on star click
                        }}
                    >
                        ({starCount})
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
