import { createContext, ReactNode, useState } from 'react';
import { Coffee } from '../@types/coffee';

interface CartItem extends Coffee {
  quantity: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface OrderData {
  address: {
    street: string;
    number: string;
    district: string;
    city: string;
    uf: string;
  };
  paymentMethod: 'credit' | 'debit' | 'money';
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (coffee: Coffee, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  orderData: OrderData | null;
  setOrderData: (data: OrderData) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderData, setOrderData] = useState<OrderData | null>(null);


  function addToCart(coffee: Coffee, quantity: number) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === coffee.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        return [...prevCart, { ...coffee, quantity }];
      }
    });
  }

  function removeFromCart(id: number) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function updateQuantity(id: number, quantity: number) {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        orderData,
        setOrderData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
