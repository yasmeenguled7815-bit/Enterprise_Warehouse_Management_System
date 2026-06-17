import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import WarehouseTable from "../components/WarehouseTable";

function Warehouses() {

  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1>Warehouse Management</h1>

          <WarehouseTable />

        </div>

      </div>

    </>
  );
}

export default Warehouses;