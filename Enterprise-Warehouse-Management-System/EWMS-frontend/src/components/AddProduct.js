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
        <div>
            <h3>Add Product</h3>

            <input placeholder="Name" OnChange={(e) => setName(e.target.value)} />
            <input placeholder="Sku" OnChange={(e) => setSku(e.target.value)} />

            <input type="number" placeholder="Quantity" OnChange={(e) => setQuantity(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddProduct;
