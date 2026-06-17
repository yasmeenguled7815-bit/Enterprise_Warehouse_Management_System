import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1>Dashboard</h1>

          <DashboardCards />

          <div className="dashboard-sections">

            <div className="recent-orders">

              <h2>Recent Orders</h2>

              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>1001</td>
                    <td>ABC Pvt Ltd</td>
                    <td>Packed</td>
                  </tr>

                  <tr>
                    <td>1002</td>
                    <td>XYZ Ltd</td>
                    <td>Pending</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <div className="alerts">

              <h2>Low Stock Alerts</h2>

              <ul>

                <li>Keyboard - 5 Left</li>

                <li>Mouse - 3 Left</li>

                <li>Monitor - 2 Left</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Dashboard;