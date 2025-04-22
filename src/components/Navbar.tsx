"use client";

import Image from "next/image";

const menuItems = [
  { label: "Home", icon: "/images/Home.png" },
  { label: "Market", icon: "/images/Market.png" },
  { label: "Withdraw", icon: "/images/Wallet.png" },
  { label: "Asset", icon: "/images/Asset.png" },
];

const NavBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 ">
        <div className="bg-[url('/images/Ellipse.png')] bg-cover bg-center"
        style={{
            width: '1600px',  
            height: '1600px', 
            position: 'absolute',  
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
          }}>

        </div>
        <div className="flex gap-4 px-4 py-2 backdrop-blur-xs bg-white/10 rounded-full shadow-lg">
        {menuItems.map((item) => (
            <button
            key={item.label}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-200 rounded-full text-black text-sm hover:bg-zinc-300 transition"
            >
            <Image src={item.icon} alt={item.label} width={16} height={16} />
            <span>{item.label}</span>
            </button>
        ))}
        </div>
    </div>
  );
};

export default NavBar;