import React, { useEffect, useState } from "react";
import useCartStore from "../../store/cartStore";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("loggedInUser");
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find((u) => u.email === email);
    setUser(foundUser);

    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) setProfilePic(savedPic);

    const allOrders = JSON.parse(localStorage.getItem("orderHistory")) || {};
    setOrderHistory(allOrders[email] || []);
  }, []);

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        localStorage.setItem("profilePic", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/";
  };

  if (!user)
    return (
      <p className="text-center mt-10 text-lg text-red-600">
        No user found. Please login first.
      </p>
    );

  return (
    <div className="max-w-[1170px] mx-auto py-5">
      <div className=" bg-white border border-gray-300 rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-between">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "profile"
                ? "bg-blue-100 font-semibold"
                : "hover:bg-gray-100"
                }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "orders"
                ? "bg-blue-100 font-semibold"
                : "hover:bg-gray-100"
                }`}
            >
              My Orders
            </button>
            <button
              onClick={() => setActiveTab("offers")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "offers"
                ? "bg-blue-100 font-semibold"
                : "hover:bg-gray-100"
                }`}
            >
              My Offers
            </button>
            <button
              onClick={handleLogout}
              className="w-full mt-6 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium py-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-3/4 p-6">
          {activeTab === "profile" && (
            <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-extrabold mb-6 text-gray-900 text-center">User Profile</h2>
              <div className="text-center mb-6">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full object-cover mx-auto shadow mb-4" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mx-auto shadow mb-4">
                    No Photo
                  </div>
                )}
                <label
                  htmlFor="profilePicInput"
                  className="cursor-pointer inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition select-none"
                >
                  Upload Profile Picture
                </label>
                <input
                  id="profilePicInput"
                  type="file"
                  accept="image/*"
                  onChange={handlePicUpload}
                  className="hidden"
                />
              </div>
              <div className="space-y-4 text-left text-gray-700">
                <p className="text-lg font-medium"><span className="font-semibold pr-2">Name:</span>{user.name}</p>
                <p className="text-lg font-medium"><span className="font-semibold pr-2">Email:</span>{user.email}</p>
                <p className="text-lg font-medium"><span className="font-semibold pr-2">Contact:</span>Not set</p>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">My Orders</h2>
              {orderHistory.length === 0 ? (
                <p className="text-gray-500 text-center py-20">You have no orders yet.</p>
              ) : (
                <div className="space-y-6">
                  {orderHistory.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg shadow-sm overflow-hidden bg-white"
                    >
                      {/* Header */}
                      <div className="bg-gray-100 px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div className="text-lg font-semibold text-gray-800">
                          Order #{order.id}
                        </div>
                        <div className="text-sm text-gray-500 mt-1 sm:mt-0">
                          {order.date}
                        </div>
                      </div>

                      {/* Items */}
                      <div className="divide-y divide-gray-100">
                        {order.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-4 flex items-center justify-between gap-4"
                          >
                            <div className="flex items-center gap-4">
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt={item.productName}
                                  className="w-14 h-14 object-contain border rounded"
                                />
                              )}
                              <div>
                                <p className="font-medium text-gray-800">
                                  {item.productName}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Quantity: {item.quantity}
                                </p>
                              </div>
                            </div>
                            <div className="font-semibold text-gray-900">
                              ${(item.newPrice * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="px-6 py-4 border-t flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                  ${order.status.toLowerCase() === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : order.status.toLowerCase() === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-200 text-gray-800"
                            }
                `}
                        >
                          {order.status}
                        </div>
                        <div className="mt-2 sm:mt-0 font-semibold text-gray-800">
                          Total: ${order.total.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "offers" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">My Offers</h2>
              <p className="text-gray-500">No offers available at this time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;