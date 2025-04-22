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
    <div className="fixed w-[758px] bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-[url('/images/Ellipse.png')] bg-cover bg-center"
        style={{
            width: '1600px',  
            height: '1600px', 
            position: 'absolute',  
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}>

        </div>
        <div className="flex gap-10 px-20 py-2 backdrop-blur-xs bg-white/10 rounded-full shadow-lg h-[100px]">
        {menuItems.map((item) => (
            <button
            key={item.label}
            className="flex items-center gap-2 px-6 py-2 my-auto bg-zinc-200 rounded-full text-black text-sm hover:bg-zinc-300 transition h-[48px] w-[148px]"
            >
              <Image src={item.icon} alt={item.label} width={16} height={16} />
              <span className="mr-4">{item.label}</span>
            </button>
        ))}
        </div>
    </div>
  );
};

export default NavBar;