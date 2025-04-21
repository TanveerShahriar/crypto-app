"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const Register = () => {
  const [activeTab, setActiveTab] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    loginemail: "",
    loginpass: "",
  });

  const router = useRouter();
  const [passwordValidLength, setPasswordValidLength] = useState(false);
  const [passwordValidSpecial, setPasswordValidSpecial] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password: string) => {
    const isValidLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    setPasswordValidLength(isValidLength);
    setPasswordValidSpecial(hasSpecialChar);

    return isValidLength && hasSpecialChar;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    if (activeTab === "Sign Up") {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        router.push("/securitycode");
      } else {
        alert(data.message || "Error creating user");
      }
    }
    else {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("authToken", data.token); 
        router.push("/dashboard"); 
      } else {
        alert(data.message || "An error occurred");
      }
    }
  };

  const toggleTab = () => {
    setActiveTab(activeTab === "Sign Up" ? "Login" : "Sign Up");
  };

  const checkFormComplete = () => {
    const { name, email, phone, password } = formData;
    const formIsComplete = name && email && phone && passwordValidLength && passwordValidSpecial;
    setIsFormComplete(formIsComplete);
  };

  useEffect(() => {
    checkFormComplete();
  }, [formData, passwordValidLength, passwordValidSpecial]);

  return (
    <div className="min-h-screen bg-black pt-30 flex justify-center items-center bg-[url('/images/Register_BG.png')] bg-cover bg-center">
      <div className="p-10 rounded-lg w-[500px]">
        <div className="text-center text-white mb-6">
          <div className="ml-8 mb-8 flex justify-center">
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
            {activeTab === "Sign Up" ? "Start your 30-day free trial." : "Welcome back! Please enter your details."}
          </p>
        </div>

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

        {activeTab === "Sign Up" && (
          <form onSubmit={handleSubmit}>
            <label className="text-white">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => {
                handleInputChange(e);
                checkFormComplete();
              }}
              className="w-full p-3 bg-transparent border rounded-lg text-white mb-4"
            />

            <label className="text-white">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => {
                handleInputChange(e);
                checkFormComplete();
              }}
              className="w-full p-3 bg-transparent border rounded-lg text-white mb-4"
            />

            <label className="text-white">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => {
                handleInputChange(e);
                checkFormComplete();
              }}
              className="w-full p-3 bg-transparent border rounded-lg text-white mb-4"
            />

            <label className="text-white">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => {
                handleInputChange(e);
                validatePassword(e.target.value);
                checkFormComplete();
              }}
              className="w-full p-3 bg-transparent border rounded-lg text-white mb-4"
            />

            <div className="text-white mb-4">
              <div className="flex items-center">
                <span className={`mr-2 ${passwordValidLength ? "text-orange-500" : "text-gray-400"}`}>
                  {passwordValidLength ? "✔" : "✘"}
                </span>
                <span>Must be at least 8 characters</span>
              </div>
              <div className="flex items-center">
                <span className={`mr-2 ${passwordValidSpecial ? "text-orange-500" : "text-gray-400"}`}>
                  {passwordValidSpecial ? "✔" : "✘"}
                </span>
                <span>Must contain one special character</span>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full p-3 rounded-md text-white ${isFormComplete ? "bg-[#FF5722]" : "bg-[#7E7E7E]"}`}
              disabled={!isFormComplete}
            >
              Get Started
            </button>
          </form>
        )}

        {activeTab === "Login" && (
          <form onSubmit={handleSubmit}>
            <label className="text-white">Email</label>
            <input
              type="email"
              name="loginemail"
              placeholder="Enter your email"
              value={formData.loginemail}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-transparent border text-white mb-4"
            />

            <label className="text-white">Password</label>
            <input
              type="password"
              name="loginpass"
              placeholder="Enter your password"
              value={formData.loginpass}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-transparent border text-white mb-4"
            />
            
            <div className="flex justify-between items-center text-white mb-4">
              <label className="flex items-center">
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