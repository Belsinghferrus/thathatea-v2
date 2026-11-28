import { createContext, useContext, useEffect, useState } from "react";
import bunImg from "../assets/images/home/bun.png";
import teaImg from "../assets/images/home/tea2.png";
import biscuitImg from "../assets/images/home/biscuit.png";
import coffeeImg from "../assets/images/home/coffee.png";

const CART_STORAGE_KEY = "thatha_cart_items";
const ORDERS_STORAGE_KEY = "thatha_orders_list";
const ADDRESSES_STORAGE_KEY = "thatha_delivery_addresses";
const SELECTED_ADDRESS_STORAGE_KEY = "thatha_selected_address_id";

const INITIAL_ADDRESSES = [
  {
    id: "addr-default-1",
    label: "Home",
    fullName: "Mr. Anjali Mehta",
    mobile: "+91 98765 43210",
    line1: "Block C, Room 204, Raipur Research Institute, Ring Road, Sector 12",
    line2: "",
    city: "Raipur",
    pinCode: "492001",
    state: "Chhattisgarh",
    isDefault: true,
  },
  {
    id: "addr-office-2",
    label: "Office",
    fullName: "Mr. Tea Kumar",
    mobile: "+91 98400 11223",
    line1: "17/1, Saint Thomas Town, Kammanahalli",
    line2: "Near Thatha Tea Flagship Outlet",
    city: "Bengaluru",
    pinCode: "560084",
    state: "Karnataka",
    isDefault: false,
  },
];

const INITIAL_CART = [
  {
    id: "cheese-bun",
    name: "Cheese Bun",
    price: 120,
    quantity: 2,
    inStock: true,
    image: bunImg,
  },
  {
    id: "special-tea",
    name: "Special Tea",
    price: 20,
    quantity: 1,
    inStock: true,
    image: teaImg,
  },
  {
    id: "butter-biscuit",
    name: "Butter Biscuit",
    price: 15,
    quantity: 1,
    inStock: true,
    image: biscuitImg,
  },
  {
    id: "chocolate-shake",
    name: "Chocolate Shake",
    price: 100,
    quantity: 1,
    inStock: true,
    image: coffeeImg,
  },
];

const INITIAL_ORDERS = [
  {
    id: "ORD-2024-8821",
    date: "2024-05-28",
    status: "Delivered",
    items: [
      { id: "cheese-bun", name: "Cheese Bun", price: 249, quantity: 2, image: bunImg },
      { id: "special-tea", name: "Plain Tea", price: 20, quantity: 2, image: teaImg },
      { id: "butter-biscuit", name: "Butter Biscuit", price: 15, quantity: 2, image: biscuitImg },
      { id: "chocolate-shake", name: "Chocolate", price: 100, quantity: 2, image: coffeeImg },
    ],
    address: {
      name: "Mr. Tea Kumar",
      lines: [
        "Block C, Room 204, Gopalapuram,",
        "Ring Road, Sector 12, Raipur,",
        "Chennai - 641001",
      ],
    },
  },
  {
    id: "ORD-2024-8756",
    date: "2024-05-20",
    status: "Shipped",
    items: [
      { id: "cheese-bun", name: "Cheese Bun", price: 249, quantity: 2, image: bunImg },
      { id: "special-tea", name: "Plain Tea", price: 20, quantity: 2, image: teaImg },
      { id: "butter-biscuit", name: "Butter Biscuit", price: 15, quantity: 2, image: biscuitImg },
      { id: "chocolate-shake", name: "Chocolate", price: 100, quantity: 2, image: coffeeImg },
    ],
    address: {
      name: "Mr. Tea Kumar",
      lines: [
        "Block C, Room 204, Gopalapuram,",
        "Ring Road, Sector 12, Raipur,",
        "Chennai - 641001",
      ],
    },
  },
  {
    id: "ORD-2024-8640",
    date: "2024-05-14",
    status: "Processing",
    items: [
      { id: "cheese-bun", name: "Cheese Bun", price: 249, quantity: 2, image: bunImg },
    ],
    address: {
      name: "Mr. Tea Kumar",
      lines: [
        "Block C, Room 204, Gopalapuram,",
        "Ring Road, Sector 12, Raipur,",
        "Chennai - 641001",
      ],
    },
  },
  {
    id: "ORD-2024-8512",
    date: "2024-05-03",
    status: "Delivered",
    items: [
      { id: "special-tea", name: "Special Tea", price: 20, quantity: 3, image: teaImg },
      { id: "chocolate-shake", name: "Chocolate Shake", price: 100, quantity: 1, image: coffeeImg },
    ],
    address: {
      name: "Mr. Tea Kumar",
      lines: [
        "Block C, Room 204, Gopalapuram,",
        "Ring Road, Sector 12, Raipur,",
        "Chennai - 641001",
      ],
    },
  },
];

