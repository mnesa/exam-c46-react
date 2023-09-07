import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Checkout = () => {
  const { _id, price, name } = useLoaderData();
  const { createUser } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.first.value} ${form.last.value}`;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(name, phone, email, message);
  };
  return (
    <div className="container my-mt py-5">
      <h3 className="w-50 mx-auto mb-4">Checkout {name}</h3>
      <form onSubmit={handlePlaceOrder}>
        <div className="row container w-75 mx-auto">
          <div className="col-6 my-2">
            <input
              type="text"
              name="first"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-6 my-2">
            <input
              type="text"
              name="last"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div className="col-12 my-2">
            <input
              type="number"
              name="phone"
              className="form-control"
              placeholder="Phone"
              aria-label="number"
            />
          </div>
          <div className="col-12 my-2">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              aria-label="email"
            />
          </div>
          <div className="col-12 my-2">
            <textarea
              className="form-control"
              name="message"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <input
            className="btn btn-outline-success w-75 mx-auto"
            type="submit"
            value="place you order"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
