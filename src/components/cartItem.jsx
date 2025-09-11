import ItemQuantity from "./itemQuantity";
import "./cart.css";
// This Component returns a list item element which displays the cart item image, name and the itemQuantity component/function

export default function CartItem({ item, addCart, removeCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <ItemQuantity item={item} removeCart={removeCart} addCart={addCart} />
    </li>
  );
}
