import { useState } from "react";
import axios from "../api/axiosConfig";

function AddOrder({ refresh }) {

	const [order, setOrder] = useState({
	  quantity: "",
	  productId: "",
	  status: "CREATED"
	});
	
  const handleChange = (e) => {

    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });

  };

  const saveOrder = () => {

    axios.post("/orders", {
      quantity: order.quantity,
      status: "CREATED",
      product: {
        id: order.productId
      }
    })
    .then(response => {
      console.log(response.data);
      refresh();
    })
    .catch(error => {
      console.log(error.response);
    });

  };

  return (

    <div className="form-box">

      <h2>Add Order</h2>

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={order.quantity}
        onChange={handleChange}
      />
	  
	  <input
	    type="number"
	    name="productId"
	    placeholder="Product ID"
	    value={order.productId}
	    onChange={handleChange}
	  />

      <button onClick={saveOrder}>
        Save Order
      </button>

    </div>

  );
}

export default AddOrder;