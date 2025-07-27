import { Heart, Trash2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import useWishListStore from '../store/wishlistStore';
import { toast } from 'react-toastify';

const ProductCard = ({
  id,
  name = '',
  description = '',
  price = 0,
  oldPrice,
  image = '',
  category = '',
  sizes = [],
  colour = [],
  stock = 0,
  rating = 0,
}) => {
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCartStore();
  const { wishListItems, toggleWishList } = useWishListStore();

  const existingItem = cartItems.find((item) => item.id === id);
  const isInWishList = wishListItems.some((item) => item.id === id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (stock === 0) return toast.error('Out of stock');
    addToCart({ id, name, image, price, quantity: 1 });
    toast.success('Added to cart');
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    addToCart({ id, name, image, price, quantity: 1 });
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    addToCart({ id, name, image, price, quantity: -1 });
  };

  const handleToggleWishList = (e) => {
    e.stopPropagation();
    toggleWishList({ id, name, image, price });
    toast[isInWishList ? 'info' : 'success'](
      isInWishList ? 'Removed from wishlist' : 'Added to wishlist'
    );
  };

  const goToDetail = () => navigate(`/product/${id}`);

  return (
    <div
      onClick={goToDetail}
      className="w-full max-w-xs bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-100 flex items-center justify-center">
        <img src={image} alt={name} className="h-32 object-contain" />
        <button
          onClick={handleToggleWishList}
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
        >
          {isInWishList ? <Trash2 size={16} className="text-red-500" /> : <Heart size={16} />}
        </button>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{name}</h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-purple-600 font-bold text-sm">৳{price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-xs">৳{oldPrice}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-xs">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill={i < rating ? 'currentColor' : 'none'} />
          ))}
          <span className="text-gray-500 text-xs ml-1">
            ({typeof rating === 'number' ? rating.toFixed(1) : 'N/A'})
          </span>
        </div>

        {/* Sizes */}
        {sizes.length > 0 && (
          <div className="flex gap-1 text-xs text-gray-600">
            Sizes:
            {sizes.map((s, i) => (
              <span key={i} className="bg-gray-100 px-2 py-0.5 rounded">{s}</span>
            ))}
          </div>
        )}

        {/* Colors */}
        {colour.length > 0 && (
          <div className="flex gap-1 items-center text-xs text-gray-600">
            Colors:
            {colour.map((c, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        )}

        {/* Stock */}
        <div className="text-xs mt-1">
          {stock > 0 ? (
            <span className="text-green-600 font-medium">In Stock: {stock}</span>
          ) : (
            <span className="text-red-500 font-medium">Out of Stock</span>
          )}
        </div>

        {/* Cart Actions */}
        <div className="mt-3">
          {existingItem ? (
            <div className="flex items-center justify-between gap-2 text-sm">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDecrement}
                  className="w-7 h-7 rounded-full bg-red-100 hover:bg-red-500 hover:text-white text-red-600"
                >
                  −
                </button>
                <span>{existingItem.quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="w-7 h-7 rounded-full bg-green-100 hover:bg-green-500 hover:text-white text-green-600"
                >
                  +
                </button>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/cart');
                }}
                className="text-xs px-3 py-1 rounded-full bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-700"
              >
                View Cart
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className={`w-full py-2 text-sm rounded ${stock > 0
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              disabled={stock === 0}
            >
              {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
