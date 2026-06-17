import { useState } from "react";
import axios from "../api/axiosConfig";

function EditProduct({ product, refresh, close }) {

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value
    });
  };

  const updateProduct = async () => {
    try {
      await axios.put(`/products/${updatedProduct.id}`, updatedProduct, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      refresh();
      close();

    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div className="form-box">

      <h2>Edit Product</h2>

      <input
        name="name"
        value={updatedProduct.name}
        onChange={handleChange}
      />

      <input
        name="sku"
        value={updatedProduct.sku}
        onChange={handleChange}
      />

      <input
        name="price"
        value={updatedProduct.price}
        onChange={handleChange}
      />

      <input
        name="quantity"
        value={updatedProduct.quantity}
        onChange={handleChange}
      />

      <button onClick={updateProduct}>
        Update
      </button>

      <button onClick={close}>
        Cancel
      </button>

    </div>
  );
}

export default EditProduct;