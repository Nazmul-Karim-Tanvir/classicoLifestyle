import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-purple-50 px-4">
            <div className="text-center bg-white shadow-lg p-10 rounded-2xl max-w-md w-full">
                <div className="flex justify-center mb-6 text-purple-600">
                    <AlertTriangle size={48} />
                </div>
                <h1 className="text-3xl font-semibold mb-2">Something went wrong</h1>
                <p className="text-gray-600 mb-6">
                    The page you’re looking for doesn’t exist or an error occurred.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default Error;