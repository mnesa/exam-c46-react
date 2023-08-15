/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="my-bg-primary p-3 my-0">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 border-0 text-light">
                <div className="card-body my-bg-primary">
                  <h5 className="card-title">
                    <span className="my-t-blue fs-3 ">D.</span>Shop{" "}
                    <small>all the World</small>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nisi aliquam excepturi voluptatem dolor architecto cum fuga
                    et ipsum nulla exercitationem!
                  </p>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nisi aliquam excepturi voluptatem dolor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-light">
                <div className="card-body my-bg-primary">
                  <h5 className="card-title mx-4 un">Community</h5>
                  <p className="card-text">
                    <ul>
                      <li>Term and Condition</li>
                      <li>Policy andPrivacy</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Aipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Aipsum dolor sit.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-light">
                <div className="card-body my-bg-primary">
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text">
                    151/7, level-4, Goodluck Center, (Opposite SIBL Foundation
                    Hospital), Panthapath Signal, Green Road, Dhanmondi,
                    Dhaka-1205. Phone: 09639399399 / 01948858258
                  </p>
                  <p className="card-text icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-facebook-messenger"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin-in"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-bg-dark my-0">
        <p className="text-center text-light p-3">
          Copyright &copy; 2023. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
