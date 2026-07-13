import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="    ">
      <RouterProvider router={Router}></RouterProvider>
    </div>

    {/* <AuthProvider>
        <div className='max-w-6xl  mx-auto bg-black text-white'>
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </AuthProvider> */}
  </StrictMode>,
);
