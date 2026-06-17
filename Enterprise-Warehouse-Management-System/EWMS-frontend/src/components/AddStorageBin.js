import { useState } from "react";
import axios from "../api/axiosConfig";

function AddStorageBin({ refresh }) {

  const [bin, setBin] = useState({
    binCode: "",
    capacity: "",
    occupied: ""
  });

  const handleChange = (e) => {

    setBin({
      ...bin,
      [e.target.name]: e.target.value
    });

  };

  const saveBin = () => {

    axios.post("/storagebins", bin)
      .then(() => {

        refresh();

        setBin({
          binCode: "",
          capacity: "",
          occupied: ""
        });

      })
      .catch(error => console.log(error));

  };

  return (

    <div className="form-box">

      <h2>Add Storage Bin</h2>

      <input
        name="binCode"
        placeholder="Bin Code"
        value={bin.binCode}
        onChange={handleChange}
      />

      <input
        type="number"
        name="capacity"
        placeholder="Capacity"
        value={bin.capacity}
        onChange={handleChange}
      />

      <input
        type="number"
        name="occupied"
        placeholder="Occupied"
        value={bin.occupied}
        onChange={handleChange}
      />

      <button onClick={saveBin}>
        Save
      </button>

    </div>
  );
}

export default AddStorageBin;