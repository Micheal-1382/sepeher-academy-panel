import { useQuery } from "@tanstack/react-query";
import { adminNewsFilterListApi } from "../../services/newsApi";

export const useAdminNewsFilterListApi = (params) => {
  return useQuery({
    queryKey: ["AdminNewsFilterList", params],
    queryFn: () => adminNewsFilterListApi(params).then((data) => data.data),
  });
};
