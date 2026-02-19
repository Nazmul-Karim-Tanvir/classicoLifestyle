// src/layout/body.jsx

import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <main className="max-w-[90%] mx-auto py-6">
            <Outlet />
        </main>
    );
};

export default Body;