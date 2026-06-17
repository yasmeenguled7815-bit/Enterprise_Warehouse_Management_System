import { useState } from "react";
import axios from "../api/axiosConfig";

function EditStorageBin({ bin, refresh, close }) {

  const [updatedBin, setUpdatedBin] = useState(bin);

  const handleChange = (e) => {

    setUpdatedBin({
      ...updatedBin,
      [e.target.name]: e.target.value
    });

  };

  const updateBin = () => {

    axios.put(
      `/storagebins/${updatedBin.id}`,
      updatedBin
    )
    .then(() => {

      refresh();

      close();

    })
    .catch(error => console.log(error));

  };

  return (

    <div className="form-box">

      <h2>Edit Storage Bin</h2>

      <input
        name="binCode"
        value={updatedBin.binCode}
        onChange={handleChange}
      />

      <input
        name="capacity"
        value={updatedBin.capacity}
        onChange={handleChange}
      />

      <input
        name="occupied"
        value={updatedBin.occupied}
        onChange={handleChange}
      />

      <button onClick={updateBin}>
        Update
      </button>

    </div>

  );
}

export default EditStorageBin;