//src/components/productList.js

import React, {useEffect,useState} from "react";
//import api from "../api/axiosConfig";
//import ProductList from "./src/components/ProductList";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        // API call
    };

    return (
        <div>
            <h2>Product List</h2>
        </div>
    );
}

export default ProductList;