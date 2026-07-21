import { createBrowserRouter } from "react-router-dom";
 
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
