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

  // 🔎 Filter + Pagination Logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }, [products, filterName]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-w-full mx-auto">
      <h1 className="text-base sm:text-xl font-bold text-center text-blue-800 mb-8 underline underline-offset-8 decoration-gray-500/80">
        Product List Management
      </h1>

      <div className="bg-white shadow rounded-xl p-4 border border-gray-200">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="max-w-xs w-64">
              <input
                type="text"
                placeholder="Search by name..."
                value={filterName}
                onChange={(e) => {
                  setFilterName(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Rows per page */}
          <div className="max-w-xs w-36">
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring focus:ring-blue-200"
            >
              <option value={5}>5 rows</option>
              <option value={10}>10 rows</option>
              <option value={15}>15 rows</option>
              <option value={20}>20 rows</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead className="bg-blue-900/80 text-white font-bold text-center">
              <tr>
                <th className="px-6 py-4 border-b border-gray-200">Image</th>
                <th className="px-6 py-4 border-b border-gray-200">Name</th>
                <th className="px-6 py-4 border-b border-gray-200">Price</th>
                <th className="px-6 py-4 border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {paginatedProducts.map((p, index) => (
                <tr
                  key={p._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50"
                  } hover:bg-gray-50 transition-colors`}
                >
                  <td className="px-6 py-4 border-b border-gray-100">
                    <img
                      src={`http://localhost:5000/images/${p.image}`}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded-lg shadow mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 font-medium text-left">
                    {p.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 text-gray-700">
                    ${p.price}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    <button
                      onClick={() => removeProduct(p._id)}
                      className="px-4 py-2 bg-red-600/80 text-white rounded-lg hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedProducts.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-6 text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages || 1}
          </span>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}