import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./ProductList.css"; // shared styles

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
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">📦</span>
        <span className="navbar-title">EWMS</span>
        <span className="navbar-subtitle">Enterprise Warehouse</span>
      </div>

      <ul className="navbar-links">
        <li>
          <Link
            to="/dashboard"
            className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`nav-link ${isActive("/products") ? "active" : ""}`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/add-product"
            className={`nav-link ${isActive("/add-product") ? "active" : ""}`}
          >
            Add Product
          </Link>
        </li>
      </ul>

      <button className="btn-logout" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;