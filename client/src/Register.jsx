import React, { useState } from "react";
import { motion } from "framer-motion";
import coco from "./assets/coco.png";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    alert("🌴 Welcome to CocoMart! Your account has been created.");
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
            src={coco}
            alt="Coconut"
            className="w-3/4 drop-shadow-lg"
          />
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
            Join with<span className="text-emerald-600">CocoMart</span>
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Fresh coconut products delivered to your door 🍃
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="John Coconut"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
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
              transition={{ delay: 0.4 }}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
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
              Create Account
            </motion.button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Login
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
