/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { children, useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRouter;
