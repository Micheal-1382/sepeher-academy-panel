import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  adminNewsFilterListApi,
  createNewsCategoryApi,
  deleteNewsFileApi,
  getAdminNewsCommentsApi,
  getAdminRepliesCommentsApi,
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

export const useGetAdminNewsCommentsApi = (params) => {
  return useQuery({
    queryKey: ["GetAdminNewsComments", params],
    queryFn: () => getAdminNewsCommentsApi(params).then((data) => data.data),
  });
};

export const useGetAdminRepliesCommentsApi = (params) => {
  return useQuery({
    queryKey: ["GetAdminRepliesComments", params],
    queryFn: () => getAdminRepliesCommentsApi(params).then((data) => data.data),
  });
};

export const useCreateNewsCategoryApi = (reset) => {
  return useMutation({
    mutationFn: (payload) => createNewsCategoryApi(payload),
    onSuccess: () => {
      toast.success("دسته بندی جدید با موفقیت ساخته شد");
      reset();
    },
  });
};
