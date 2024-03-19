// import React from "react";

// function PlantCard() {
//   return (
//     <li className="card" data-testid="plant-item">
//       <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
//       <h4>{"plant name"}</h4>
//       <p>Price: {"plant price"}</p>
//       {true ? (
//         <button className="primary">In Stock</button>
//       ) : (
//         <button>Out of Stock</button>
//       )}
//     </li>
//   );
// }

// export default PlantCard;

// import React from "react";

// function PlantCard({ plant }) {
//   return (
//     <li className="card" data-testid="plant-item">
//       <img src={plant.image} alt={plant.name} />
//       <h4>{plant.name}</h4>
//       <p>Price: ${plant.price.toFixed(2)}</p>
//       {plant.isSoldOut ? (
//         <button className="primary">Sold Out</button>
//       ) : (
//         <button>Add to Cart</button>
//       )}
//     </li>
//   );
// }

// export default PlantCard;


// import React from "react";

// function PlantCard({ plant, markSoldOut }) {
//   const handleSoldOutClick = () => {
//     markSoldOut(plant.id);
//   };

//   return (
//     <li className="card" data-testid="plant-item">
//       <img src={plant.image} alt={plant.name} />
//       <h4>{plant.name}</h4>
//       <p>Price: ${plant.price.toFixed(2)}</p>
//       {plant.isSoldOut ? (
//         <button className="primary" disabled>Sold Out</button>
//       ) : (
//         <button onClick={handleSoldOutClick}>Mark as Sold Out</button>
//       )}
//     </li>
//   );
// }

// export default PlantCard;


// PlantCard.js
import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isInStock, setIsInStock] = useState(true);

  // Function to toggle plant status between in stock and sold out
  const toggleStatus = () => {
    setIsInStock(!isInStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      {/* Button to toggle plant status */}
      <button onClick={toggleStatus} className={isInStock ? "primary" : ""}>
        {isInStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;
