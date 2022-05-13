import React from "react";
import "./style.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="x-div">
          <div className="x">X</div>
        </div>
        <div className="card-info">
          <div className="title">
            <div className="verticle-line"></div>
            <div className="verticle-line"></div>
            <div className="verticle-line"></div>
            <h1>Get Your Style On</h1>
          </div>
          <div className="and-div">
            <div className="verticle-line"></div>
            <h2>&</h2>
            <div className="verticle-line"></div>
          </div>
          <div className="20%">
            <h1>20</h1>
            <div className="percent">
              <h2>%</h2>
              <h3>off</h3>
            </div>
            <form>
              <div className="form">
                <input type="email" placeholder="Email Address" />
                <button>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
