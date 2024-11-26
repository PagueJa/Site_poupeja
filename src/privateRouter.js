import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const token = localStorage.getItem('token');
  
    const isTokenValid = (token) => {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
      } catch (error) {
        return false;
      }
    };
  
    if ((!token || !isTokenValid(token))) {

      return <Navigate to="/login" replace />;
      
    }
  
    return <Component {...rest} />;
  };
  
  export default PrivateRoute;
