import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const ProtectedRoute: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  // If the user is not authenticated, redirect to login page
  if (!user) {
    return <Navigate to="/register" />;
  }

  // If authenticated, render child components
  return <Outlet />;
};

// export default ProtectedRoute;
