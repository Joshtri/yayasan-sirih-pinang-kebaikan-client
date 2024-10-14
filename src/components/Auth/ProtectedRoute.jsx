// import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/Auth'; // Import fungsi isAuthenticated

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const role = localStorage.getItem('role');
  const tokenExists = isAuthenticated(); // Gunakan fungsi yang sudah diperbaiki

  console.log('Token exists:', tokenExists); // Debugging
  console.log('User role:', role); // Debugging
  console.log('Allowed roles:', allowedRoles); // Debugging

  if (!tokenExists) {
    console.warn('User not authenticated. Redirecting to /auth/login.');
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    console.warn(`Role ${role} not authorized. Redirecting to /dashboard.`);
    return <Navigate to="/auth/login" replace />;
  }

  return <Component />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;
