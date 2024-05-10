import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const user = useSelector(state => state.user.user);
  const isAuthenticated = user && user.name;

  return isAuthenticated ? element : <Navigate to="/register" replace />;
};

export default PrivateRoute;