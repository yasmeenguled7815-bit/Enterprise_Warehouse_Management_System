import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Receiving from "./pages/Receiving";
import Warehouses from "./pages/Warehouses";
import StorageBins from "./pages/StorageBins";



function App() {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/products" element={<Products />} />

                <Route path="/inventory" element={<Inventory />} />

                <Route path="/orders" element={<Orders />} />

                <Route path="/receiving" element={<Receiving />} />

                <Route path="/warehouses" element={<Warehouses />} />

                <Route path="/storagebins" element={<StorageBins />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
