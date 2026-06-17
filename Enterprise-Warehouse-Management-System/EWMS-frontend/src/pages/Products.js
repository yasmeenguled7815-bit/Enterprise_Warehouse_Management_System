import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

function Products() {

  return (
    <>
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1>Products</h1>

          <ProductList />

        </div>

      </div>
    </>
  );
}

export default Products;