//src/components/productList.js

import React, {useEffect,useState} from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import "../styles/Table.css";

function ProductList() {
	
	const navigate = useNavigate();

    const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);

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

	   // Delete product
	    const deleteProduct = async (id) => {
	      try {
	        await api.delete(`/products/${id}`, {
	          headers: {
	            Authorization: `Bearer ${localStorage.getItem("token")}`
	          }
	        });

	        loadProducts();
	      } catch (err) {
	        console.error(err);
	        alert("Failed to delete product");
	      }
	    };
	   
		  return (
		    <>
		      <AddProduct refresh={loadProducts} />

		      {selectedProduct && (
		        <EditProduct
		          product={selectedProduct}
		          refresh={loadProducts}
		          close={() => setSelectedProduct(null)}
		        />
		      )}

		      <table>
		        <thead>
		          <tr>
		            <th>ID</th>
		            <th>Name</th>
		            <th>SKU</th>
		            <th>Price</th>
		            <th>Actions</th>
		          </tr>
		        </thead>

		        <tbody>
		          {products.map((product) => (
		            <tr key={product.id}>
		              <td>{product.id}</td>
		              <td>{product.name}</td>
		              <td>{product.sku}</td>
		              <td>{product.price}</td>
		              
		              <td>
		                <button
		                  className="edit-btn"
		                  onClick={() => setSelectedProduct(product)}
		                >
		                  Edit
		                </button>

		                <button
		                  className="delete-btn"
		                  onClick={() => deleteProduct(product.id)}
		                >
		                  Delete
		                </button>
		              </td>
		            </tr>
		          ))}
		        </tbody>
		      </table>
		    </>
		  );
		}

	export default ProductList;