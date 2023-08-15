/* eslint-disable no-unused-vars */
import "./Login.css";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { singIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("taka");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  // google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // github
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="w-50 my-mt mb-5 p-5 shadow mx-auto my-bg-secondary text-light">
        <form onSubmit={handleSubmit}>
          <h3>Please Login Here</h3>

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
            Login
          </button>
        </form>
      </div>
      <div className="mx-auto shadow w-50 my-bg-secondary p-2 mb-3 ">
        <button
          className="btn my-bg-primary text-light w-100 fs-5"
          onClick={handleGoogleSignIn}
        >
          {" "}
          <i className="fa-brands fa-google"></i>
          Sign in with Google
        </button>
      </div>

      <div className="mx-auto shadow w-50 my-bg-secondary p-2 mb-5 ">
        <button
          className="btn my-bg-primary text-light w-100 fs-5"
          onClick={handleGithubSignIn}
        >
          {" "}
          <i className="fa-brands fa-github"></i>
          Sign in with Github
        </button>
      </div>
    </>
  );
};

export default Login;
