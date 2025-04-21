"use client";
import { useState } from "react";

const CryptoTable = () => {
  const trendingData = [
    { asset: "BTC/USDT PERP", name: "Bitcoin", price: "$3,352", change: "12.54%", volume: "21,252.000m", logo: "/images/BTC.png" },
    { asset: "BNB/USDT PERP", name: "Binance Coin", price: "$3,352", change: "12.54%", volume: "21,252.000m", logo: "/images/BNB.png" },
    { asset: "ETH/USDT PERP", name: "Ethereum", price: "$3,352", change: "12.54%", volume: "21,252.000m", logo: "/images/ETC.png" },
    { asset: "ATOM/USDT PERP", name: "Cosmos", price: "$3,352", change: "-0.38%", volume: "21,252.000m", logo: "/images/ATOM.png" },
  ];

  const newlyAddedData = [
    { asset: "LTC/USDT PERP", name: "Litecoin", price: "$180", change: "1.75%", volume: "12,134.000m", logo: "/images/BTC.png" },
    { asset: "XRP/USDT PERP", name: "XRP", price: "$1.45", change: "-2.10%", volume: "10,567.000m", logo: "/images/BNB.png" },
    { asset: "DOGE/USDT PERP", name: "Dogecoin", price: "$0.45", change: "3.22%", volume: "8,124.000m", logo: "/images/ETC.png" },
    { asset: "SOL/USDT PERP", name: "Solana", price: "$100", change: "5.12%", volume: "9,200.000m", logo: "/images/ATOM.png" },
  ];

  const [activeTab, setActiveTab] = useState("Trending");

  const toggleTab = () => {
    setActiveTab((prevTab) => (prevTab === "Trending" ? "Newly Added" : "Trending"));
  };

  const displayData = activeTab === "Trending" ? trendingData : newlyAddedData;

  return (
    <section className="py-8 px-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-[#C4D4E4]">Popular Cryptocurrencies</h1>

        <div className="relative flex items-center gap-6">
          <div
            className="relative cursor-pointer w-[240px] h-[40px] bg-[#ccc] rounded-full"
            onClick={toggleTab}
          >
            <div
              className={`absolute w-[140px] h-[40px] bg-[#2196F3] rounded-full transition-all duration-300 ${
                activeTab === "Newly Added" ? "translate-x-[100px]" : ""
              }`}
            ></div>

            <span
              className={`absolute font-normal text-lg left-4 top-1/2 transform -translate-y-1/2 font-semibold ${
                activeTab === "Newly Added" ? "opacity-0 text-white" : "opacity-100 text-black"
              }`}
            >
              Trending
            </span>

            <span
              className={`absolute font-normal text-lg right-4 top-1/2 transform -translate-y-1/2 font-semibold ${
                activeTab === "Trending" ? "opacity-0 text-white" : "opacity-100 text-black"
              }`}
            >
              Newly Added
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-black rounded-lg shadow-lg w-full">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-6 text-left">Asset</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Change (24h)</th>
              <th className="py-3 px-6 text-left">Volume</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((crypto, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-10 px-6 flex items-center gap-3">
                  <img src={crypto.logo} alt={crypto.name} width={50} height={50} className="rounded-full" />
                  {crypto.asset}
                </td>
                <td className="py-10 px-6">{crypto.price}</td>
                <td className={`py-10 px-6 ${crypto.change.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                  {crypto.change}
                </td>
                <td className="py-10 px-6">{crypto.volume}</td>
                <td className="py-10 px-6">
                  <button className="bg-[#7E7E7E33] px-4 py-2 rounded-full hover:bg-gray-600">Trade</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CryptoTable;
