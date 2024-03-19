// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList() {
//   return (
//     <ul className="cards">{/* render PlantCards components in here */}</ul>
//   );
// }

// export default PlantList;


// import React, { useState, useEffect } from "react";
// import PlantCard from "./PlantCard";

// function PlantList() {
//   const [plants, setPlants] = useState([]);

//   useEffect(() => {
//     fetchPlants();
//   }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

//   const fetchPlants = async () => {
//     try {
//       const response = await fetch("http://localhost:6001/plants");
//       if (!response.ok) {
//         throw new Error("Failed to fetch plants");
//       }
//       const data = await response.json();
//       setPlants(data);
//     } catch (error) {
//       console.error("Error fetching plants:", error);
//     }
//   };

//   return (
//     <ul className="cards">
//       {plants.map(plant => (
//         <PlantCard key={plant.id} plant={plant} />
//       ))}
//     </ul>
//   );
// }

// export default PlantList;

// PlantList.js
// import React, { useState, useEffect } from "react";
// import PlantCard from "./PlantCard";

// const BACKEND_URL = "http://localhost:6001"; // Define the backend URL constant

// function PlantList() {
//   const [plants, setPlants] = useState([]);

//   useEffect(() => {
//     fetch(`${BACKEND_URL}/plants`) // Update fetch URL
//       .then((response) => response.json())
//       .then((data) => setPlants(data));
//   }, []);

//   return (
//     <ul className="cards">
//       {plants.map((plant) => (
//         <PlantCard key={plant.id} plant={plant} />
//       ))}
//     </ul>
//   );
// }

// export default PlantList;
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

const BACKEND_URL = "http://localhost:6001"; // Define the backend URL constant

function PlantList() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  useEffect(() => {
    fetch(`${BACKEND_URL}/plants`) // Update fetch URL
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Function to filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="cards">
        {/* Render filtered plants */}
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
