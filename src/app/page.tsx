import CryptoTable from "@/components/CryptoTable";
import Hero from "@/components/Hero"
import ImageGrid from "@/components/ImageGrid";
import Navbar from "@/components/Navbar";
import Path from "@/components/Path";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
    bg-[url('/images/BG.png')] bg-cover bg-center w-full">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full px-65">
        <div><Hero /></div>
        <div className="py-10"><ImageGrid /></div>
        <div><Path /></div>
        <div className="w-full"><CryptoTable /></div>
        <div><Navbar /></div>
      </main>
    </div>
  );
}
