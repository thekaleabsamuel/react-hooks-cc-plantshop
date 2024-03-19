// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList() {
//   return (
//     <ul className="cards">{/* render PlantCards components in here */}</ul>
//   );
// }

// export default PlantList;


import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  const fetchPlants = async () => {
    try {
      const response = await fetch("http://localhost:6001/plants");
      if (!response.ok) {
        throw new Error("Failed to fetch plants");
      }
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error("Error fetching plants:", error);
    }
  };

  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
