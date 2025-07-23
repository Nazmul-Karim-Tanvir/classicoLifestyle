import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white py-10 px-4 md:px-0 min-h-screen">
            {/* Breadcrumb */}
            <div className="max-w-[1170px] mx-auto text-sm text-gray-500 mb-6">
                <Link to="/" className="hover:underline">Home</Link> / <span>Contact</span>
            </div>

            {/* Contact Section */}
            <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row gap-6 mt-6">
                {/* Left Side - 30% */}
                <div className="w-full md:basis-[30%] flex flex-col gap-8 bg-white p-6 rounded-md shadow-sm">
                    {/* Call Us */}
                    <div className="flex items-start gap-4">
                        <div className="bg-red-100 text-red-500 p-3 rounded-full">
                            <PhoneCall className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Call To Us</h3>
                            <p className="text-gray-600 mt-1">We are available 24/7, 7 days a week.</p>
                            <p className="text-gray-800 font-medium mt-1">Phone: +8801611112222</p>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    {/* Write To Us */}
                    <div className="flex items-start gap-4">
                        <div className="bg-red-100 text-red-500 p-3 rounded-full">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Write To US</h3>
                            <p className="text-gray-600 mt-1">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="text-gray-800 font-medium mt-1">Emails: customer@exclusive.com</p>
                            <p className="text-gray-800 font-medium">Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - 70% */}
                <div className="w-full md:basis-[70%] bg-white p-6 rounded-md shadow-sm">
                    <form className="flex flex-col gap-4">
                        {/* 3 Inputs in a row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name *"
                                className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none bg-[#F5F5F5]"
                            />
                            <input
                                type="email"
                                placeholder="Your Email *"
                                className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none bg-[#F5F5F5]"
                            />
                            <input
                                type="text"
                                placeholder="Your Phone *"
                                className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none bg-[#F5F5F5]"
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            rows="6"
                            placeholder="Your Massage"
                            className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none resize-none bg-[#F5F5F5]"
                        ></textarea>

                        {/* Submit */}
                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-red-500 text-white font-semibold px-6 py-2 my-4 rounded hover:bg-red-600 transition"
                            >
                                Send Massage
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
