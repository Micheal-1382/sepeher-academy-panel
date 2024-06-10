import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/mainLayout/main-layout";
import Courses from "./pages/courses";
import CourseCategories from "./pages/course-categories";

import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exception";
import Login, { loginAction } from "./components/Templates/Login/login";
import Register, {
  registerAction,
} from "./components/Templates/Register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <UnhandledException />,
    children: [
      {
        index: true,
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <></>,
      },
      {
        path: "course-categories",
        element: <CourseCategories />,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
