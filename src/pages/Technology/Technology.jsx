import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "../../sections/Technology/Hero";
import Platform from "../../sections/Technology/Platform";
import HowThathaNotes from "../../sections/Technology/HowThathaNotes";
import GrowingFamilies from "../../sections/Technology/GrowingFamilies";
import OutletsMap from "../../sections/Technology/OutletsMap";

function Technology() {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-x-clip">
        <Hero />
        <Platform />
        <HowThathaNotes />
        <GrowingFamilies />
        <OutletsMap />
      </main>
      <Footer />
    </>
  );
}

export default Technology;
