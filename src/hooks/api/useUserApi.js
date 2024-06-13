import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUserApi, userListApi } from "../../services/userApi";
import { toast } from "react-toastify";

export const useUserListApi = (params) => {
  return useQuery({
    queryKey: ["userList", params],
    queryFn: () => userListApi(params).then((data) => data.data),
  });
};

export const useCreateUserApi = (reset) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => createUserApi(payload),
    onSuccess: () => {
      toast.success("کاربر موردنظر با موفقیت ساخته شد");
      queryClient.invalidateQueries({
        queryKey: ["userList"],
      });
      reset()
    },
  });
};
