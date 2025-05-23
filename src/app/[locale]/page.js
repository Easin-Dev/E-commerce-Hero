import Banner from "@/components/Banner";
import CardSlider from "@/components/CardSlider";
import Categorys from "@/components/Categorys";
import Category from "@/components/CategoryText";
import CoustomBtn from "@/components/CoustomBtn";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import GadgetCard from "@/components/GadgetCard";
import Navbar from "@/components/Navbar";
import OfferCard from "@/components/OfferCard";
import OfferCountdownTimer from "@/components/OfferCountdownTimer";
import OurProducts from "@/components/OurProducts";
import Services from "@/components/Services";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Home() {
  return (
    <div className={`${ubuntu.className}`}>
      {/* banner */}
      <div className="max-w-[1400px]  mx-auto">
        <Banner />

        {/* today's products gategory */}
        <div className="mt-32">
          <Category categoryText={"Today's"} />
          <OfferCountdownTimer />
          <CardSlider />
          <CoustomBtn />
        </div>

        {/* divider */}
        <div className="divider mt-10"></div>

        {/* categorys */}
        <div className="mt-20">
          <Category categoryText={"categorys"} />
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-black mt-2">
            Browse By Category
          </h1>
          <Categorys />
          <div className="divider mt-16"></div>
        </div>

        {/* best selling products */}
        <div className="mt-20">
          <Category categoryText={"This month"} />
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-black mt-2">
            Best Selling Products
          </h1>
          <CardSlider />
          <CoustomBtn />
        </div>

        {/* Gadget card */}
        <GadgetCard />

        {/* our products */}
        <Category categoryText={"our products"} />
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-black mt-2">
          Explore Our products
        </h1>
        <OurProducts />
        <CoustomBtn />

        {/* New Arrival */}
        <Category categoryText={"Featured"} />
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-black mt-2">
          New Arrival
        </h1>
        <Featured />

        {/* services sections */}
        <Services />
      </div>
    </div>
  );
}
