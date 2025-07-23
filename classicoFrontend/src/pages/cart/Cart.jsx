import React from 'react';
import { ShoppingCart } from 'lucide-react';
import useCartStore from '../../store/cartStore';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
    const navigate = useNavigate();
    const cartItems = useCartStore(state => state.cartItems);
    const addToCart = useCartStore(state => state.addToCart);
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
    const removeItem = useCartStore(state => state.removeItem);
    const getTotalPrice = useCartStore(state => state.getTotalPrice);

    const subtotal = getTotalPrice();

    return (
        <div className="max-w-[1170px] mx-auto py-12">
            <div className="max-w-[1170px] mx-auto text-sm text-gray-500 mb-6 px-4 md:px-0 pb-6">
                <Link to="/" className="hover:underline">Home</Link> / <span>Cart</span>
            </div>
            <h2 className="text-xl font-semibold mb-8 text-center sm:text-left">Shopping Cart</h2>

            {/* Empty Cart View */}
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center text-gray-500 py-20">
                    <ShoppingCart size={80} className="mb-6 opacity-40" />
                    <p className="text-xl font-semibold mb-2">Your cart is empty</p>
                    <p className="max-w-sm text-gray-400">
                        Looks like you haven&apos;t added anything yet. Start shopping and your cart will show up here.
                    </p>
                    <button onClick={() => navigate("/product")} className="mt-6 border border-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition">
                        Return To Shop
                    </button>
                </div>
            ) : (
                <>
                    {/* Desktop Table */}
                    <div className="hidden sm:block border rounded-lg shadow-sm overflow-hidden">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100 text-left text-sm">
                                <tr>
                                    <th className="p-4 font-medium">Product</th>
                                    <th className="p-4 font-medium">Price</th>
                                    <th className="p-4 font-medium">Quantity</th>
                                    <th className="p-4 font-medium">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="bg-white">
                                        <td className="p-4 flex items-center gap-4">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-600 hover:text-red-800 p-1"
                                            >
                                                <AiOutlineClose size={20} />
                                            </button>
                                            <img
                                                src={item.image}
                                                alt={item.productName}
                                                className="w-14 h-14 object-contain"
                                            />
                                            <span className="font-semibold">{item.productName}</span>
                                        </td>
                                        <td className="p-4">${item.newPrice.toFixed(2)}</td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => addToCart({ ...item, quantity: 1 })}
                                                    className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            ${(item.newPrice * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile View - Single Border Container */}
                    <div className="sm:hidden border rounded-lg divide-y divide-gray-200 shadow-sm overflow-hidden">
                        {cartItems.map((item) => (
                            <div key={item.id} className="p-4 flex flex-col gap-3 bg-white">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.productName}
                                            className="w-16 h-16 object-contain"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{item.productName}</h4>
                                            <p className="text-sm text-gray-600">${item.newPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700 text-lg font-bold"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Quantity</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => addToCart({ ...item, quantity: 1 })}
                                            className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right font-semibold">
                                    Subtotal: ${(item.newPrice * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Coupon and Total */}
                    <div className="flex flex-col lg:flex-row justify-between items-start mt-12 gap-10">
                        {/* Coupon */}
                        <div className="flex gap-4 w-full lg:w-1/2">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="border px-4 py-2 w-full rounded"
                            />
                            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                                Apply Coupon
                            </button>
                        </div>

                        {/* Cart Total */}
                        <div className="border w-full lg:w-[350px] p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Cart Total</h3>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                                <span>Total:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full mt-6 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
