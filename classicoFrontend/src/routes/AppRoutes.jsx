// src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom';

import Header from '../layout/Header';
import Body from '../layout/Body';
import Footer from '../layout/Footer';

import HomePage from '../pages/homePage/HomePage.jsx';
import About from '../pages/about/About.jsx';
import Contact from '../pages/contact/Contact.jsx';
import SignUp from '../pages/signUp/SignUp.jsx';
import WishList from '../pages/wishList/WishList.jsx';
import Cart from '../pages/cart/Cart.jsx';
import Product from '../pages/product/Product.jsx';
import ProductDetails from '../pages/productDetailspage/ProductDetails.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOut from '../pages/checkOut/CheckOut.jsx';
import ProfilePage from '../pages/profile/ProfilePage.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Header />
                        <Body />
                        <Footer />
                        <ToastContainer
                            position="top-right"
                            autoClose={1200}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </>
                }
            >
                <Route index element={<HomePage />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="wishlist" element={<WishList />} />
                <Route path="cart" element={<Cart />} />
                <Route path="product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="checkout" element={<CheckOut />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="profilepage" element={<ProfilePage />} />
                <Route
                    path="*"
                    element={
                        <div className="text-center py-10 text-2xl">
                            404 - Page Not Found
                        </div>
                    }
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
