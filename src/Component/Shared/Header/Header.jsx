/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg my-bg-primary fixed-top">
        <div className="container">
          <a className="navbar-brand my-t-light fs-5 fw-bold" href="/">
            <span className="my-t-blue fs-3 ">D.</span>Shop
          </a>
          <button
            className="navbar-toggler text-bg-info"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">
              <li className="nav-item">
                <Link
                  className="nav-link my-t-light active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link my-t-light" to="/shop">
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link my-t-light" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link my-t-light" to="/login">
                  Login
                </Link>
              </li>
            </ul>

            <div>
              {/* email name */}
              {user?.email && <p className="text-light">{user.email}</p>}
              {/* log out */}
              {user?.email ? (
                <button className="my-btn1" onClick={handleSignOut}>
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="my-btn1">Log in</button>{" "}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
