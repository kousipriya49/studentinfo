import React, { useState } from "react";
import productService from "../service/product.service";
import "./add1.css";
const AddProduct = () =>
 {
  const [product, setProduct] = useState({
    name: "",
    feestatus: "",
   feespaid: "",
   remaining_fees_to_be_paid:""
    
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Added Successfully");
        setMsg(" Added Successfully");
        setProduct({
          name: "",
          feestatus: "",
         feespaid: "",
         remaining_fees_to_be_paid:""
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">STUDENT ATTENDENCE MANAGEMENT</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                    <label>Enter  name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter feestatus </label>
                    <input
                      type="text"
                      name="feestatus"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.feestatus}
                    />
                  </div>
                  <div className="mb-3">
                    <label>enter fees paid</label>
                    <input
                      type="Integer"
                      name="feespaid"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.feespaid}
                    />
                  </div>
                  <div className="mb-3">
                    <label>enter remaining_fees_to_be_paid</label>
                    <input
                      type="Integer"
                      name="remaining_fees_to_be_paid"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product. remaining_fees_to_be_paid}
                    />
                  </div>

                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddProduct;
