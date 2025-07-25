import { Heart, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import useWishListStore from '../store/wishlistStore';
import { toast } from 'react-toastify';

const ProductCard = ({
  id,
  image,
  name,
  newPrice,
  oldPrice,
  offer,
  sizes = [],
  inStock = true,
  isInWishListPage = false,
}) => {
  const navigate = useNavigate();

  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const existingItem = cartItems.find((item) => item.id === id);

  const wishListItems = useWishListStore((state) => state.wishListItems);
  const toggleWishList = useWishListStore((state) => state.toggleWishList);
  const isInWishList = wishListItems.some((item) => item.id === id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, image, name, newPrice, oldPrice, offer, quantity: 1 });
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
    toggleWishList({ id, image, name, newPrice, oldPrice, offer });
    toast[isInWishList ? 'info' : 'success'](isInWishList ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const goToDetail = () => navigate(`/product/${id}`);

  return (
    <div
      className="max-w-[270px] sm:max-w-full shadow rounded cursor-pointer bg-white hover:shadow-lg transition-shadow duration-300"
      onClick={goToDetail}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && goToDetail()}
    >
      <div className="h-[250px] sm:h-[200px] group relative bg-gray-100 rounded overflow-hidden flex items-center justify-center">
        {offer && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded">
            {offer}
          </div>
        )}

        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10 items-end">
          <div
            onClick={handleToggleWishList}
            className={`rounded-full p-2 cursor-pointer transition-colors z-20 ${
              isInWishList ? 'bg-red-500 text-white' : 'bg-white'
            } shadow-sm`}
            title={isInWishList ? 'Remove from wishlist' : 'Add to wishlist'}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleToggleWishList(e)}
          >
            {isInWishListPage ? <Trash2 size={16} /> : <Heart size={16} />}
          </div>
        </div>

        {existingItem ? (
          <div className="absolute bottom-0 w-full px-3 py-2 text-xs sm:text-sm font-medium bg-black/60 backdrop-blur-sm text-white rounded-t flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 transition-opacity duration-300 opacity-100 sm:opacity-0 group-hover:opacity-100">
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <button
                onClick={handleDecrement}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-red-500 text-lg flex items-center justify-center transition active:scale-90"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <div className="min-w-[30px] px-2 py-1 text-center rounded-full bg-white/30 backdrop-blur-sm font-semibold text-sm sm:text-base">
                {existingItem.quantity}
              </div>
              <button
                onClick={handleIncrement}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-green-500 text-lg flex items-center justify-center transition active:scale-90"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate('/cart');
              }}
              className="text-xs sm:text-sm px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition active:scale-95 w-full sm:w-auto text-center"
            >
              View Cart
            </button>
          </div>
        ) : (
          <div className="absolute bottom-0 w-full text-center py-2 text-sm sm:text-base font-medium bg-black/80 text-white cursor-pointer transition-opacity duration-300 opacity-100 sm:opacity-0 group-hover:opacity-100">
            <button
              className="w-full py-2 hover:bg-white/20 transition active:scale-95 duration-150 rounded text-sm sm:text-base"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              Add To Cart
            </button>
          </div>
        )}

        <div className="flex items-center justify-center h-full px-4 sm:px-6">
          <img
            src={image}
            alt={name}
            className="max-h-[150px] sm:max-h-[130px] object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="py-2 px-2 sm:px-3">
        <h3 className="text-base sm:text-lg font-medium line-clamp-1 leading-snug">{name}</h3>

        <div className="flex items-start pt-1.5 gap-2">
          <span className="text-red-600 font-semibold text-base sm:text-lg">${newPrice}</span>
          {oldPrice && (
            <span className="text-gray-400 font-medium line-through text-sm sm:text-base">${oldPrice}</span>
          )}
        </div>

        <div className="flex flex-wrap justify-between pt-2 text-xs sm:text-sm text-gray-600">
          <span>Sizes: {sizes.length > 0 ? sizes.join(', ') : 'N/A'}</span>
          <span className={inStock ? 'text-green-600 font-semibold' : 'text-red-500 font-semibold'}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;