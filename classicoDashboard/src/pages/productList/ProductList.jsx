import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product/list");
      setProducts(res.data.data || []);
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

  const updateProduct = async (id, updatedData) => {
    if (!window.confirm("Are you sure you want to save changes?")) return;
    try {
      await axios.post("http://localhost:5000/api/product/update", {
        id,
        ...updatedData,
      });
      toast.success("Product updated successfully");
      fetchProducts();
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔎 Filter + Pagination
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name?.toLowerCase().includes(filterName.toLowerCase())
    );
  }, [products, filterName]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const headers = products.length
    ? Object.keys(products[0]).filter(
        (key) => !["_id", "__v", "image"].includes(key)
      )
    : [];

  return (
    <div className="min-w-full mx-auto">
      <h1 className="text-base sm:text-xl font-bold text-center text-blue-800 mb-8 underline">
        Product List Management
      </h1>

      <div className="bg-white shadow rounded-xl p-4 border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead className="bg-blue-900/80 text-white font-bold text-center">
              <tr>
                <th className="px-6 py-4 border-b">Image</th>
                {headers.map((key) => (
                  <th key={key} className="px-6 py-4 border-b capitalize">
                    {key}
                  </th>
                ))}
                <th className="px-6 py-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {paginatedProducts.map((p, index) => (
                <tr
                  key={p._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50"
                  } hover:bg-gray-50`}
                >
                  {/* Image */}
                  <td className="px-6 py-4 border-b">
                    <img
                      src={`http://localhost:5000/images/${p.image}`}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded-lg shadow mx-auto"
                    />
                  </td>

                  {/* Dynamic editable cells */}
                  {headers.map((key) => (
                    <td key={key} className="px-6 py-4 border-b text-left">
                      {["createdAt", "updatedAt"].includes(key) ? (
                        // Show only readable date
                        <span className="text-gray-600">
                          {new Date(p[key]).toLocaleString()}
                        </span>
                      ) : (
                        <input
                          type="text"
                          value={p[key] || ""}
                          onChange={(e) =>
                            setProducts((prev) =>
                              prev.map((prod) =>
                                prod._id === p._id
                                  ? { ...prod, [key]: e.target.value }
                                  : prod
                              )
                            )
                          }
                          className="w-full border rounded px-2 py-1"
                        />
                      )}
                    </td>
                  ))}

                  {/* Actions */}
                  <td className="px-6 py-4 border-b">
                    <button
                      onClick={() =>
                        updateProduct(
                          p._id,
                          products.find((prod) => prod._id === p._id)
                        )
                      }
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => removeProduct(p._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedProducts.length === 0 && (
                <tr>
                  <td colSpan={headers.length + 2} className="py-6 text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}