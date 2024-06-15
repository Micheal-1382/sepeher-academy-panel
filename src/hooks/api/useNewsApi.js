import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  adminNewsFilterListApi,
  deleteNewsFileApi,
} from "../../services/newsApi";
import { toast } from "react-toastify";

export const useAdminNewsFilterListApi = (params) => {
  return useQuery({
    queryKey: ["AdminNewsFilterList", params],
    queryFn: () => adminNewsFilterListApi(params).then((data) => data.data),
  });
};

export const useDeleteNewsFileApi = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => deleteNewsFileApi(params),
    onSuccess: () => {
      toast.success("خبر موردنظر با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["AdminNewsFilterList"],
      });
      closeModal();
    },
  });
};
