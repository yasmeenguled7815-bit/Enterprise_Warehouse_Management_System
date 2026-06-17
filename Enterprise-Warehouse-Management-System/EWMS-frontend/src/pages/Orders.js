import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import OrderTable from "../components/OrderTable";

function Orders() {

  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1>Order Management</h1>

          <OrderTable />

        </div>

      </div>

    </>
  );
}

export default Orders;