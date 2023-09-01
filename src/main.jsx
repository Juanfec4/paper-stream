import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/navigation/navbar/index.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviePage from "./pages/movie/index.jsx";
import CategoryPage from "./pages/category/index.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/movie/:id", element: <MoviePage /> },
      { path: "/category/:id", element: <CategoryPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
