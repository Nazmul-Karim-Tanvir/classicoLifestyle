import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import signupImage from "/logoclassico1.jpg";

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const redirectTo = params.get("redirectTo") || "/";

    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!isLogin && !formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 8) newErrors.password = "At least 8 characters";
        if (!isLogin) {
            if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm your password";
            else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (isLogin) {
            const user = storedUsers.find(
                (u) => u.email.toLowerCase() === formData.email.toLowerCase()
            );

            if (!user) {
                const confirmSignup = window.confirm("User not found. Would you like to sign up?");
                if (confirmSignup) setIsLogin(false);
                return;
            }

            if (user.password !== formData.password) {
                alert("Incorrect password.");
                return;
            }

            alert(`Welcome back, ${user.name}!`);
            localStorage.setItem("loggedInUser", user.email);
            navigate(redirectTo, { replace: true });
        } else {
            const userExists = storedUsers.some(
                (u) => u.email.toLowerCase() === formData.email.toLowerCase()
            );

            if (userExists) {
                alert("User already exists. Please login.");
                setIsLogin(true);
                return;
            }

            storedUsers.push({
                name: formData.name.trim(),
                email: formData.email.trim().toLowerCase(),
                password: formData.password,
            });

            localStorage.setItem("users", JSON.stringify(storedUsers));
            localStorage.setItem("loggedInUser", formData.email.trim().toLowerCase());
            alert("Signup successful! You are now logged in.");
            navigate(redirectTo, { replace: true });
        }

        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    };

    const RedStar = () => <span className="text-red-600">*</span>;

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-8 bg-purple-50">
            <div className="w-full max-w-[90%] shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-52 md:h-auto">
                    <img
                        src={signupImage}
                        alt="Signup"
                        className="absolute inset-0 w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl"
                    />
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 bg-white/80 backdrop-blur-lg">
                    <h2 className="text-3xl font-bold text-purple-800 mb-2 text-center md:text-left">
                        {isLogin ? "Welcome Back!" : "Get Started"}
                    </h2>
                    <p className="text-sm text-gray-700 mb-6 text-center md:text-left">
                        {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
                        <button
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
                                setErrors({});
                            }}
                            className="text-purple-800 hover:underline font-semibold"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>

                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                        {!isLogin && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                                    Full Name <RedStar />
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className={`w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-800"}`}
                                />
                                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                Email <RedStar />
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-800"}`}
                            />
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                Password <RedStar />
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className={`w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-800"}`}
                            />
                            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {!isLogin && (
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
                                    Confirm Password <RedStar />
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    className={`w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-800"}`}
                                />
                                {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>}
                            </div>
                        )}

                        {isLogin && (
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="text-sm text-purple-800 hover:underline font-medium"
                                    onClick={() => alert("Password reset coming soon!")}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-purple-800 hover:bg-purple-900 text-white py-2.5 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;