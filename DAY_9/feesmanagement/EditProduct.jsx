import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/product.service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    feestatus: "",
    feespaid:" ",
    remaining_fees_to_be_paid: ""
   
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
        navigate("/return");
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
              <div className="card-header fs-3 text-center">UPDATE</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div className="mb-3">
                    <label>Id</label>
                    <input
                      type="numbers"
                      name="id"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.id}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>

                  <div className="mb-3">
                    <label>FEES STATUS</label>
                    <input
                      type="text"
                      name="feesstatus"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.feestatus}
                    />
                  </div>
                  <div className="mb-3">
                    <label>FEES PAID</label>
                    <input
                      type="NUMBER"
                      name="feespaid"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.feespaid}
                    />
                  </div>

                  <div className="mb-3">
                    <label>REMAINING FEES TO BE PAID</label>
                    <input
                      type="NUMBER"
                      name="remaining_fees_to_be_paid"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.remaining_fees_to_be_paid}
                    />
                  </div>
                  <button className="glow-hover">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditProduct;