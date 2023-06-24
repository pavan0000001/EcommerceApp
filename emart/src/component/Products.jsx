import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import { NavLink } from 'react-router-dom';
import './Products.css'; // Import the CSS file for styling

const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componetMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componetMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
      }

      return () => {
        componetMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="loading-container">
        <Skeleton count={4} height={350} />
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setfilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <div className="products-container">
        <div className="buttons">
          <button className="btn btn-outline-dark" onClick={() => setfilter(data)}>
            All
          </button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
        </div>

        <div className="products-grid">
          {filter.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                <p className="card-price">${product.price}</p>
                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                  Buy Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
