"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const SecurityToken = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const token = localStorage.getItem("authToken");
    
    if (!token) {
      console.log("User not authenticated.");
      return;
    }

    const data = {
      securityCode: value,
      token: token
    };

    console.log(data);
    
    const response = await fetch("/api/auth/security-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log("Security Code Saved Successfully", result);
        router.push("/dashboard"); 
      } else {
        console.error("Error:", result.message);
      }

  };

  return (
    <div className="min-h-screen bg-black pt-30 flex justify-center items-center bg-[url('/images/Register_BG.png')] bg-cover bg-center">
      <div className="p-10 rounded-lg w-[400px] flex flex-col justify-between h-full">
        <div className="text-center text-white mb-6">
          <div className="ml-8 flex justify-center">
            <span className="text-4xl">🔒</span>
          </div>
          <h1 className="text-3xl font-semibold mb-2">Add security code</h1>
          <p className="text-gray-400">
            Please add a security code to use further for any withdrawals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col justify-between flex-grow mb-4">
          <div className="text-center flex justify-center gap-4 mb-4">
            <InputOTP maxLength={4} value={value} onChange={(value) => setValue(value)}>
              <InputOTPGroup>
                <InputOTPSlot
                  index={0}
                  className="w-16 h-16 text-2xl font-bold text-white border-2 border-orange-500 rounded-lg text-center"
                />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot
                  index={1}
                  className="w-16 h-16 text-2xl font-bold text-white border-2 border-orange-500 rounded-lg text-center"
                />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot
                  index={2}
                  className="w-16 h-16 text-2xl font-bold text-white border-2 border-orange-500 rounded-lg text-center"
                />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot
                  index={3}
                  className="w-16 h-16 text-2xl font-bold text-white border-2 border-orange-500 rounded-lg text-center"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button
            type="submit"
            className="mt-4 w-full p-3 bg-[#FF5722] rounded-md text-white"
          >
            Save Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default SecurityToken;