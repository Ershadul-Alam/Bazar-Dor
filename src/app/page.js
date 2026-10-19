import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import PriceDown from "@/components/PriceDown";
import PriceUp from "@/components/PriceUp";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PriceUp/>
      <PriceDown/>
      <AllProducts/>
    </div>
  );
}
