import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "../../sections/Career/Hero";
import Culture from "../../sections/Career/Culture";
import OpenPositions from "../../sections/Career/OpenPositions";
import CareerTicker from "../../sections/Career/CareerTicker";
import ApplyNow from "../../sections/Career/ApplyNow";

function Career() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-x-clip">
        <Hero />
        <Culture />
        <OpenPositions onSelectRole={setSelectedRole} />
        <CareerTicker />
        <ApplyNow selectedRole={selectedRole} />
      </main>
      <Footer />
    </>
  );
}

export default Career;
