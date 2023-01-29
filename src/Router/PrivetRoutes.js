import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {

  const navigate = useNavigate()
  const { user,loading } = useContext(AuthContext);
    const token = localStorage.getItem("token")

    

    if(loading){
        return <h1>Loading....</h1>
    } else if (user?.email || token) {
        return children;
    }else{
        return navigate("../login");
    }
    
    
};


export default PrivetRoutes;