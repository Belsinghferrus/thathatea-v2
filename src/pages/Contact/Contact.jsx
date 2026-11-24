import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "../../sections/Contact/Hero";
import HeadOffice from "../../sections/Contact/HeadOffice";
import ContactForm from "../../sections/Contact/ContactForm";
import Ticker from "../../sections/Contact/Ticker";
import SocialMedia from "../../sections/Contact/SocialMedia";

function Contact() {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-x-clip">
        <Hero />
        <HeadOffice />
        <ContactForm />
        <Ticker />
        <SocialMedia />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
