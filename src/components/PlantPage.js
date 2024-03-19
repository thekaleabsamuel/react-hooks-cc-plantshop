// import React from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";

// function PlantPage() {
//   return (
//     <main>
//       <NewPlantForm />
//       <Search />
//       <PlantList />
//     </main>
//   );
// }

// export default PlantPage;
// PlantPage.js
import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state

  return (
    <main>
      <NewPlantForm />
      <Search setSearchTerm={setSearchTerm} /> {/* Pass setSearchTerm prop */}
      <PlantList searchTerm={searchTerm} /> {/* Pass searchTerm prop */}
    </main>
  );
}

export default PlantPage;
