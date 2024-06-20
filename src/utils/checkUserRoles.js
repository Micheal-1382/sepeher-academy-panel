import Cookies from "js-cookie";

export const checkUserRoles = () => {
  const roles = Cookies.get("roles");

  const isAdmin = roles?.includes("Administrator");
  const isTeacher = roles?.includes("Teacher");

  return {
    isAdmin,
    isTeacher,
  };
};
