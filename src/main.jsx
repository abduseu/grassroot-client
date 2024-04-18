import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
import OrderPage from "./pages/OrderPage";
import Private from "./components/private";
import SinglePage from "./pages/SinglePage";
import CartPage from "./pages/CartPage";
import ManagerProfile from "./pages/manager/ManagerProfile";
import Add from "./pages/manager/Add";
import Update from "./pages/manager/Update";
import ManageItems from "./pages/manager/ManageItems";


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
        path: '/items/:id',
        element: <SinglePage />,
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
        path: '/cart',
        element: <Private><CartPage /></Private>,
      },

      //manager
      {
        path: '/manager',
        element: <ManagerProfile />,
      },
      {
        path: '/orders',
        element: <Private><OrderPage /></Private>,
      },
      {
        path: '/manage',
        element: <ManageItems />,
      },
      {
        path: '/add',
        element: <Add />,
      },
      {
        path: '/update/:id',
        element: <Update />,
      },
    ]
  }
])


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);