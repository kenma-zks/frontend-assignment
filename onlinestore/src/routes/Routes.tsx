import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/header";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
