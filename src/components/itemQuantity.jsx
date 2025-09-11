// This Component returns an element that shows the quantity of the item and a button that add or removes an item from the quantity
import "./cart.css";
export default function ItemQuantity({ item, addCart, removeCart }) {
  return (
    <div className="item-quantity">
      <button onClick={() => removeCart(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addCart(item)}>+</button>
    </div>
  );
}
