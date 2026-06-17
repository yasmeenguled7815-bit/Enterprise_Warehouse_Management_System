import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
	<div className="navbar">

	      <h2>Enterprise Warehouse Management System</h2>

	      <div className="profile">
	        Admin
	      </div>

	    </div>
  );
};

export default Navbar;