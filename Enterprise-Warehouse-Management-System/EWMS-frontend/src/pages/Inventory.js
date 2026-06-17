import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InventoryTable from "../components/InventoryTable";

function Inventory() {

  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1>Inventory Management</h1>

          <InventoryTable />

        </div>

      </div>
    </>
  );
}

export default Inventory;