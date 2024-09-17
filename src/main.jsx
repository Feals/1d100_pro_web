import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./assets/css/global.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import UserSignUp from "./pages/UserSignUp";
import UserSignIn from "./pages/UserSignIn";
import Library from "./pages/Library";
import RpgById from "./pages/RpgById";
import Tables from "./pages/Tables";
import TableById from "./pages/TableById";

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
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/rpg/:id",
    element: <RpgById />,
  },
  {
    path: "/tables",
    element: <Tables />,
  },
  {
    path: "/table/:id",
    element: <TableById />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={route} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
