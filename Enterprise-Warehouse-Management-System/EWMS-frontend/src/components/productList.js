//src/components/productList.js

import React, {useEffect,useState} from "react";
import api from "../api/axiosConfig";

function ProductList(){
	const [products,setProducts]=useState([]);
	
	useEffect(() => {loadProducts();},[]);
	
	const loadProducts=async () =>{
		const res=await api.get("/products");
		setProducts(res.date);
	};
	
	return(
		<div>
		<h2>Inventory</h2>
		<ul>
		{products.map((p) => (
			<li key={p.id}>
			{p.name}-{p.sku}-Qty:{p.quantity}
			</li>
			))}
			</ul>
			</div>
	);
}

export default ProductList;