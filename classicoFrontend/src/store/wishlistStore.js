import { create } from 'zustand';

const WISHLIST_KEY = 'wishlistItems';

const getWishlistFromLocalStorage = () => {
    try {
        const data = localStorage.getItem(WISHLIST_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveWishlistToLocalStorage = (items) => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
};

const useWishListStore = create((set, get) => ({
    wishListItems: getWishlistFromLocalStorage(),

    addToWishList: (product) => {
        const exists = get().wishListItems.find(item => item.id === product.id);
        if (exists) return;

        const updated = [...get().wishListItems, product];
        saveWishlistToLocalStorage(updated);
        set({ wishListItems: updated });
    },

    removeFromWishList: (id) => {
        const updated = get().wishListItems.filter(item => item.id !== id);
        saveWishlistToLocalStorage(updated);
        set({ wishListItems: updated });
    },

    toggleWishList: (product) => {
        const exists = get().wishListItems.find(item => item.id === product.id);
        let updated;

        if (exists) {
            updated = get().wishListItems.filter(item => item.id !== product.id);
        } else {
            updated = [...get().wishListItems, product];
        }

        saveWishlistToLocalStorage(updated);
        set({ wishListItems: updated });
    },
}));

export default useWishListStore;
