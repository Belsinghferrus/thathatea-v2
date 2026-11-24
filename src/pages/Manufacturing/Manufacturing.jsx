import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "../../sections/Manufacturing/Hero";
import Process from "../../sections/Manufacturing/Process";
import Bakery from "../../sections/Manufacturing/Bakery";
import KitchenSupply from "../../sections/Manufacturing/KitchenSupply";

function Manufacturing() {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-x-clip">
        <Hero />
        <Process />
        <Bakery />
        <KitchenSupply />
      </main>
      <Footer />
    </>
  );
}

export default Manufacturing;
