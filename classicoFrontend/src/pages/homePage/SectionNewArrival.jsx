import React from 'react';
import perfume from '../../assets/images/newarrival/perfume.svg';
import playstation from '../../assets/images/newarrival/playstation.svg';
import speaker3 from '../../assets/images/newarrival/speaker3.png';
import women from '../../assets/images/newarrival/women.jpg';
import { Link } from "react-router-dom";

const SectionNewArrival = () => {
    return (
        <div className="max-w-[1170px] mx-auto my-[100px] sm:px-6 lg:px-0">

            {/* Section Heading */}
            <div className="mb-7 flex items-center gap-3">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Featured</h1>
            </div>
            <h1 className="text-4xl font-semibold mb-10 tracking-wide">New Arrival</h1>

            {/* Grid Layout */}
            <div className="flex flex-col lg:flex-row gap-5 items-end">

                {/* Left large card */}
                <div className="relative w-full lg:w-[570px] h-[600px] rounded overflow-hidden bg-black shrink-0 flex items-end justify-center">
                    <img
                        src={playstation}
                        alt="PlayStation 5"
                        className="w-[511px] h-[511px] object-cover"
                    />
                    <div className="absolute bottom-5 left-5 text-white">
                        <h2 className="text-2xl font-bold py-4">PlayStation 5</h2>
                        <p className="text-sm mb-2 py-2">Black and White version of the PS5 <br /> coming out on sale.</p>
                        <Link
                            to="/product"
                            className="underline"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-8 flex-1 w-full">

                    {/* Women’s Collection */}
                    <div className="relative w-full h-[284px] rounded overflow-hidden bg-black flex items-center justify-end">
                        <img
                            src={women}
                            alt="Women Collection"
                            className="w-[432px] h-[286px] object-cover"
                        />
                        <div className="absolute bottom-5 left-5 text-white">
                            <h2 className="text-xl font-bold py-2">Women’s Collections</h2>
                            <p className="text-sm mb-2 py-2">Featured woman collections that <br /> give you another vibe.</p>
                            <Link
                                to="/product"
                                className="underline"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    {/* Speakers & Perfume */}
                    <div className="flex flex-col sm:flex-row gap-10">

                        {/* Speakers */}
                        <div className="relative w-full sm:w-[270px] h-[284px] rounded overflow-hidden bg-black flex items-center justify-center">
                            <img
                                src={speaker3}
                                alt="Speakers"
                                className="w-[190px] h-[221px] object-cover"
                            />
                            <div className="absolute bottom-5 left-5 text-white">
                                <h2 className="text-lg font-bold">Speakers</h2>
                                <p className="text-sm mb-2">Amazon wireless speakers</p>
                                <Link
                                    to="/product"
                                    className="underline"
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>

                        {/* Perfume */}
                        <div className="relative w-full sm:w-[270px] h-[284px] rounded overflow-hidden bg-black flex items-center justify-center">
                            <img
                                src={perfume}
                                alt="Perfume"
                                className="w-[201px] h-[203px] object-cover"
                            />
                            <div className="absolute bottom-5 left-5 text-white">
                                <h2 className="text-lg font-bold">Perfume</h2>
                                <p className="text-sm mb-2">GUCCI INTENSE OUD EDP</p>
                                <Link
                                    to="/product"
                                    className="underline"
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionNewArrival;
