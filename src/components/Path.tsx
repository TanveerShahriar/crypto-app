import Image from 'next/image';

const Path = () => {
  const icons = [
    { src: "/images/Recharge.png", label: "Recharge" },
    { src: "/images/Withdraw.png", label: "Withdraw" },
    { src: "/images/Transfer.png", label: "Transfer" },
    { src: "/images/Transfer.png", label: "VIP Level" },
    { src: "/images/Recharge.png", label: "Wallet" },
    { src: "/images/Withdraw.png", label: "Help Center" },
    { src: "/images/Transfer.png", label: "Customer Service" },
    { src: "/images/Transfer.png", label: "Buy Coins" }
  ];

  return (
    <section className="py-16 px-16">
        <h1 className='text-center font-extrabold text-7xl mb-16'>Earn while walking</h1>
      <div className="flex flex-wrap justify-center gap-20 grid grid-cols-4">
        {icons.map((icon, index) => (
          <div key={index} className="relative flex flex-col justify-center items-center">
            <div className="w-[200px] h-[200px] bg-[#4431BA40] shadow-[0px_0px_20px_0px_#00000066] rounded-full flex justify-center items-center">
                <div className="w-[150px] h-[150px] bg-[#4431BA4D] shadow-[0px_0px_20px_0px_#00000066] rounded-full flex justify-center items-center">
                    <div
                    className="flex justify-center items-center rounded-full bg-[#4431BA66] w-[100px] h-[100px]"
                    style={{
                        backdropFilter: 'blur(10px)', 
                    }}
                    >
                    <Image
                        src={icon.src}
                        alt={icon.label}
                        width={48}
                        height={48}
                        objectFit="cover"
                    />
                    </div>
                </div>
            </div>

            {(index + 1) % 4 != 0 && (
              <div className="absolute top-1/2 left-52 w-[85px] h-0 border-t-4 border-dashed border-white/50"></div>
            )}

            <p className="mt-2 text-center text-white font-bold text-2xl">{icon.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Path;
