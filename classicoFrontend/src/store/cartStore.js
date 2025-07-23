import { create } from 'zustand';

const CART_KEY = 'cartItems';

const getCartFromLocalStorage = () => {
    try {
        const data = localStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveCartToLocalStorage = (items) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
};

const useCartStore = create((set, get) => ({
    cartItems: getCartFromLocalStorage(),

    addToCart: (product) => {
        const existing = get().cartItems.find(item => item.id === product.id);
        let updatedCart;

        if (!existing) {
            updatedCart = [...get().cartItems, { ...product, quantity: product.quantity ?? 1 }];
        } else {
            const qtyChange = product.quantity ?? 1;
            const newQty = existing.quantity + qtyChange;

            if (newQty <= 0) {
                updatedCart = get().cartItems.filter(item => item.id !== product.id);
            } else {
                updatedCart = get().cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: newQty } : item
                );
            }
        }

        saveCartToLocalStorage(updatedCart);
        set({ cartItems: updatedCart });
    },

    removeItem: (id) => {
        const updated = get().cartItems.filter(item => item.id !== id);
        saveCartToLocalStorage(updated);
        set({ cartItems: updated });
    },

    decreaseQuantity: (id) => {
        const existing = get().cartItems.find(item => item.id === id);
        if (!existing) return;

        let updated;
        if (existing.quantity <= 1) {
            updated = get().cartItems.filter(item => item.id !== id);
        } else {
            updated = get().cartItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        }

        saveCartToLocalStorage(updated);
        set({ cartItems: updated });
    },

    clearCart: () => {
        localStorage.removeItem(CART_KEY);
        set({ cartItems: [] });
    },

    getTotalPrice: () => {
        return get().cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0);
    },

    getTotalQuantity: () => {
        return get().cartItems.reduce((total, item) => total + item.quantity, 0);
    }
}));

export default useCartStore;