import React, { useState } from "react";

const categories = ["Salad", "Pizza", "Burger", "Dessert"];
const sizes = ["Small", "Medium", "Large"];
const colours = ["Red", "Green", "Blue", "Black"];
const tagsList = ["Spicy", "Vegetarian", "New", "Best Seller"];

const AddProduct = () => {
    const [form, setForm] = useState({
        image: null,
        name: "",
        description: "",
        category: [],
        price: "",
        oldPrice: "",
        sizes: [],
        colour: [],
        productId: "",
        stock: "",
        rating: "",
        tags: [],
    });

    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value, files, type, checked } = e.target;

        if (type === "file") {
            const file = files[0] || null;
            setForm((prev) => ({ ...prev, [name]: file }));
            setPreview(file ? URL.createObjectURL(file) : null);
        } else if (type === "checkbox") {
            setForm((prev) => {
                const arr = new Set(prev[name]);
                checked ? arr.add(value) : arr.delete(value);
                return { ...prev, [name]: Array.from(arr) };
            });
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("✅ Product added successfully!");
        setForm({
            image: null,
            name: "",
            description: "",
            category: [],
            price: "",
            oldPrice: "",
            sizes: [],
            colour: [],
            productId: "",
            stock: "",
            rating: "",
            tags: [],
        });
        setPreview(null);
    };

    return (
        <div className="max-w-full mx-auto p-4">
            <h2 className="text-xl font-semibold mb-6 text-purple-900 text-center font-serif">
                Add New Product
            </h2>

            {message && (
                <p className="mb-4 text-center text-green-600 font-semibold">{message}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Image Upload */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Product Image</label>
                    <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed rounded-md h-32">
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            required
                            className="hidden"
                        />
                        Upload Image
                    </label>

                    {preview && (
                        <div className="mt-3 flex justify-center">
                            <img
                                src={preview}
                                alt="Preview"
                                className="h-32 object-cover rounded-md border"
                            />
                        </div>
                    )}
                </div>

                {/* Product Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    {/* Product ID */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Product ID</label>
                        <input
                            type="number"
                            name="productId"
                            value={form.productId}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    {/* Old Price */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Old Price</label>
                        <input
                            type="number"
                            name="oldPrice"
                            value={form.oldPrice}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Stock Quantity</label>
                        <input
                            type="number"
                            name="stock"
                            value={form.stock}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            value={form.rating}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded-md h-24 resize-none"
                    />
                </div>

                {/* Category */}
                <div>
                    <p className="font-medium mb-2">Category</p>
                    {categories.map((cat) => (
                        <label key={cat} className="mr-4">
                            <input
                                type="checkbox"
                                name="category"
                                value={cat}
                                checked={form.category.includes(cat)}
                                onChange={handleChange}
                            />{" "}
                            {cat}
                        </label>
                    ))}
                </div>

                {/* Sizes */}
                <div>
                    <p className="font-medium mb-2">Sizes</p>
                    {sizes.map((s) => (
                        <label key={s} className="mr-4">
                            <input
                                type="checkbox"
                                name="sizes"
                                value={s}
                                checked={form.sizes.includes(s)}
                                onChange={handleChange}
                            />{" "}
                            {s}
                        </label>
                    ))}
                </div>

                {/* Colours */}
                <div>
                    <p className="font-medium mb-2">Colours</p>
                    {colours.map((c) => (
                        <label key={c} className="mr-4">
                            <input
                                type="checkbox"
                                name="colour"
                                value={c}
                                checked={form.colour.includes(c)}
                                onChange={handleChange}
                            />{" "}
                            {c}
                        </label>
                    ))}
                </div>

                {/* Tags */}
                <div>
                    <p className="font-medium mb-2">Tags</p>
                    {tagsList.map((tag) => (
                        <label key={tag} className="mr-4">
                            <input
                                type="checkbox"
                                name="tags"
                                value={tag}
                                checked={form.tags.includes(tag)}
                                onChange={handleChange}
                            />{" "}
                            {tag}
                        </label>
                    ))}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-purple-700 transition"
                >
                    ADD
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
