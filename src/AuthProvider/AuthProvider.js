import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      setLoading(true)
        fetch(`${process.env.REACT_APP_serverURL}/api/getUserData`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.status === "ok"){
        setUser(data.data)
        setLoading(false)
      }
     else if(data.status === "error"){
      toast.error(data.data)
    }})
    },[])

    const authInfo ={user,loading}

    
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;