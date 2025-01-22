import { Navigate , Outlet } from "react-router-dom";

const ProtectedRoute = ({ children } : any) => {
    const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? <Outlet/> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
