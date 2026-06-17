import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ReceivingTable from "../components/ReceivingTable";

function Receiving() {

  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1>Receiving Management</h1>

          <ReceivingTable />

        </div>

      </div>

    </>
  );
}

export default Receiving;