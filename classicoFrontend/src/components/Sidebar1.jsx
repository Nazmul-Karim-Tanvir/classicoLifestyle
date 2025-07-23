// src/components/Sidebar1.jsx
import React, { useState } from "react";
import { X, Star } from "lucide-react";
import useSidebarStore from "../store/useSidebarStore";

const Sidebar1 = () => {
    const { isOpen, closeSidebar, reviews, rating } = useSidebarStore();
    const [selectedFilter, setSelectedFilter] = useState(null);

    if (!isOpen) return null;

    const handleFilter = (value) => {
        setSelectedFilter(value === selectedFilter ? null : value);
    };

    const filteredReviews = selectedFilter
        ? reviews.filter((r) => Math.round(r.rating) === selectedFilter)
        : reviews;

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={closeSidebar}></div>

            <aside className="fixed right-0 top-0 h-full w-[360px] bg-white shadow-lg p-4 z-50 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Reviews</h2>
                    <button onClick={closeSidebar} className="p-1 rounded hover:bg-gray-200">
                        <X size={24} />
                    </button>
                </div>

                {/* Overall Rating */}
                <div className="mb-4 flex items-center gap-2">
                    <span className="font-semibold">Rating: </span>
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={20}
                            className={i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}
                        />
                    ))}
                    <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
                </div>

                {/* Rating Filter */}
                <div className="flex gap-2 mb-4 flex-wrap">
                    {[5, 4, 3, 2, 1].map((val) => (
                        <button
                            key={val}
                            onClick={() => handleFilter(val)}
                            className={`flex items-center gap-1 border px-3 py-1 rounded text-sm ${selectedFilter === val
                                ? "bg-yellow-100 border-yellow-400 text-yellow-700 font-semibold"
                                : "border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {val} <Star size={14} />
                        </button>
                    ))}
                    {selectedFilter && (
                        <button
                            onClick={() => setSelectedFilter(null)}
                            className="text-sm underline text-blue-600 py-2"
                        >
                            Clear Filter
                        </button>
                    )}
                </div>

                {/* Review List */}
                <div className="space-y-4">
                    {filteredReviews.length === 0 && <p>No reviews match this filter.</p>}
                    {filteredReviews.map(({ user, comment, rating }, idx) => (
                        <div key={idx} className="border-b border-gray-300 pb-2">
                            <div className="flex items-center gap-1 mb-1">
                                <span className="font-semibold">{user}</span>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < rating ? "text-yellow-400" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 text-sm">{comment}</p>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar1;
