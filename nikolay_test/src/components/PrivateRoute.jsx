import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateRoute = ({ element }) => {
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();


  if(!user || !user.name){
    toast.error('You need to be auth')
    return navigate('/register')
  }
  return element
};

export default PrivateRoute;