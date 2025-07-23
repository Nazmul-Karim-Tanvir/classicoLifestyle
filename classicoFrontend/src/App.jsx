import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; // adjust path if needed
import Sidebar1 from './components/Sidebar1';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Sidebar1 /> {/* Global Sidebar Mount */}
    </BrowserRouter>
  );
};

export default App;