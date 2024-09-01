import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Accueil from "./pages/Accueil";
import "./css/global.css";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
