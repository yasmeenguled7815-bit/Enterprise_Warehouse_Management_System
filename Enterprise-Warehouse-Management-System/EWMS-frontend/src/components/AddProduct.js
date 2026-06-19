//src/components/AddProduct.js

import React, { useState } from "react";
import api from "../api/axiosConfig";

function AddProduct({ refresh }) {
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = async () => {
    await api.post("/products", {
      name,
      sku,
      price
    });

    setName("");
    setSku("");
    setPrice("");
    refresh();
  };

  return (
    <div className="form-box">
      <h2>Add Product</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="SKU"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
	  
      <button onClick={handleAdd}>
        Save Product
      </button>
    </div>
  );
}

export default AddProduct;