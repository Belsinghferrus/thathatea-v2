import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "../../sections/Franchise/Hero";
import WhyPartner from "../../sections/Franchise/WhyPartner";
import BrewSuccess from "../../sections/Franchise/BrewSuccess";
import FeaturedOutlets from "../../sections/Franchise/FeaturedOutlets";
import FranchiseEnquiry from "../../sections/Franchise/FranchiseEnquiry";
import FAQ from "../../sections/Franchise/FAQ";

const Franchise = () => {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-x-clip">
        <Hero />
        <WhyPartner />
        <BrewSuccess />
        {/* <FeaturedOutlets /> */}
        <FranchiseEnquiry />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Franchise;
