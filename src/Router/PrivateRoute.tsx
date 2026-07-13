/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }:{children:ReactNode}) => {
  //     const {user,loading}=useContext(AuthContext)
  //   const location=useLocation();

  //   if(loading){
  //     return <LoadingPage></LoadingPage>;
  //   }

  //     if(user){
  //         return children;
  //     }

  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
