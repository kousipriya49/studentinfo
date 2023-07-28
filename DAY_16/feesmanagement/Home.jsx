import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Deleted Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
              <h1>FEES MANAGEMENT</h1>
              <br />
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
            </div>

            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">FEES STATUS</th>
                    <th scope="col">FEES PAID</th>
                    <th scope="col">REMAINING_FEES_TO_BE_PAID</th>
                    <th scope="col">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((p, index) => (
                    <tr key={p.id}>
                      <td>{index + 1}</td>
                      <td>{p.name}</td>
                      <td>{p.feestatus}</td>
                      <td>{p.feespaid}</td>
                      <td>{p.remaining_fees_to_be_paid}</td>
                      <td>
                        <button  className="btn btn-sm btn-danger ms-1">
                        <Link to={`/editProduct/${p.id}`} >
                          UPDATE
                        </Link>
                        </button>
                        <br />
                        <button
                          onClick={() => deleteProduct(p.id)}
                          className="btn btn-sm btn-danger ms-1"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
