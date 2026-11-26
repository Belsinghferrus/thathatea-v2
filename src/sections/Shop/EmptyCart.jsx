import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";
import kettleImg from "../../assets/images/story/teapot.png";

function EmptyCart() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-12 text-center sm:py-16">
      <img
        src={kettleImg}
        alt="Thatha Tea brass kettle"
        className="w-28 object-contain sm:w-32"
      />
      <h2 className="mt-4 font-mona text-lg font-bold text-deep-coffee sm:text-xl">
        Your cart is empty
      </h2>
      <p className="mt-1.5 max-w-[290px] font-mona text-xs leading-relaxed text-deep-coffee/65 sm:text-[13px]">
        Browse our Thatha Tea Unique products and add items to your cart.
      </p>
      <Link
        to={ROUTES.MENU}
        className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#A75D20] px-6 py-2.5 font-mona text-xs font-medium text-white shadow-xs transition-colors hover:bg-[#8D4A15]"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default EmptyCart;
