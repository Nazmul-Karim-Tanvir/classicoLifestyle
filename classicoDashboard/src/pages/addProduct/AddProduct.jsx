import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    oldPrice: "",
    category: "",
    sizes: "",
    colour: "",
    productId: "",
    stock: "",
    rating: "",
    tags: "",
  });
  const [image, setImage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      // Append fields with type conversion
      Object.entries(formData).forEach(([key, value]) => {
        if (["category", "sizes", "colour", "tags"].includes(key)) {
          data.append(key, JSON.stringify(value.split(",").map(i => i.trim())));
        } else if (["price", "oldPrice", "productId", "stock", "rating"].includes(key)) {
          data.append(key, Number(value));
        } else {
          data.append(key, value);
        }
      });

      if (image) {
        data.append("image", image);
      }

      await axios.post("http://localhost:5000/api/product/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("✅ Product added successfully!");

      setFormData({
        name: "",
        description: "",
        price: "",
        oldPrice: "",
        category: "",
        sizes: "",
        colour: "",
        productId: "",
        stock: "",
        rating: "",
        tags: "",
      });
      setImage(null);

    } catch (error) {
      toast.error("❌ Failed to add product");
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}

          {/* Image upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="col-span-2 border rounded p-2"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
