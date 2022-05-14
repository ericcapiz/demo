import React, { useState } from "react";
import Confirmation from "./Confirmation";
import { Modal } from "@material-ui/core";
import "./style.css";

const Signup = () => {
  const [email, setEmail] = useState();
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  return (
    <div className="container">
      <div className="card-container">
        <div className="x-div">
          <div className="x">X</div>
        </div>
        <div className="card-info">
          <div className="verticle">
            <div className="v1"></div>
            <div className="v"></div>
            <div className="v1"></div>
          </div>
          <div className="title">
            <h1>Get Your Style On</h1>
          </div>
          <div className="and-container">
            <div className="verticle-line"></div>
            <h2>&</h2>
            <div className="verticle-line"></div>
          </div>
          <div className="sale">
            <h1>20</h1>
            <div className="percent">
              <span>%</span>
              <p>OFF</p>
            </div>
          </div>
        </div>
        <div className="form">
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email Address"
          />
          <div className="border-btn">
            <button disabled={!email} onClick={handleOpenConfirm}>
              Sign Up
            </button>
            <Modal open={openConfirm}>
              <div>
                <Confirmation handleCloseConfirm={handleCloseConfirm} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
