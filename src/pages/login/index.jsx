import React, { useEffect } from "react";
import LoginBox from "../../components/Templates/Login/LoginBox";
import { useNavigate } from "react-router-dom";
import { isUserAuthenticated } from "../../utils/isUserAuthenticated";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserAuthenticated()) {
      navigate(-1);
    }
  }, []);

  return <LoginBox />;
}
