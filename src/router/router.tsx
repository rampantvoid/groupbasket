import RootLayout from "@/_root/RootLayout";
import Cart from "@/_root/pages/Cart";
import Home from "@/_root/pages/Home";
import Product from "@/_root/pages/Product";
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
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
