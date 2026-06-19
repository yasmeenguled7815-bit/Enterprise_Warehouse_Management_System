import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import "../styles/Dashboard.css";

import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";


function Dashboard() {
	const [stats, setStats] = useState({
	  products: 0,
	  inventory: 0,
	  orders: 0,
	  warehouses: 0,
	  recentOrders: [],
	  lowStockProducts: []
	});
	
	useEffect(() => {
	  axios.get("/dashboard")
	    .then(res => {
	      console.log(res.data); // <-- add this
	      setStats(res.data);
	    })
	    .catch(err => console.log(err));
	}, []);
	 
  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1>Dashboard</h1>

          <DashboardCards />


        </div>

      </div>

    </>
  );
}

export default Dashboard;