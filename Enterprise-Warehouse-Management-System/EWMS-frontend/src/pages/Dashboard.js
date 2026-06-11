//src/pages/Dashboard.js

import React, { useState } from "react";
import ProductList from "./src/components/ProductList";
import AddProduct from "./src/components/AddProduct";

function Dashboard() {
    const [refresh, setRefresh] = useState(false);

    return (
        <div>
            <h1>WareHouse Dashboard</h1>

            <AddProduct refresh={() => setRefresh(!refresh)} />

            <ProductList key={refresh} />
        </div>
    );
}

export default Dashboard;
