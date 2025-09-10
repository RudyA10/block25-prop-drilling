import CartItem from "./cartItem";

// This Component returns a Cart element, it will check if the cart is empty (or = 0) and if true, will display a message saying its empty. If false, it will iterate through an array called 'cart' and render a cartitem component for each item in the array

export default function Cart({ cart, removeCart, addCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addCart={addCart}
                removeCart={removeCart}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
