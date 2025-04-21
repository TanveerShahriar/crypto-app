const Hero = () => {
    return (
      <section className="text-white py-20 px-6 text-center">
        <h1 className="text-[80px] font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#5200FF] to-[#FF3C6A]">
          Swift Blockchain Revolution
        </h1>
        <p className="text-3xl max-w-4xl mx-auto">
          Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.
        </p>
        <div className="flex justify-center space-x-4 mt-16">
            <button className="w-[200px] h-[66px] text-2xl bg-[rgba(126,126,126,0.29)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-[12px] backdrop-blur-[20px] hover:bg-[rgba(126,126,126,0.4)] focus:outline-none focus:ring-2 focus:ring-gray-400">
                Sign Up
            </button>

            <button className="w-[200px] h-[66px] text-2xl rounded-[12px] px-8 py-3 bg-white text-gray-600 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
                Login
            </button>
        </div>
      </section>
    );
  };
  
  export default Hero;  