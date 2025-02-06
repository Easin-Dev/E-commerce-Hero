import Banner from "@/components/Banner";
import CardSlider from "@/components/CardSlider";
import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import OfferCard from "@/components/OfferCard";
import OfferCountdownTimer from "@/components/OfferCountdownTimer";
// import OfferTimeCard from "@/components/OfferTimeCard";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* offer card */}
      <div>
        <OfferCard />
      </div>
      {/* nabvar */}
      <div>
        <Navbar />
      </div>

      {/* banner */}
      <div className="max-w-[1400px]  mx-auto">
        <Banner />

        {/* today's products gategory */}
        <div className="mt-32">
          <Category categoryText={"Today's"} />
          <OfferCountdownTimer />
          <CardSlider />
        </div>
      </div>

      {/* footers */}
      <div>
        <h1>this is footer</h1>
      </div>
    </div>
  );
}
