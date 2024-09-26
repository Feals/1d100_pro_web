import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import "./assets/css/global.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import UserSignUp from "./pages/userSignUp";
import UserSignIn from "./pages/userSignIn";
import Library from "./pages/library";
import RpgById from "./pages/rpgById";
import Tables from "./pages/tables";
import TableById from "./pages/tableById";
import About from "./pages/about";
import RolePlayingGame from "./pages/rolePlayingGame";
import FindUs from "./pages/findUs";
import BecomeMember from "./pages/becomeMember";
import Contact from "./pages/contact";
import StratingRpg from "./pages/startingRpg";
import Books from "./pages/books";
import BorrowBook from "./pages/borrowBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <ToastContainer />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={route} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
