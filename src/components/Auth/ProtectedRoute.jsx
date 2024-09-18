import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
    const user = localStorage.getItem("token");
    return user ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;