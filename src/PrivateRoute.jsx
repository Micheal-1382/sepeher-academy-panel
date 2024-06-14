import { useNavigate } from "react-router-dom";
import { revokeTokenAndRoles } from "./utils/revokeToken";
import { isUserAuthenticated } from "./utils/isUserAuthenticated";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated()) {
      revokeTokenAndRoles();
      return navigate("/login", { replace: true });
    }
  }, []);

  return children;
}
