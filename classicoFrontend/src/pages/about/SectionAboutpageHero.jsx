import React from 'react'
import aboutimage from '../../assets/images/aboutImages/aboutpageimage1.png';
import { Link } from 'react-router-dom';

const SectionAboutpageHero = () => {
    return (
        <div className="bg-white py-10 relative overflow-hidden gap-5 mb-28">
            <div className="max-w-[1170px] mx-auto text-sm text-gray-500 mb-6 px-4 md:px-0 pb-6">
                <Link to="/" className="hover:underline">Home</Link> / <span>About</span>
            </div>

            <div className="flex flex-col md:flex-row items-center max-w-[1170px] mx-auto px-4 md:px-0 gap-6">
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-6">Our Story</h1>
                    <p className="text-gray-700 mb-4">
                        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.
                        Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands
                        and serves 3 million customers across the region.
                    </p>
                    <p className="text-gray-700">
                        Exclusive has more than 1 Million products to offer, growing very fast.
                        Exclusive offers a diverse assortment in categories ranging from consumer.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src={aboutimage}
                        alt="About Us"
                        className="w-full h-auto object-cover rounded-md shadow-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default SectionAboutpageHero
