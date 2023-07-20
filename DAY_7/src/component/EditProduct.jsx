import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/product.service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
   anime: "",
    status: "",
    noofepisodes: "",
   
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Edit List</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductUpdate(e)}>
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
                    <label>enter status</label>
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

                  <button className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditProduct;