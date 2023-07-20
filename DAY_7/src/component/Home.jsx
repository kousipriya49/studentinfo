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
        setMsg(" Deleted Successfully");
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
                <h1>
               YOUR FAVOURITE ANIME
               <br></br>
               Whatever you lose, you'll find it again
               </h1>
               <br></br>

                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">ANIME</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">NO OF EPISODES</th>
                     
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.anime}</td>
                        <td>{p.status}</td>
                        <td>{p.noofepisodes}</td>
                      
                        <td>
                          <Link to={'editProduct/'+p.id} className="btn btn-dark">
                            NEED TO CHANGE?
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger ms-1">
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