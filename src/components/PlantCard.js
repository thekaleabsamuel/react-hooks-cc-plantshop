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


import React from "react";

function PlantCard({ plant, markSoldOut }) {
  const handleSoldOutClick = () => {
    markSoldOut(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {plant.isSoldOut ? (
        <button className="primary" disabled>Sold Out</button>
      ) : (
        <button onClick={handleSoldOutClick}>Mark as Sold Out</button>
      )}
    </li>
  );
}

export default PlantCard;