export function calculateOrderTotals(items) {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = Math.round(subtotal * 0.18);
  const shipping = subtotal >= 250 || subtotal === 0 ? 0 : 40;
  const total = subtotal + gst + shipping;
  return { itemCount, subtotal, gst, shipping, total };
}

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_CART;
    } catch {
      return INITIAL_CART;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem(ADDRESSES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
      return INITIAL_ADDRESSES;
    } catch {
      return INITIAL_ADDRESSES;
    }
  });

  const [selectedAddressId, setSelectedAddressId] = useState(() => {
    try {
      return (
        localStorage.getItem(SELECTED_ADDRESS_STORAGE_KEY) ||
        INITIAL_ADDRESSES[0].id
      );
    } catch {
      return INITIAL_ADDRESSES[0].id;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(ADDRESSES_STORAGE_KEY, JSON.stringify(addresses));
    } catch {
      // Ignore storage quota errors
    }
  }, [addresses]);

  useEffect(() => {
    try {
      if (selectedAddressId) {
        localStorage.setItem(SELECTED_ADDRESS_STORAGE_KEY, selectedAddressId);
      }
    } catch {
      // Ignore storage quota errors
    }
  }, [selectedAddressId]);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage quota errors
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch {
      // Ignore storage quota errors
    }
  }, [orders]);

  const addToCart = (product, quantity = 1) => {
    if (!product || product.inStock === false) return;
    const id = String(product.id);
    const minQty = Number(product.min) > 0 ? Number(product.min) : 1;
    const maxQty = Number(product.max) > 0 ? Number(product.max) : 100;
    const addAmount = Math.max(minQty, quantity);

    setCartItems((prev) => {
      const existing = prev.find((item) => String(item.id) === id);
      if (existing) {
        return prev.map((item) =>
          String(item.id) === id
            ? { ...item, quantity: Math.min(maxQty, item.quantity + quantity) }
            : item
        );
      }
      return [
        ...prev,
        {
          id,
          name: product.name,
          price: Number(product.price) || 0,
          quantity: Math.min(maxQty, addAmount),
          inStock: true,
          image: product.image,
          min: minQty,
          max: maxQty,
        },
      ];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          String(item.id) === String(id)
            ? {
                ...item,
                quantity: Math.min(
                  item.max || 100,
                  Math.max(0, item.quantity + delta)
                ),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => String(item.id) !== String(id))
    );
  };

  const selectedAddress =
    addresses.find((a) => a.id === selectedAddressId) ||
    addresses.find((a) => a.isDefault) ||
    addresses[0] ||
    null;

  const saveAddress = (addressData) => {
    const isEditingExisting = Boolean(addressData.id);
    const shouldBeDefault =
      Boolean(addressData.isDefault) || addresses.length === 0;

    if (isEditingExisting) {
      setAddresses((prev) =>
        prev.map((addr) => {
          if (addr.id === addressData.id) {
            return {
              ...addr,
              ...addressData,
              isDefault: shouldBeDefault ? true : addr.isDefault,
            };
          }
          return shouldBeDefault ? { ...addr, isDefault: false } : addr;
        })
      );
      setSelectedAddressId(addressData.id);
      return addressData;
    }

    const newAddr = {
      ...addressData,
      id: `addr-${Date.now()}`,
      isDefault: shouldBeDefault,
    };
    setAddresses((prev) => [
      newAddr,
      ...(shouldBeDefault
        ? prev.map((a) => ({ ...a, isDefault: false }))
        : prev),
    ]);
    setSelectedAddressId(newAddr.id);
    return newAddr;
  };

  const deleteAddress = (addressId) => {
    setAddresses((prev) => {
      const remaining = prev.filter((a) => a.id !== addressId);
      if (selectedAddressId === addressId) {
        const nextSelected =
          remaining.find((a) => a.isDefault) || remaining[0] || null;
        setSelectedAddressId(nextSelected ? nextSelected.id : "");
      }
      return remaining;
    });
  };

  const setDefaultAddress = (addressId) => {
    setAddresses((prev) =>
      prev.map((a) => ({
        ...a,
        isDefault: a.id === addressId,
      }))
    );
    setSelectedAddressId(addressId);
  };

  const selectAddress = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const placeOrderFromCart = (deliveryAddress = selectedAddress) => {
    if (cartItems.length === 0) return null;
    const formattedAddress = deliveryAddress
      ? {
          name: deliveryAddress.fullName,
          lines: [
            [deliveryAddress.line1, deliveryAddress.line2]
              .filter(Boolean)
              .join(", "),
            [deliveryAddress.city, deliveryAddress.state]
              .filter(Boolean)
              .join(", "),
            deliveryAddress.pinCode
              ? `${deliveryAddress.pinCode} • ${deliveryAddress.mobile}`
              : deliveryAddress.mobile,
          ].filter(Boolean),
        }
      : {
          name: "Thatha Tea Customer",
          lines: [
            "17/1, Saint Thomas Town,",
            "Kammanahalli, Bengaluru,",
            "Karnataka - 560084",
          ],
        };

    const newOrder = {
      id: `ORD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().slice(0, 10),
      status: "Processing",
      items: cartItems.map(({ id, name, price, quantity, image }) => ({
        id,
        name,
        price,
        quantity,
        image,
      })),
      address: formattedAddress,
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCartItems([]);
    return newOrder;
  };

  const cartTotals = calculateOrderTotals(cartItems);

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        cartTotals,
        orders,
        addresses,
        selectedAddress,
        saveAddress,
        deleteAddress,
        setDefaultAddress,
        selectAddress,
        addToCart,
        updateQuantity,
        removeFromCart,
        placeOrderFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return ctx;
}
