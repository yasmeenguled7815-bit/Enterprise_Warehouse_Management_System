import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import AddOrder from "./AddOrder";
import "../styles/Table.css";

function OrderTable() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {

    axios.get("/orders")
      .then(response => setOrders(response.data))
      .catch(error => console.log(error));

  };

  const deleteOrder = (id) => {

    axios.delete(`/orders/${id}`)
      .then(() => fetchOrders())
      .catch(error => console.log(error));

  };

  const updateStatus = (order) => {

    let nextStatus = "Pending";

    if (order.status === "Pending")
      nextStatus = "Packed";

    else if (order.status === "Packed")
      nextStatus = "Shipped";

    else if (order.status === "Shipped")
      nextStatus = "Delivered";

    axios.put(`/orders/${order.id}`, {
      ...order,
      status: nextStatus
    })
      .then(() => fetchOrders())
      .catch(error => console.log(error));

  };

  return (
    <>

      <AddOrder refresh={fetchOrders} />

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Customer</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {
            orders.map(order => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customerName}</td>

                <td>{order.quantity}</td>

                <td>{order.status}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => updateStatus(order)}
                  >
                    Next Status
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteOrder(order.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </>
  );
}

export default OrderTable;