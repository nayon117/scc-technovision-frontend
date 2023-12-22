import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Faq from "../pages/faq/Faq";
import About from "../pages/about/About";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/dashboard/Profile";
import CreateTask from "../pages/dashboard/CreateTask";
import Status from "../pages/dashboard/Status";
import TaskInfo from "../pages/dashboard/TaskInfo";
import UpdateTask from "../components/dashboard/UpdateTask";

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
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "create-task",
        element: <CreateTask />,
      },
      {
        path: "status",
        element: <Status />,
      },
      {
        path: "task-info",
        element: <TaskInfo />,
      },
      {
        path: "UpdateTask/:id",
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://scc-technovision-backend.vercel.app/create-task/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
