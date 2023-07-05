import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/header";

const router = createBrowserRouter([
  { element: <Header />, children: [{ path: "/", element: <Home /> }] },
]);

export default router;
