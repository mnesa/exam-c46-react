/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/UserContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("taka");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const number = form.number.value;
    const address = form.address.value;
    console.log(name, email, password, number, address);

    createUser(email, password, number, address)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="my-mt">
      <div className="w-50 my-5 p-5 shadow mx-auto my-bg-secondary text-light">
        <form onSubmit={handleSubmit}>
          <h3>Please Register Here</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              name="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="inputAddress"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            className="btn my-bg-primary text-light w-100 fs-5"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
