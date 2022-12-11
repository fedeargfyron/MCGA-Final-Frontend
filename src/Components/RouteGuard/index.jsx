
import React from 'react';
import { Navigate } from 'react-router-dom';
 
const RouteGuard = ({ children }) => {
 
   const  hasJWT = () => {
        
        let token = JSON.parse(localStorage.getItem("user"));

        if(!token)
            return false;

        if (Date.now() >= token.expirationAt * 1000) {
            localStorage.removeItem('user');
            return false;
        }
        return true;
   }

   return hasJWT() 
        ? children
        : <Navigate to={{ pathname: '/login' }} />
};
 
export default RouteGuard;