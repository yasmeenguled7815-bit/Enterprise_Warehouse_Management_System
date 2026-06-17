//src/components/AddProduct.js

import React, { useState } from "react";
import api from "../api/axiosConfig";

function AddProduct({ refresh }) {
    const [name, setName] = useState("");
    const [sku, setSku] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleAdd = async () => {
        await api.post("/products", {
            name, sku, quantity,
        });

        setName("");
        setSku("");
        setQuantity(0);
        refresh();
    };

    return(
		<div className="form-box">

		     <h2>Add Product</h2>

		     <input
		       name="name"
		       placeholder="Name"
		       value={product.name}
		       onChange={handleChange}
		     />

		     <input
		       name="sku"
		       placeholder="SKU"
		       value={product.sku}
		       onChange={handleChange}
		     />

		     <input
		       name="price"
		       placeholder="Price"
		       value={product.price}
		       onChange={handleChange}
		     />

		     <input
		       name="quantity"
		       placeholder="Quantity"
		       value={product.quantity}
		       onChange={handleChange}
		     />

		     <button onClick={addProduct}>
		       Save Product
		     </button>

		   </div>
    );
}

export default AddProduct;
