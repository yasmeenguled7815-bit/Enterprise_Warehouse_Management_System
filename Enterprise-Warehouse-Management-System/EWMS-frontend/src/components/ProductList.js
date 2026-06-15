//src/components/productList.js

import React, {useEffect,useState} from "react";
import api from "../api/axiosConfig";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
//import ProductList from "./src/components/ProductList";

function ProductList() {
	
	const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

	const loadProducts = async () => {
	       try {
	           const res = await api.get("/products", {
	               headers: {
	                   Authorization: `Bearer ${localStorage.getItem("token")}`
	               }
	           });

	           setProducts(res.data);
	       } catch (err) {
	           console.error(err);
	       }
	   };

	   
	    return (
	           <div className="dashboard">
	               <div className="sidebar">
	                   <ul>
	                       <li onClick={() => navigate("/dashboard")}>Dashboard</li>
	                       <li onClick={() => navigate("/products")}>Products</li>
	                       <li onClick={() => navigate("/inventory")}>Inventory</li>
	                       <li onClick={() => navigate("/orders")}>Orders</li>
	                       <li onClick={() => navigate("/suppliers")}>Suppliers</li>
	                       <li onClick={() => navigate("/reports")}>Reports</li>
	                       <li onClick={() => {
	                           localStorage.clear();
	                           navigate("/");
	                       }}>
	                           Logout
	                       </li>
	                   </ul>
	               </div>
	           </div>
	       );
	   }


export default ProductList;