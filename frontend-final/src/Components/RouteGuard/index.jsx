
import React from 'react';
import { Navigate } from 'react-router-dom';
 
const RouteGuard = ({ children }) => {
 
   const  hasJWT = () => {
        
        let token = localStorage.getItem("user");

        if(!token)
            return false;
        
        //Validar expiration
        return true;
   }

   return hasJWT() 
        ? children
        : <Navigate to={{ pathname: '/login' }} />
};
 
export default RouteGuard;