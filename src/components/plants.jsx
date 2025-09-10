import Plant from "./plant";
// This component will iterate over an array called 'plants' and will return a Plant element for each item in the plants array which will display a header, and an unordered list for the plant component
function Plants({ plants, addCart }) {
  return (
    <div className="plants">
      <h2>Proper Plants</h2>
      <ul>
        {/* iterates over each item in the plants array and creates an element for each plant*/}
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addCart={addCart} />
        ))}
      </ul>
    </div>
  );
}
export default Plants;
