import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "/contact",
        element: <Contact/> ,
      },
    ],
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/register',
    element:<Register/>
  },
]);

export default router;
