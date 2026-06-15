import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProductList from "./components/ProductList";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <BrowserRouter>
	  <Routes>
	    <Route path="/" element={<Login />} />
	    <Route path="/dashboard" element={<ProductList />} />
	    <Route path="/products" element={<ProductList />} />
	  </Routes>
    </BrowserRouter>
  );
}

export default App;
