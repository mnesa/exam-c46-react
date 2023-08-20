/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import about from "../../assets/about.jpeg";
import services1 from "../../assets/services001.jpg";
import services2 from "../../assets/services002.jpg";
import services3 from "../../assets/services003.jpg";

const Home = () => {
  document.title = "Home";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="content p-1">
            <p>Dolor sit amet consectetur adipisicing elit.</p>
            <h1
              className="display-1 mb-5"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Creative and Innovative <br /> Shopping World
            </h1>
            <p>
              <Link to="/login" className="my-btn1 m-2">
                Start Now
              </Link>
              <Link to="/register" className="my-btn2">
                Buy Now
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="about mt-5">
        <div className="container p-3">
          <div>
            <div
              className="card mb-3 border-0 shadow"
              style={{ maxWidth: "540px;" }}
            >
              <div className="row g-0">
                <div
                  className="col-md-6"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={about}
                    className="img-fluid rounded-start"
                    alt="about"
                  />
                </div>
                <div
                  className="col-md-6"
                  data-aos="flip-up"
                  data-aos-duration="3000"
                >
                  <div className="card-body">
                    <p className="card-text">
                      <small className="smallword fs-5">ABOUT</small>
                    </p>
                    <h3 className="card-title text-uppercase">
                      ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    </h3>
                    <p className="card-text">
                      <small className="smallword text-bold">
                        AOS Animation
                      </small>
                    </p>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service */}
      <section className="services">
        <div className="container py-5">
          <p className="mx-auto text-center py-3">
            <h2>Services</h2>
            <h5>Every Way Easy To use</h5>
            <hr className="w-25 mx-auto border-3" />
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col" data-aos="fade-right" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={services1}
                  className="card-img-top"
                  alt="services-picture"
                />
                <div className="card-body my-bg-blue">
                  <h5 className="card-title">Card Service</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis quo ratione velit sequi aliquid laborum fuga
                    voluptates nostrum architecto itaque.
                  </p>
                  <p className="card-text">
                    <small className="smallword">Last updated</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in" data-aos-duration="3000">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={services2}
                  className="card-img-top"
                  alt="services-picture"
                />
                <div className="card-body my-bg-blue">
                  <h5 className="card-title">Any Where</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis quo ratione velit sequi aliquid laborum fuga
                    voluptates nostrum architecto itaque.
                  </p>
                  <p className="card-text">
                    <small className="smallword">Last updated</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-left" data-aos-duration="3000">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={services3}
                  className="card-img-top"
                  alt="services-picture"
                />
                <div className="card-body my-bg-blue">
                  <h5 className="card-title">Customer Care</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis quo ratione velit sequi aliquid laborum fuga
                    voluptates nostrum architecto itaque.
                  </p>
                  <p className="card-text">
                    <small className="smallword">Last updated</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
