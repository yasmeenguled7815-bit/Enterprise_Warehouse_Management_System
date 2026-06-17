import { useState } from "react";
import axios from "../api/axiosConfig";

function AddReceiving({ refresh }) {

  const [receiving, setReceiving] = useState({
    supplierName: "",
    quantity: "",
    date: ""
  });

  const handleChange = (e) => {

    setReceiving({
      ...receiving,
      [e.target.name]: e.target.value
    });

  };

  const saveReceiving = () => {

    axios.post("/receiving", receiving)
      .then(() => {

        refresh();

        setReceiving({
          supplierName: "",
          quantity: "",
          date: ""
        });

      })
      .catch(error => console.log(error));

  };

  return (

    <div className="form-box">

      <h2>Add Receiving</h2>

      <input
        name="supplierName"
        placeholder="Supplier Name"
        value={receiving.supplierName}
        onChange={handleChange}
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={receiving.quantity}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={receiving.date}
        onChange={handleChange}
      />

      <button onClick={saveReceiving}>
        Save
      </button>

    </div>

  );
}

export default AddReceiving;