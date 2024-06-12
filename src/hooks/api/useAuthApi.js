import { useNavigate } from "react-router-dom";
import { loginUserApi } from "../../services/authApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { userRols } from "../../constants/userRoles";

export const useLoginUserApi = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (payload) => loginUserApi(payload),
    onSuccess: (res) => {
      try {
        const roles = res.data.roles;
        switch (Boolean(roles)) {
          case true: {
            if (
              roles.includes(userRols.ADMINISTRATOR) ||
              roles.includes(userRols.TEACHER)
            ) {
              Cookies.set("token", res.data.token);
              Cookies.set("roles", roles);
              toast.success("با موفقیت وارد حساب شدید");
              navigate("/");
            } else {
              throw new Error("شما به این پنل دسترسی ندارید.");
            }
            break;
          }
          case false: {
            throw new Error("شما به این پنل دسترسی ندارید.");
          }
        }
      } catch (err) {
        toast.error(err.message);
      }
    },
  });
};
