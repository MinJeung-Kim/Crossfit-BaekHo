import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/App.global.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm/LoginForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import { AuthContextProvider } from "./context/AuthContext";
import { ModeProvider } from "./context/ModeContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      { path: "/users", element: <Users /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthContextProvider>
        <ModeProvider>
          <RouterProvider router={router} />
        </ModeProvider>
      </AuthContextProvider> 
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
