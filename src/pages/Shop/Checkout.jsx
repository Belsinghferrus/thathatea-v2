import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant/routes";
import { useShop } from "../../context/ShopContext";
import ShopLayout from "../../sections/Shop/ShopLayout";
import CheckoutStepper from "../../sections/Shop/CheckoutStepper";
import DeliveryAddressCard from "../../sections/Shop/DeliveryAddressCard";
import CheckoutOrderItems from "../../sections/Shop/CheckoutOrderItems";
import OrderSummaryCard from "../../sections/Shop/OrderSummaryCard";
import EmptyCart from "../../sections/Shop/EmptyCart";

function Checkout() {
  const navigate = useNavigate();
  const {
    cartItems,
    cartTotals,
    addresses,
    selectedAddress,
    saveAddress,
    selectAddress,
    placeOrderFromCart,
  } = useShop();

  const [checkoutError, setCheckoutError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProceedToPayment = () => {
    if (isSubmitting) return;
    if (cartItems.length === 0) {
      setCheckoutError("Your cart is empty.");
      return;
    }
    if (!selectedAddress) {
      setCheckoutError("Please add or select a delivery address before continuing.");
      return;
    }

    setCheckoutError("");
    setIsSubmitting(true);
    try {
      const createdOrder = placeOrderFromCart(selectedAddress);
      if (createdOrder) {
        navigate(`/orders/${createdOrder.id}`);
      } else {
        navigate(ROUTES.ORDERS);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ShopLayout>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mx-auto w-full lg:w-[76%]">
          {/* Five-Step Progress Indicator */}
          <CheckoutStepper activeStep={3} />

          {/* Two-Column Checkout Layout (57.5% Left / 40.5% Right) */}
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-[2%]">
            {/* Left Column: Delivery Address + Order Items */}
            <div className="flex w-full flex-col gap-6 lg:w-[57.5%]">
              <DeliveryAddressCard
                addresses={addresses}
                selectedAddress={selectedAddress}
                onSelectAddress={selectAddress}
                onSaveAddress={(addr) => {
                  saveAddress(addr);
                  setCheckoutError("");
                }}
              />

              <CheckoutOrderItems items={cartItems} />
            </div>

            {/* Right Column: Top-Aligned Order Summary */}
            <div className="w-full lg:w-[40.5%]">
              <OrderSummaryCard
                title="Order Summary"
                totals={cartTotals}
                showActions
                buttonLabel={
                  isSubmitting ? "Processing..." : "Proceed to Payment"
                }
                totalClassName="text-[#12365E]"
                errorMessage={checkoutError}
                disabled={isSubmitting}
                onCheckout={handleProceedToPayment}
              />
            </div>
          </div>
        </div>
      )}
    </ShopLayout>
  );
}

export default Checkout;
