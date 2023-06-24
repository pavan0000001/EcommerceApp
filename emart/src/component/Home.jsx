import React from 'react';
import Products from './Products';
import Login from './Login';
import Register from './Register';



const Home = () => {

  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="Background" height="750px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0" style={{ color: 'GrayText' }}>NEW SEASON ARRIVALS</h5>

            <p className="card-text lead fs-2" style={{ color: 'darkred' }}>
              CHECK OUT ALL THE TRENDS
            </p>
          </div>

        </div>
      </div>
      <Products />
      <Login/>
      <Register/>
    
      

    </div>

  );
}

export default Home;