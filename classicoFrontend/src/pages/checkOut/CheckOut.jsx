import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const getTotalPrice = useCartStore((state) => state.getTotalPrice);
    const clearCart = useCartStore((state) => state.clearCart);
    const subtotal = getTotalPrice();
    const navigate = useNavigate();

    const [orderPlaced, setOrderPlaced] = useState(false);

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        paymentMethod: 'cod',
    });

    useEffect(() => {
        const saved = localStorage.getItem('checkoutFormData');
        if (saved) {
            setFormState(JSON.parse(saved));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        // ✅ Validation
        for (let key in formState) {
            if (formState[key] === '' && key !== 'paymentMethod') {
                alert(`Please fill in the ${key}`);
                return;
            }
        }

        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            navigate('/signUp?redirectTo=/checkout');
            return;
        }

        // ✅ Save order to order history
        const existingOrders = JSON.parse(localStorage.getItem('orderHistory')) || {};
        const userOrders = existingOrders[loggedInUser] || [];

        const newOrder = {
            id: Date.now(),
            items: cartItems,
            total: subtotal,
            date: new Date().toLocaleString(),
            status: 'Pending',
        };

        existingOrders[loggedInUser] = [...userOrders, newOrder];
        localStorage.setItem('orderHistory', JSON.stringify(existingOrders));

        localStorage.removeItem('checkoutFormData');
        setOrderPlaced(true);
        clearCart();

        // ✅ Show SweetAlert2
        Swal.fire({
            title: 'Order Placed!',
            text: 'Your order was placed successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/');
            }
        });
    };

    return (
        <div className="max-w-[1170px] mx-auto py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center sm:text-left text-gray-900">
                Checkout
            </h2>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                {/* Billing Form */}
                <div className="w-full md:w-2/3">
                    <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Billing Details</h3>
                        <form className="space-y-4" onSubmit={handlePlaceOrder}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formState.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formState.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    required
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                value={formState.address}
                                onChange={handleChange}
                                placeholder="Address Line"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                required
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="city"
                                    value={formState.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    required
                                />
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={formState.postalCode}
                                    onChange={handleChange}
                                    placeholder="Postal Code"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    required
                                />
                            </div>
                            <select
                                name="country"
                                value={formState.country}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                required
                            >
                                <option value="" disabled>Select Country</option>
                                <option value="bd">Bangladesh</option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                            </select>
                            <button
                                type="submit"
                                className="mt-8 w-1/2 bg-red-500 text-white py-2 rounded font-semibold hover:bg-red-600 transition text-center"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full md:w-1/3">
                    <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 sticky top-20 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h3>
                            <div className="divide-y divide-gray-200 text-sm max-h-[50vh] overflow-y-auto mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="py-3 flex justify-between text-gray-700">
                                        <span>
                                            {item.productName} × {item.quantity}
                                        </span>
                                        <span>${(item.newPrice * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pt-6 text-sm space-y-3 text-gray-800">
                                <div className="flex justify-between">
                                    <span>Subtotal:</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-4 mt-4">
                                    <span>Total:</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="font-semibold mb-3 text-gray-800">Payment Method</h4>
                                <select
                                    name="paymentMethod"
                                    value={formState.paymentMethod}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                >
                                    <option value="cod">Cash on Delivery</option>
                                    <option value="card">Credit / Debit Card</option>
                                    <option value="bkash">bKash / Nagad</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
