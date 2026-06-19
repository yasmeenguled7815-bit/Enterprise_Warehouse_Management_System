import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import AddReceiving from "./AddReceiving";
import "../styles/Table.css";

function ReceivingTable() {

  const [receivings, setReceivings] = useState([]);

  useEffect(() => {
    fetchReceivings();
  }, []);

  const fetchReceivings = () => {

    axios.get("/receiving")
      .then(response => setReceivings(response.data))
      .catch(error => console.log(error));

  };

  const deleteReceiving = (id) => {

    axios.delete(`/receiving/${id}`)
      .then(() => fetchReceivings())
      .catch(error => console.log(error));

  };

  return (
    <>

      <AddReceiving refresh={fetchReceivings} />

      <table>

	  <thead>
	    <tr>
	      <th>ID</th>
	      <th>Supplier</th>
	      <th>Product ID</th>
	      <th>Bin ID</th>
	      <th>Quantity</th>
	      <th>Date</th>
	      <th>Action</th>
	    </tr>
	  </thead>
		<tbody>
		{
		  receivings.map(receiving => (
		    <tr key={receiving.id}>
		      <td>{receiving.id}</td>
		      <td>{receiving.supplierName}</td>
		      <td>{receiving.product?.id}</td>
		      <td>{receiving.storageBin?.id}</td>
		      <td>{receiving.quantityReceived}</td>
		      <td>{receiving.receivingDate}</td>
		      <td>
		        <button
		          className="delete-btn"
		          onClick={() => deleteReceiving(receiving.id)}
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

export default ReceivingTable;