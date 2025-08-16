import { useState, useRef } from "react";
import axios from "axios";
import { showSuccess, showError } from "../../utils/sweetToast";

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
  const [loading, setLoading] = useState(false);

  // 🔑 create ref for file input
  const fileInputRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (["category", "sizes", "colour", "tags"].includes(key)) {
          const arr = value
            ? value.split(",").map((i) => i.trim()).filter(Boolean)
            : [];
          data.append(key, JSON.stringify(arr));
        } else if (
          ["price", "oldPrice", "productId", "stock", "rating"].includes(key)
        ) {
          data.append(key, value ? Number(value) : "");
        } else {
          data.append(key, value);
        }
      });

      if (image) data.append("image", image);

      await axios.post("http://localhost:5000/api/product/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      showSuccess("Product added successfully ✅");

      // reset form fields
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

      // 🔑 clear file input manually
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      showError("Failed to add product ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getInputType = (field) => {
    if (["price", "oldPrice", "productId", "stock", "rating"].includes(field)) {
      return "number";
    }
    return "text";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((field) =>
            field === "description" ? (
              <textarea
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder="Description"
                className="col-span-2 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <input
                key={field}
                type={getInputType(field)}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )
          )}

          {/* Image upload */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}   // 🔑 attach ref
            onChange={handleImageChange}
            className="col-span-2 border rounded p-2"
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`col-span-2 py-2 rounded transition ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
