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
import CategoryDetailsPage from "./pages/courses-categories/[id]";
import NewsDetailsPage from "./pages/news/[NewsId]";
import AddNewsCategoryPage from "./pages/add-news-categories";
import CourseReservesPage from "./pages/course-reserves";
import CourseDetailsPage from "./pages/courses/[id]";
import AddCoursePage from "./pages/add-course";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    // errorElement: <UnhandledException />,
    children: [
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "add-course",
        element: <AddCoursePage />,
      },
      {
        path: "course-categories",
        element: <CoursesCategoriesPage />,
      },
      {
        path: "course-categories/:Id",
        element: <CategoryDetailsPage />,
      },
      {
        path: "add-course-categories",
        element: <AddCourseCategoriesPage />,
      },
      {
        path: "course-reserves",
        element: <CourseReservesPage />,
      },
      {
        path: "courses/:id",
        element: <CourseDetailsPage />,
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
        path: "add-news-categories",
        element: <AddNewsCategoryPage />,
      },
      {
        path: "news/:NewsId",
        element: <NewsDetailsPage />,
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
