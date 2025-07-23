// src/layout/body.jsx

import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <main className="max-w-[95%] mx-auto px-2 py-6">
            <Outlet />
        </main>
    );
};

export default Body;