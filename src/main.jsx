import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./providers/AuthProvider";
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ManagePage from "./pages/ManagePage";
import OrderPage from "./pages/OrderPage";
import AddPage from "./pages/AddPage";
import UpdatePage from "./pages/UpdatePage";
import Private from "./components/private";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <RegistrationPage />,
      },
      {
        path: '/orders',
        element: <Private><OrderPage /></Private>,
      },
      {
        path: '/manage',
        element: <ManagePage />,
      },
      {
        path: '/add',
        element: <AddPage />,
      },
      {
        path: '/update/:id',
        element: <UpdatePage/>,
      },

    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);