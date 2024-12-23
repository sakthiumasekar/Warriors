import React from "react";
import "./Profile.css";

import logowhite from "../images/logowhite.png";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <>
      <div className="pcontainer">
        <div className="pheader">
          <img src={logowhite} className="plogo" alt="logo" />
        <nav className="pnav">
          <ul className="pul">
            <li className="pli"> 
              <Link to="/">
                <i className="fas fa-home"></i>
              </Link>
            </li>
            <li className="pli">
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
            <li className="pli">
              <Link to="/profile">
                <i className="fas fa-user"></i>
              </Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className="content">
        <div className="pcard">
          <div className="chead">
          <div className="picon"><i className="fas fa-edit"></i></div>
          <div className="userprofile"></div>
          </div>
          <div className="ptext">
            
            <div className="form1">
              <form>
                <label htmlFor="student-name">Name:</label>
                <input type="text" id="student-name" value="vidhya" />
                <br />
                <br />

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value="vidhyashree@0310" />
                <br />
                <br />

                <label htmlFor="phoneno">Phone Number:</label>
                <input type="text" id="phoneno" value="283778399990" />
                <br />
                <br />

                <label htmlFor="payment-mode">Mode of Payment:</label>
                <input type="text" id="payment-mode" value="Cash" />
                <br />
                <br />
              </form>
            </div>

            <div className="buttons">
              <button type="button" className="fbutton">
                Favorite Order
              </button>
              <button type="button" className="orderhistory">
                Order History
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

    </>
  );
}

export default Profile;
