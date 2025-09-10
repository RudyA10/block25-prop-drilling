//Plant function which will use 'plant' and 'addCart' props when the function is called in another component
export default function Plant({ plant, addCart }) {
  return (
    <div className="plant">
      {/* adds image from the plant prop*/}
      <figure>{plant.image}</figure>
      {/* adds name from the plant prop*/}
      <h2>{plant.name}</h2>
      {/* add to cart button*/}
      <button onClick={() => addCart(plant)}>Add to cart</button>
    </div>
  );
}
