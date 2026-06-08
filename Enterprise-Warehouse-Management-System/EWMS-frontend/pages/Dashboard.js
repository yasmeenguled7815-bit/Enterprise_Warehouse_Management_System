//src/pages/Dashboard.js

import React, { useState } from "react";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";

function Dashboard(){
	const [refresh,setRefresh]=useState(false);
	
	return(
		<div>
		<h1>WareHouse Dashboard</h1>
		
		<AddProduct refresh={() => setrefresh(!refresh)}/>
		
		<ProductList key={refresh}/>
		</div>
	);
}

export default Dashboard;