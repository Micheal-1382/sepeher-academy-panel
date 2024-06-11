import { useNavigate } from "react-router-dom";
import { loginUserApi } from "../../services/authApi";
import { useMutation } from "@tanstack/react-query";

export const useLoginUserApi = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (payload) => loginUserApi(payload),
    onSuccess: (res) => {
      //   Cookies.set("token", res.data.token);
      //   toast.success("با موفقیت وارد حساب شدید");
      navigate("/");
    },
  });
};
