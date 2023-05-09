import React from "react";
import {Navigate} from "react-router-dom";

function ProtectedRoute({ component: Component, isLoggedIn, ...props }) {
    console.log(isLoggedIn);
    return (isLoggedIn ? <Component {...props} /> : <Navigate to='/'/>);
}

export default ProtectedRoute;