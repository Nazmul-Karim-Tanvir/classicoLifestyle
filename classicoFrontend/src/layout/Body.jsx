// src/layout/body.jsx

import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <main className="max-w-[1270px] mx-auto px-2 py-6 bg-gradient-to-b from-purple-50 via-white to-purple-100">
            <Outlet />
        </main>
    );
};

export default Body;