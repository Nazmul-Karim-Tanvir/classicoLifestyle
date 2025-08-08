import { Headset, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';

const Services = () => {
    return (
        <div className='px-4 my-[100px] text-center'>
            <h2 className="text-3xl font-semibold text-purple-900 mb-12 font-serif">Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                <div className='flex flex-col items-center'>
                    <div className="w-20 h-20 rounded-full border-8 border-purple-200 flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <Truck className="text-white" size={40} />
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold mb-4'>FREE AND FAST DELIVERY</h1>
                    <p className='text-gray-600 mb-5'>Free delivery for all orders over 600 Taka</p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className="w-20 h-20 rounded-full border-8 border-purple-200  flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <Headset className="text-white" size={40} />
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold mb-4'>24/7 CUSTOMER SERVICE</h1>
                    <p className='text-gray-600 mb-5'>Friendly 24/7 customer support</p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className="w-20 h-20 rounded-full border-8 border-purple-200  flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <ShieldCheck className="text-white" size={40} />
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold mb-4'>MONEY BACK GUARANTEE</h1>
                    <p className='text-gray-600 mb-5'>We return money within 30 days</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
