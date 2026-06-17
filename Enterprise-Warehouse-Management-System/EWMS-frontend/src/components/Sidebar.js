import { Link } from "react-router-dom";
import {
  FaHome,
  FaBox,
  FaClipboardList,
  FaWarehouse,
  FaSignOutAlt
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>EWMS</h2>

      <Link to="/dashboard">
        <FaHome /> Dashboard
      </Link>

      <Link to="/products">
        <FaBox /> Products
      </Link>

      <Link to="/inventory">
        <FaClipboardList /> Inventory
      </Link>

      <Link to="/orders">
        <FaClipboardList /> Orders
      </Link>

      <Link to="/receiving">
        <FaClipboardList /> Receiving
      </Link>

      <Link to="/warehouses">
        <FaWarehouse /> Warehouses
      </Link>

      <Link to="/storagebins">
        <FaWarehouse /> Storage Bins
      </Link>

      <Link to="/">
        <FaSignOutAlt /> Logout
      </Link>

    </div>
  );
}

export default Sidebar;