import { create } from 'zustand';

const initialState = {
    categories: [
        "Woman’s Fashion",
        "Men’s Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby’s & Toys",
        "Groceries & Pets",
        "Health & Beauty"
    ]
};

const useCategoryStore = create((set) => ({
    ...initialState,

    setCategories: (data) =>
        set(() => ({
            categories: data, // directly replace all categories
        })),

    onChangeCategoryList: (data) =>
        set((state) => ({
            categories: [...state.categories, data], // add one new category
        })),

    resetCategoryList: () =>
        set(() => ({
            categories: initialState.categories, // reset to initial state
        })),
}));

export default useCategoryStore;
