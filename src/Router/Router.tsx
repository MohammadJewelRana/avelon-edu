import { createBrowserRouter } from "react-router-dom";
 
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default Router;
