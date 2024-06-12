import Cookies from "js-cookie";
import { userRols } from "../constants/userRoles";

export const isUserAuthenticated = () => {
  const token = Cookies.get("token");
  const roles = Cookies.get("roles");

  if (Boolean(roles) && token?.trim()) {
    if (
      roles.includes(userRols.ADMINISTRATOR) ||
      roles.includes(userRols.TEACHER)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
