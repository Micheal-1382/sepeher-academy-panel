import { useNavigate } from "react-router-dom";
import { revokeTokenAndRoles } from "./utils/revokeToken";
import { isUserAuthenticated } from "./utils/isUserAuthenticated";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();

  if (isUserAuthenticated()) {
    return children;
  } else {
    revokeTokenAndRoles();
    return navigate("/login", { replace: true });
  }
}
