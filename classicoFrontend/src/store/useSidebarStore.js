// src/store/sidebarStore.js
import { create } from 'zustand';

const useSidebarStore = create((set) => ({
    isOpen: false,
    reviews: [],
    rating: 0,

    openSidebar: (reviews = [], rating = 0) => set({ isOpen: true, reviews, rating }),
    closeSidebar: () => set({ isOpen: false }),
}));

export default useSidebarStore;