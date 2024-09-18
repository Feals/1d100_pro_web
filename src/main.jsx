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
import About from "./pages/About";
import RolePlayingGame from "./pages/RolePlayingGame";
import FindUs from "./pages/FindUs";
import BecomeMember from "./pages/BecomeMember";
import Contact from "./pages/Contact";
import StratingRpg from "./pages/StratingRpg";
import Books from "./pages/Books";
import BorrowBook from "./pages/BorrowBook";

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
    path: "/about",
    element: <About />,
  },
  {
    path: "/role-playing-game",
    element: <RolePlayingGame />,
  },
  {
    path: "/find-us",
    element: <FindUs />,
  },
  {
    path: "/become-member",
    element: <BecomeMember />,
  },
  {
    path: "/starting-rpg",
    element: <StratingRpg />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/borrow-book",
    element: <BorrowBook />,
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
