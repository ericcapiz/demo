import React from "react";
import "./style.css";

const Confirmation = () => {
  return (
    <div className="container">
      <div className="confirm-container">
        <div className="confirm-card">
          <div className="x-div">
            <div className="x">X</div>
          </div>
          <div className="confirm-info">
            <div className="confirm-title">
              <h1>Just Like Old Friends</h1>
              <div className="design">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="big-circle"></div>
                <div className="circle"></div>
              </div>
              <p>
                We'll keep you updated on any deals, news, or gossip that comes
                our way!
              </p>
              <div className="confirm-btn">
                <button>Go Shop!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
