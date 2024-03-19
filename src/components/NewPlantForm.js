// import React from "react";

// function NewPlantForm() {
//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form>
//         <input type="text" name="name" placeholder="Plant name" />
//         <input type="text" name="image" placeholder="Image URL" />
//         <input type="number" name="price" step="0.01" placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;

import React from "react";

function NewPlantForm({ addPlant }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPlant = {
      name: formData.get("name"),
      image: formData.get("image"),
      price: parseFloat(formData.get("price")),
      isSoldOut: false, // Assuming newly added plants are not sold out initially
    };
    await addPlant(newPlant);
    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" required />
        <input type="text" name="image" placeholder="Image URL" required />
        <input type="number" name="price" step="0.01" placeholder="Price" required />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

