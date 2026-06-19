import { useState } from "react";
import axios from "../api/axiosConfig";

function AddWarehouse({ refresh }) {

  const [warehouse, setWarehouse] = useState({
    name: "",
    location: "",
    country: "",
	city:""
  });

  const handleChange = (e) => {

    setWarehouse({
      ...warehouse,
      [e.target.name]: e.target.value
    });

  };

  const saveWarehouse = () => {

    axios.post("/warehouses", warehouse)
      .then(() => {

        refresh();

        setWarehouse({
          name: "",
          location: "",
		  country: "",
		  city:""
        });

      })
      .catch(error => console.log(error));

  };

  return (

    <div className="form-box">

      <h2>Add Warehouse</h2>

      <input
        name="name"
        placeholder="Warehouse Name"
        value={warehouse.name}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={warehouse.location}
        onChange={handleChange}
      />

      <input
        type="country"
        name="country"
        placeholder="Country"
        value={warehouse.country}
        onChange={handleChange}
      />
	  
	  <input
	         type="city"
	         name="city"
	         placeholder="City"
	         value={warehouse.city}
	         onChange={handleChange}
	       />

      <button onClick={saveWarehouse}>
        Save
      </button>

    </div>
  );
}

export default AddWarehouse;