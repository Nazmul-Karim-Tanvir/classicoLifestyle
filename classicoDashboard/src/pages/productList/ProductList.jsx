import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product/list");
      setProducts(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  const removeProduct = async (id) => {
    try {
      await axios.post("http://localhost:5000/api/product/remove", { id });
      toast.success("Product removed successfully");
      fetchProducts();
    } catch (error) {
      toast.error("Failed to remove product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="text-center">
              <td className="p-2 border">
                <img
                  src={`http://localhost:5000/images/${p.image}`}
                  alt={p.name}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">${p.price}</td>
              <td className="p-2 border">
                <button
                  onClick={() => removeProduct(p._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}