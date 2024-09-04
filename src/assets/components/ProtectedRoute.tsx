import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// interface ProtectedRouteProps {
//   redirectTo: string;
// }

export const ProtectedRoute: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  // If the user is authenticated, redirect to login page
  if (user) {
    return <Navigate to="/" />;
  }

  // If authenticated, render child components
  return <Outlet />;
};

// export default ProtectedRoute;
