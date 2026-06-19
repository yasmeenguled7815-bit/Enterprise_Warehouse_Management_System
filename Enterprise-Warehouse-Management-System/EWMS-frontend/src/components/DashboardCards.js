import "../styles/Dashboard.css";

import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

function DashboardCards() {

  const [stats, setStats] = useState({
    products: 0,
    inventory: 0,
    orders: 0,
    warehouses: 0
  });

  useEffect(() => {
    axios.get("/dashboard")
      .then(response => setStats(response.data))
      .catch(error => console.log(error));
  }, []);
  
  return (

    <div className="cards">

	            <div className="card">
		         <h3>Total Products</h3>
		         <h1>{stats.products}</h1>
		       </div>

		       <div className="card">
		         <h3>Total Inventory</h3>
		         <h1>{stats.inventory}</h1>
		       </div>

		       <div className="card">
		         <h3>Total Orders</h3>
		         <h1>{stats.orders}</h1>
		       </div>

		       <div className="card">
		         <h3>Warehouses</h3>
		         <h1>{stats.warehouses}</h1>
		       </div>
    </div>

  );
}

export default DashboardCards;