import Cookies from "js-cookie";

export const revokeTokenAndRoles = () => {
  Cookies.remove("token");
  Cookies.remove("roles");
};
