import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StorageBinTable from "../components/StorageBinTable";


function StorageBins() {

  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1>Storage Bin Management</h1>

          <StorageBinTable />

        </div>

      </div>

    </>
  );
}

export default StorageBins;