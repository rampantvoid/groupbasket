import RootLayout from "@/_root/RootLayout";
import ErrorPage from "@/error-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/all",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
  },
]);
