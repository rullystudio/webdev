import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, element: Element, isLoggedIn }) => {
  return isLoggedIn ? <Route path={path} element={<Element />} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
