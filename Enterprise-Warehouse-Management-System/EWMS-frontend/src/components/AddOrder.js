import { useState } from "react";
import axios from "../api/axiosConfig";

function AddOrder({ refresh }) {

  const [order, setOrder] = useState({
    customerName: "",
    quantity: "",
    status: "Pending"
  });

  const handleChange = (e) => {

    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });

  };

  const saveOrder = () => {

    axios.post("/orders", order)
      .then(() => {

        refresh();

        setOrder({
          customerName: "",
          quantity: "",
          status: "Pending"
        });

      })
      .catch(error => console.log(error));

  };

  return (

    <div className="form-box">

      <h2>Add Order</h2>

      <input
        name="customerName"
        placeholder="Customer Name"
        value={order.customerName}
        onChange={handleChange}
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={order.quantity}
        onChange={handleChange}
      />

      <button onClick={saveOrder}>
        Save Order
      </button>

    </div>

  );
}

export default AddOrder;