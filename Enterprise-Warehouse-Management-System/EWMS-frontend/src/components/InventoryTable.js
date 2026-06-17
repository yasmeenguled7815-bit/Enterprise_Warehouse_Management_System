import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import "../styles/Table.css";

function InventoryTable() {

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = () => {

    axios.get("/inventory")
      .then(response => setInventory(response.data))
      .catch(error => console.log(error));

  };

  const deleteInventory = (id) => {

    axios.delete(`/inventory/${id}`)
      .then(() => fetchInventory())
      .catch(error => console.log(error));

  };

  const getStatus = (quantity) => {

    if (quantity <= 5)
      return "Low Stock";

    if (quantity <= 20)
      return "Medium";

    return "Available";
  };

  return (

    <table>

      <thead>

        <tr>

          <th>ID</th>
          <th>Product</th>
          <th>Warehouse</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        {
          inventory.map(item => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.product?.name}</td>

              <td>{item.warehouse?.name}</td>

              <td>{item.quantity}</td>

              <td>

                {getStatus(item.quantity)}

              </td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() => deleteInventory(item.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))
        }

      </tbody>

    </table>

  );
}

export default InventoryTable;