import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      //   {
      //     path: "/favorite",
      //     element: <FavoritePage />,
      //   },
      //   {
      //     path: "/movie/:id",
      //     element: <MovieDetail />,
      //   },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
