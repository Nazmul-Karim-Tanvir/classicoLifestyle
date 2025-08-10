import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddProduct from './pages/addProduct/AddProduct.jsx';
import Customers from './pages/customers/Customers.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import OrdersList from './pages/ordersList/OrdersList.jsx';
import ProductList from './pages/productList/ProductList.jsx';

import Layout from './layout/Layout.jsx';
import LoginPopup from './components/auth/LoginPopup.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="order-list" element={<OrdersList />} />
          <Route path="customer-info" element={<Customers />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>

        {/* Login Route Outside Layout */}
        <Route path="/signin" element={<LoginPopup setShowLogin={() => { }} />} />
      </Routes>
    </Router>
  );
}

export default App;
