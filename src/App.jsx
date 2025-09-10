import { useState } from "react";

import PLANTS from "./data";

import Cart from "./components/cart";
import Plants from "./components/plants";

/** Users can add plants to a cart and remove them. */
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

  /**
   * First, use `map` to decrease the quantity of the item to remove by 1.
   * Then, keep only the items that have a quantity greater than 0.
   */
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
