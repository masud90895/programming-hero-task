import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {

  let location = useLocation();
  const { user,loading } = useContext(AuthContext);
    const token = localStorage.getItem("token")

    if(loading){
        return <h1>Loading....</h1>
    }

  if (user?.email && token) {
    return children;
  }
  return <Navigate to="../login" state={{ from: location }} replace />;
};


export default PrivetRoutes;