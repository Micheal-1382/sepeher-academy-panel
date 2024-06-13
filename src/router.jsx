import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "./layouts/identity-layout";
import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exception";
import LoginPage from "./pages/login";
import CoursesPage from "./pages/courses";
import PrivateRoute from "./PrivateRoute";
import NewsPage from "./pages/news";
import CommentPage from "./pages/comments/index";
import MainLayout from "./layouts/mainLayout";
import CoursesCategoriesPage from "./pages/courses-categories";
import AddCourseCategoriesPage from "./pages/add-course-categories";
import UsersPage from "./pages/users";
import AddUserPage from "./pages/add-user";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    errorElement: <UnhandledException />,
    children: [
      {
        index: true,
        element: <CoursesPage />,
      },
      {
        path: "course-categories",
        element: <CoursesCategoriesPage />,
      },
      {
        path: "add-course-categories",
        element: <AddCourseCategoriesPage />,
      },
      {
        path: "courses/:id",
        element: <></>,
      },
      {
        path: "comments",
        element: <CommentPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "add-user",
        element: <AddUserPage />,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
        errorElement: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
