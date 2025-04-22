"use client";"use client";

import { useState } from "react";

const Dashboard = () => {
  const [vipTransfer, setVipTransfer] = useState(false);
  const [amount, setAmount] = useState("");
  const [username, setUsername] = useState("");
  const [memo, setMemo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transaction Data:", { amount, username, memo, vipTransfer });
    // Submit to the backend here for actual functionality
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center p-6 pt-50">
      {/* Asset Section */}
      <div className="bg-[#1F1F1F] w-full max-w-xl p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4">My Asset</h2>
        <div className="flex justify-between items-center">
          <span className="text-xl">50,000</span>
          <span className="text-lg">USDT</span>
        </div>
        <div className="mt-4 text-sm text-gray-400">Available Balance: VIP 3</div>
      </div>

      {/* Direct Withdraw Section */}
      <div className="bg-[#1F1F1F] w-full max-w-xl p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4">Direct Withdraw</h2>
        <form onSubmit={handleSubmit}>
          {/* VIP Transfer Toggle Slider */}
          <div className="flex items-center justify-between mb-4">
            <label className="text-lg">VIP Transfer</label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={vipTransfer}
                onChange={() => setVipTransfer(!vipTransfer)}
                className="toggle-checkbox hidden"
              />
              <span className="toggle-label block w-14 h-8 bg-[#ccc] rounded-full"></span>
            </label>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">Amount</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Recipient VIP Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg"
              placeholder="Enter recipient username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Memo</label>
            <input
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg"
              placeholder="Write a memo"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-[#FF5722] px-6 py-3 text-white rounded-lg"
            >
              VIP Transfer
            </button>
            <button
              type="button"
              className="bg-[#22262F] px-6 py-3 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Transaction History Section */}
      <div className="bg-[#1F1F1F] w-full max-w-xl p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Transaction history</h2>
        <table className="w-full text-sm text-gray-400">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2 px-4 text-left">Transaction</th>
              <th className="py-2 px-4 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-4">VIP Transfer</td>
              <td className="py-2 px-4 text-green-500">+ $4.50 USDT</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-4">Withdrawal</td>
              <td className="py-2 px-4 text-red-500">- $88.00 USDT</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-4">VIP Transfer</td>
              <td className="py-2 px-4 text-green-500">+ $15.00 USDT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
