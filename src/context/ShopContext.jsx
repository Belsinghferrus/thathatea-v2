import { createContext, useContext, useEffect, useState } from "react";
import bunImg from "../assets/images/home/bun.png";
import teaImg from "../assets/images/home/tea2.png";
import biscuitImg from "../assets/images/home/biscuit.png";
import coffeeImg from "../assets/images/home/coffee.png";

const CART_STORAGE_KEY = "thatha_cart_items";
const ORDERS_STORAGE_KEY = "thatha_orders_list";

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

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const placeOrderFromCart = () => {
    if (cartItems.length === 0) return null;
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
      address: {
        name: "Thatha Tea Customer",
        lines: [
          "17/1, Saint Thomas Town,",
          "Kammanahalli, Bengaluru,",
          "Karnataka - 560084",
        ],
      },
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
