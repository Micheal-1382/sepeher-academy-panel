import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addCourseGroupApi,
  courseGroupApi,
  courseGroupDetailsApi,
  courseListApi,
  courseReserveApi,
  courseReserveDetailsApi,
  deleteCourseGroupApi,
  updateCourseGroupApi,
} from "../../services/coursesApi";
import { toast } from "react-toastify";

export const useCourseListApi = (params) => {
  return useQuery({
    queryKey: ["courseList", params],
    queryFn: () => courseListApi(params).then((data) => data.data),
  });
};

export const useCourseGroupApi = (params) => {
  return useQuery({
    queryKey: ["CourseGroup", params],
    queryFn: () => courseGroupApi(params).then((data) => data.data),
  });
};

export const useAddCourseGroupApi = (reset) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => addCourseGroupApi(payload),
    onSuccess: () => {
      toast.success("دسته بندی موردنظر با موفقیت اضافه شد");
      queryClient.invalidateQueries({
        queryKey: ["CourseGroup"],
      });
      reset();
    },
  });
};

export const useDeleteCourseGroupApi = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteCourseGroupApi(id),
    onSuccess: () => {
      toast.success("دسته بندی با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["CourseGroup"],
      });
      closeModal();
    },
  });
};

export const useUpdateCourseGroupApi = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => updateCourseGroupApi(payload),
    onSuccess: () => {
      toast.success("دسته بندی با موفقیت آپدیت شد");
      queryClient.invalidateQueries({
        queryKey: ["CourseGroup"],
      });
      closeModal();
    },
  });
};

export const useCourseGroupDetailsApi = (params) => {
  return useQuery({
    queryKey: ["CourseGroup", params],
    queryFn: () => courseGroupDetailsApi(params).then((data) => data.data),
  });
};

export const useCourseReserveDetailsApi = (CourseId) => {
  return useQuery({
    queryKey: ["CourseReserveDetails", CourseId],
    queryFn: () => courseReserveDetailsApi(CourseId).then((data) => data.data),
  });
};

export const useCourseReserveApi = () => {
  return useQuery({
    queryKey: ["CourseReserve"],
    queryFn: () => courseReserveApi().then((data) => data.data),
  });
};
