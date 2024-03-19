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

// import React from "react";

// function NewPlantForm({ addPlant }) {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const newPlant = {
//       name: formData.get("name"),
//       image: formData.get("image"),
//       price: parseFloat(formData.get("price")),
//       isSoldOut: false, // Assuming newly added plants are not sold out initially
//     };
//     await addPlant(newPlant);
//     e.target.reset(); // Reset the form after submission
//   };

//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Plant name" required />
//         <input type="text" name="image" placeholder="Image URL" required />
//         <input type="number" name="price" step="0.01" placeholder="Price" required />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;

// NewPlantForm.js
// import React from "react";

// const BACKEND_URL = "http://localhost:6001"; // Define the backend URL constant

// function NewPlantForm() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const newPlant = {
//       name: formData.get("name"),
//       image: formData.get("image"),
//       price: parseFloat(formData.get("price")),
//     };

//     fetch(`${BACKEND_URL}/plants`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPlant),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data)); // You can do something with the response data if needed
//   };

//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Plant name" />
//         <input type="text" name="image" placeholder="Image URL" />
//         <input type="number" name="price" step="0.01" placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;

// // NewPlantForm.js
// import React, { useState } from "react";

// const BACKEND_URL = "http://localhost:6001/plants"; // Backend URL

// function NewPlantForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     image: "",
//     price: 0,
//   });

//   // Function to handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send POST request to backend to add new plant
//       const response = await fetch(BACKEND_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add new plant");
//       }

//       // Reset form data after successful submission
//       setFormData({ name: "", image: "", price: 0 });
//       // You can also update the plant list here if needed
//     } catch (error) {
//       console.error("Error adding new plant:", error);
//     }
//   };

//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Plant name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={formData.image}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="num

// NewPlantForm.js
import React, { useState } from "react";

const BACKEND_URL = "http://localhost:6001/plants"; // Backend URL

function NewPlantForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  });

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend to add new plant
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add new plant");
      }

      // Reset form data after successful submission
      setFormData({ name: "", image: "", price: 0 });
      // You can also update the plant list here if needed
    } catch (error) {
      console.error("Error adding new plant:", error);
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
