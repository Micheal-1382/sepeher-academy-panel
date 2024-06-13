import { useQuery } from "@tanstack/react-query";
import { userListApi } from "../../services/userApi";

export const useUserListApi = (params) => {
  return useQuery({
    queryKey: ["userList", params],
    queryFn: () => userListApi(params).then((data) => data.data),
  });
};
