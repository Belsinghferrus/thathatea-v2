import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "../../sections/Franchise/Hero";
import WhyPartner from "../../sections/Franchise/WhyPartner";
import BrewSuccess from "../../sections/Franchise/BrewSuccess";
import FranchiseEnquiry from "../../sections/Franchise/FranchiseEnquiry";
import FAQ from "../../sections/Franchise/FAQ";
import FeaturedOutletsSection from "../../sections/Franchise/Outlets";
import FranchiseTicker from "../../sections/Franchise/FranchiseTicker";

const Franchise = () => {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-x-clip">
        <Hero />
        <WhyPartner />
        <BrewSuccess />
        <FranchiseTicker />
        <FeaturedOutletsSection />
        <FranchiseEnquiry />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Franchise;
