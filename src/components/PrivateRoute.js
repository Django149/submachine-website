import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Context you create for auth

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();  // Get the current user from context
  console.log("CurrentUser:", currentUser);

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
