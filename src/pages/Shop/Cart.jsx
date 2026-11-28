import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant/routes";
import { useShop } from "../../context/ShopContext";
import ShopLayout from "../../sections/Shop/ShopLayout";
import CartItemCard from "../../sections/Shop/CartItemCard";
import OrderSummaryCard from "../../sections/Shop/OrderSummaryCard";
import EmptyCart from "../../sections/Shop/EmptyCart";

function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    cartTotals,
    updateQuantity,
    removeFromCart,
  } = useShop();

  const handleCheckout = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <ShopLayout>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="w-full max-w-[1160px]">
          {/* Page Header */}
          <h1 className="font-mona text-[26px] font-bold leading-tight text-deep-coffee sm:text-[28px]">
            My Cart
          </h1>
          <p className="mt-1 font-mona text-[13px] text-deep-coffee/75 sm:text-sm">
            View your cart details
          </p>

          {/* Two-Column Layout: Cart Items Left, Order Summary Right */}
          <div className="mt-6 grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col gap-4 lg:col-span-7">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <div className="lg:col-span-5">
              <OrderSummaryCard
                title="Order Summary"
                totals={cartTotals}
                showActions
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      )}
    </ShopLayout>
  );
}

export default Cart;
