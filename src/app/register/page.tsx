"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

const Register = () => {
  const [activeTab, setActiveTab] = useState("Sign Up"); // "Sign Up" or "Login"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleTab = () => {
    setActiveTab(activeTab === "Sign Up" ? "Login" : "Sign Up");
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center bg-[url('/images/Register_BG.png')] bg-cover bg-center">
      <div className="p-10 rounded-lg w-[500px]">
        <div className="text-center text-white mb-6">
          <div className="ml-8 flex justify-center">
            <Image 
                aria-hidden
                src="/images/Logo.png"
                alt="Logo icon"
                width={36}
                height={50}
              />
          </div>
          <h1 className="text-4xl font-semibold mb-2">
            {activeTab === "Sign Up" ? "Create an account" : "Log in to your account"}
          </h1>
          <p className="text-gray-400">
            {activeTab === "Sign Up"
              ? "Start your 30-day free trial."
              : "Welcome back! Please enter your details."}
          </p>
        </div>

        {/* Toggle between Sign Up and Login */}
        <div
          className="relative cursor-pointer w-full bg-[#0C0E12] border border-[22262F] h-[40px] rounded-full mb-4"
          onClick={toggleTab}
        >
          <div
            className={`absolute w-1/2 h-full bg-[#373A41] rounded-full transition-all duration-300 ${
              activeTab === "Login" ? "translate-x-[100%]" : ""
            }`}
          ></div>

          <span
            className={`absolute font-normal text-lg left-4 top-1/2 transform -translate-y-1/2 font-semibold ${
              activeTab === "Login" ? "text-[94979C]" : "text-[CECFD2]"
            }`}
          >
            Sign Up
          </span>

          <span
            className={`absolute font-normal text-lg right-4 top-1/2 transform -translate-y-1/2 font-semibold ${
              activeTab === "Sign Up" ? "text-[94979C]" : "text-[CECFD2]"
            }`}
          >
            Log In
          </span>
        </div>

        {/* Sign Up Form */}
        {activeTab === "Sign Up" && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-transparent border rounded-lg text-white mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-transparent border rounded-lg text-white mb-4"
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 bg-transparent border rounded-lg text-white mb-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 bg-transparent border rounded-lg text-white mb-4"
            />
            <button type="submit" className="w-full p-3 bg-[#FF5722] rounded-md text-white">
              Get Started
            </button>
          </form>
        )}

        {/* Log In Form */}
        {activeTab === "Login" && (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-transparent border-b text-white mb-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 bg-transparent border-b text-white mb-4"
            />
            <div className="flex justify-between items-center">
              <label className="text-white">
                <input type="checkbox" className="mr-2" />
                Remember for 30 days
              </label>
              <a href="#" className="text-[#FF5722]">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="w-full p-3 bg-[#FF5722] rounded-md text-white mt-4">
              Sign in
            </button>
          </form>
        )}

        <div className="text-center mt-4">
          <p className="text-white">
            {activeTab === "Sign Up"
              ? "Already have an account? "
              : "Don't have an account? "}
            <a href={activeTab === "Sign Up" ? "/login" : "/signup"} className="text-[#FF5722]">
              {activeTab === "Sign Up" ? "Log in" : "Sign up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;