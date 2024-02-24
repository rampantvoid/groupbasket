import RootLayout from "@/_root/RootLayout";
import Home from "@/_root/pages/Home";
import ErrorPage from "@/error-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
