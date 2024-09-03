import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import "./assets/css/global.css";
import { Provider } from "react-redux";
import store from "./store/store";
import UserSignUp from "./pages/UserSignUp";
import UserSignIn from "./pages/UserSignIn";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signup",
    element: <UserSignUp />,
  },
  {
    path: "/signin",
    element: <UserSignIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </StrictMode>
);
