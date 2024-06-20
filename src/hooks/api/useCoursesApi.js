import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  activeAndDeactiveCourseApi,
  addCourseGroupApi,
  courseDetailsApi,
  courseGroupApi,
  courseGroupDetailsApi,
  courseListApi,
  courseReserveApi,
  courseReserveDetailsApi,
  courseStatusApi,
  deleteCourseApi,
  deleteCourseGroupApi,
  deleteCourseReserveApi,
  getCourseUserListApi,
  updateCourseGroupApi,
  updateCourseStatusApi,
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

export const useDeleteCourseReserveApi = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteCourseReserveApi(id),
    onSuccess: () => {
      toast.success("دانشجو رزرو شده با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["CourseReserve"],
      });
      closeModal();
    },
  });
};

export const useCourseDetailsApi = (id) => {
  return useQuery({
    queryKey: ["CourseDetails", id],
    queryFn: () => courseDetailsApi(id).then((data) => data.data),
  });
};

export const useActiveAndDeactiveCourseApi = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => activeAndDeactiveCourseApi(payload),
    onSuccess: () => {
      toast.success("عملیات با موفقیت انجام شد");
      closeModal();
      queryClient.invalidateQueries({
        queryKey: ["courseList"],
      });
    },
  });
};

export const useDeleteCourseApi = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => deleteCourseApi(payload),
    onSuccess: () => {
      toast.success("دوره موردنظر با موفقیت حذف شد");
      closeModal();
      queryClient.invalidateQueries({
        queryKey: ["courseList"],
      });
    },
  });
};

export const useUpdateCourseStatusApi = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => updateCourseStatusApi(payload),
    onSuccess: () => {
      toast.success("وضعیت دوره موردنظر با موفقیت بروزرسانی شد");
      closeModal();
      queryClient.invalidateQueries({
        queryKey: ["courseList"],
      });
    },
  });
};

export const useCourseStatusApi = () => {
  return useQuery({
    queryKey: ["courseStatus"],
    queryFn: () => courseStatusApi().then((data) => data.data),
  });
};

export const useGetCourseUserListApi = (params) => {
  return useQuery({
    queryKey: ["CourseUserList", params],
    queryFn: () => getCourseUserListApi(params).then((data) => data.data),
  });
};
