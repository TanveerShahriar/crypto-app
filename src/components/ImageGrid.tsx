import Image from 'next/image';
import "@/styles/imagegrid.css"

const ImageGrid = () => {
  const images = [
    "/images/Binance.png",
    "/images/Solana.png", 
    "/images/Fantom.png", 
    "/images/Avalanche.png",
    "/images/Cosmos_Atom.png", 
    "/images/Polygon.png", 
    "/images/Clover.png",
    "/images/Polkadot.png", 
    "/images/Near_Protocol.png",
    "/images/Chainlink.png",
    "/images/Hedera.png"
  ];

  return (
    <section className="relative px-16">
      <div className="ml-145 mt-40 absolute inset-0 flex justify-center items-center z-0 glowing-container">
        <div
          className="glowing-btn"
        ></div>
      </div>

      <div className="grid grid-cols-6 gap-4 relative z-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '34px',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(40px)', 
            }}
          >
            <div className="relative z-10 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="intrinsic"
                width={72}
                height={72}
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;