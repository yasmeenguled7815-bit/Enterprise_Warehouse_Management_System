import { useState } from "react";
import axios from "../api/axiosConfig";

function EditWarehouse({ warehouse, refresh, close }) {

  const [updatedWarehouse, setUpdatedWarehouse] = useState(warehouse);

  const handleChange = (e) => {

    setUpdatedWarehouse({
      ...updatedWarehouse,
      [e.target.name]: e.target.value
    });

  };

  const updateWarehouse = () => {

    axios.put(
      `/warehouses/${updatedWarehouse.id}`,
      updatedWarehouse
    )
    .then(() => {

      refresh();

      close();

    })
    .catch(error => console.log(error));

  };

  return (

    <div className="form-box">

      <h2>Edit Warehouse</h2>

      <input
        name="name"
        value={updatedWarehouse.name}
        onChange={handleChange}
      />

      <input
        name="location"
        value={updatedWarehouse.location}
        onChange={handleChange}
      />

      <input
        name="capacity"
        value={updatedWarehouse.capacity}
        onChange={handleChange}
      />

      <button onClick={updateWarehouse}>
        Update
      </button>

    </div>

  );
}

export default EditWarehouse;