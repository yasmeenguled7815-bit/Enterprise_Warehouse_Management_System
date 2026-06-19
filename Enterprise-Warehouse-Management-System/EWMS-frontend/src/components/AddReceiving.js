import { useState } from "react";
import axios from "../api/axiosConfig";

function AddReceiving({ refresh }) {

	const [receiving, setReceiving] = useState({
	  productId: "",
	  binId: "",
	  supplierName: "",
	  quantity: ""
	});
	
  const handleChange = (e) => {

    setReceiving({
      ...receiving,
      [e.target.name]: e.target.value
    });

  };

  const saveReceiving = () => {

	axios.post(
	  `/receiving?productId=${receiving.productId}&quantity=${receiving.quantity}&binId=${receiving.binId}&supplierName=${receiving.supplierName}`
	)
	.then(() => {
	    refresh();

	    setReceiving({
	      productId: "",
	      binId: "",
	      supplierName: "",
	      quantity: ""
	    });
	})
	.catch(error => {
	    console.log("Status:", error.response?.status);
	    console.log("Data:", error.response?.data);
	    console.log("Headers:", error.response?.headers);
	});

  };

  
  return (

    <div className="form-box">

      <h2>Add Receiving</h2>

	  <input
	    type="number"
	    name="productId"
	    placeholder="Product ID"
	    value={receiving.productId}
	    onChange={handleChange}
	  />

	  <input
	    type="number"
	    name="binId"
	    placeholder="Bin ID"
	    value={receiving.binId}
	    onChange={handleChange}
	  />

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
      <button onClick={saveReceiving}>
        Save
      </button>

    </div>

  );
}

export default AddReceiving;