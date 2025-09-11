import { useState } from "react";
import PLANTS from "./data";
import Cart from "./components/cart";
import Plants from "./components/plants";

export default function App() {
  const [cart, setCart] = useState([]);

  const addCart = (plant) => {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={PLANTS} addCart={addCart} />
        <Cart cart={cart} removeCart={removeCart} addCart={addCart} />
      </main>
    </>
  );
}
