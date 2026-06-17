import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import AddWarehouse from "./AddWarehouse";
import EditWarehouse from "./EditWarehouse";
import "../styles/Table.css";

function WarehouseTable() {

  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  useEffect(() => {

    fetchWarehouses();

  }, []);

  const fetchWarehouses = () => {

    axios.get("/warehouses")
      .then(response => setWarehouses(response.data))
      .catch(error => console.log(error));

  };

  const deleteWarehouse = (id) => {

    axios.delete(`/warehouses/${id}`)
      .then(() => fetchWarehouses())
      .catch(error => console.log(error));

  };

  return (
    <>

      <AddWarehouse refresh={fetchWarehouses} />

      {
        selectedWarehouse &&
        <EditWarehouse
          warehouse={selectedWarehouse}
          refresh={fetchWarehouses}
          close={() => setSelectedWarehouse(null)}
        />
      }

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {
            warehouses.map(warehouse => (

              <tr key={warehouse.id}>

                <td>{warehouse.id}</td>

                <td>{warehouse.name}</td>

                <td>{warehouse.location}</td>

                <td>{warehouse.capacity}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => setSelectedWarehouse(warehouse)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteWarehouse(warehouse.id)}
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

export default WarehouseTable;