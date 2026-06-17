import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import AddStorageBin from "./AddStorageBin";
import EditStorageBin from "./EditStorageBin";
import "../styles/Table.css";

function StorageBinTable() {

  const [bins, setBins] = useState([]);
  const [selectedBin, setSelectedBin] = useState(null);

  useEffect(() => {

    fetchBins();

  }, []);

  const fetchBins = () => {

    axios.get("/storagebins")
      .then(response => setBins(response.data))
      .catch(error => console.log(error));

  };

  const deleteBin = (id) => {

    axios.delete(`/storagebins/${id}`)
      .then(() => fetchBins())
      .catch(error => console.log(error));

  };

  return (
    <>

      <AddStorageBin refresh={fetchBins} />

      {
        selectedBin &&
        <EditStorageBin
          bin={selectedBin}
          refresh={fetchBins}
          close={() => setSelectedBin(null)}
        />
      }

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Bin Code</th>
            <th>Capacity</th>
            <th>Occupied</th>
            <th>Available Space</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {
            bins.map(bin => (

              <tr key={bin.id}>

                <td>{bin.id}</td>

                <td>{bin.binCode}</td>

                <td>{bin.capacity}</td>

                <td>{bin.occupied}</td>

                <td>{bin.capacity - bin.occupied}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => setSelectedBin(bin)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteBin(bin.id)}
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

export default StorageBinTable;