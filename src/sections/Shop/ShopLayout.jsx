import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import topRightLeaves from "../../assets/images/profile/Pasted 26-11-2026 at 20.24.27.png";
import bottomRightBakery from "../../assets/images/profile/Pasted 26-11-2026 at 20.24.40.png";

function ShopLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="relative isolate flex min-h-[calc(100svh-120px)] w-full flex-col overflow-x-clip bg-[#F6F1E7] pt-28 pb-20 sm:pt-32 lg:pb-24">
        {/* Top-Right Decorative Botanical Leaves */}
        <img
          src={topRightLeaves}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-14 right-0 z-0 w-52 object-contain object-top-right opacity-45 mix-blend-multiply sm:w-72 lg:w-87.5"
        />

        {/* Bottom-Right Tea & Bakery Illustration (Flush Against Footer) */}
        <img
          src={bottomRightBakery}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 -bottom-8 z-0 w-[320px] object-contain object-bottom-right opacity-90 mix-blend-multiply sm:-bottom-12 sm:w-115 lg:-bottom-16 lg:w-155 xl:-bottom-20 xl:w-170"
        />

        {/* Page Content Container */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 lg:px-16">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ShopLayout;
