import React, { useState } from "react";
import { motion } from "framer-motion";
import Coco from "./assets/coco.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("🌴 Welcome back to CocoMart!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-500 px-4">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Left Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex items-center justify-center bg-green-100"
        >
          <img
            src={Coco}
            alt="Coconut Drink"
            className="w-3/4 drop-shadow-lg"
          />
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
            Welcome Back 🌴
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Login to continue shopping fresh coconut products
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="coco@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="••••••••"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
            >
              Login
            </motion.button>
          </form>

          <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
            <a href="/forgot-password" className="hover:text-green-600">
              Forgot Password?
            </a>
            <a href="/register" className="hover:text-green-600">
              Create Account
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
