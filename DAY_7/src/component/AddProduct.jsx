import React, { useState } from "react";
import productService from "../service/product.service";

const AddProduct = () =>
 {
  const [product, setProduct] = useState({
    anime: "",
    status: "",
    noofepisodes: ""
    
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
          anime: "",
         status: "",
          noofepisodes: ""
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
              <div className="card-header fs-3 text-center">ANIMELIST</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                    <label>Enter anime name</label>
                    <input
                      type="text"
                      name="anime"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.anime}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter status </label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.status}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter no of episodes</label>
                    <input
                      type="text"
                      name="noofepisodes"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.noofepisodes}
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
