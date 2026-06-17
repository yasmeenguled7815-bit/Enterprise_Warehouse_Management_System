import "../styles/Dashboard.css";

function DashboardCards() {
  return (

    <div className="cards">

      <div className="card">

        <h3>Total Products</h3>

        <h1>120</h1>

      </div>

      <div className="card">

        <h3>Total Inventory</h3>

        <h1>850</h1>

      </div>

      <div className="card">

        <h3>Total Orders</h3>

        <h1>42</h1>

      </div>

      <div className="card">

        <h3>Warehouses</h3>

        <h1>5</h1>

      </div>

    </div>

  );
}

export default DashboardCards;