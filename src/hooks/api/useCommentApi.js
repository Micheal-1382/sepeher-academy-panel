import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  acceptCourseCommentApi,
  commentListApi,
  commentManagmentTeacherApi,
  deleteCourseCommentApi,
  rejectCourseCommentApi,
} from "../../services/commentApi";
import { toast } from "react-toastify";

export const useCommentListApi = (params, isAdmin) => {
  return useQuery({
    queryKey: ["commentList", params],
    queryFn: () => commentListApi(params).then((data) => data.data),
    enabled: !!isAdmin,
  });
};

export const useCommentManagmentTeacherApi = (params, isAdmin, isTeacher) => {
  return useQuery({
    queryKey: ["CommentManagmentTeacher", params],
    queryFn: () => commentManagmentTeacherApi(params).then((data) => data.data),
    enabled: !isAdmin && !!isTeacher,
  });
};

export const useAcceptCourseCommentApi = (closeModal, isAdmin) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (CommentCourseId) => acceptCourseCommentApi(CommentCourseId),
    onSuccess: () => {
      if (isAdmin) {
        queryClient.invalidateQueries({
          queryKey: ["commentList"],
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: ["CommentManagmentTeacher"],
        });
      }
      toast.success("کامنت موردنظر با موفقیت تایید شد");
      closeModal();
    },
  });
};

export const useRejectCourseCommentApi = (closeModal, isAdmin) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (CommentCourseId) => rejectCourseCommentApi(CommentCourseId),
    onSuccess: () => {
      if (isAdmin) {
        queryClient.invalidateQueries({
          queryKey: ["commentList"],
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: ["CommentManagmentTeacher"],
        });
      }
      toast.success("کامنت موردنظر با موفقیت رد شد");
      closeModal();
    },
  });
};

export const useDeleteCourseCommentApi = (closeModal, isAdmin) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (CourseCommandId) => deleteCourseCommentApi(CourseCommandId),
    onSuccess: () => {
      toast.success("کامنت موردنظر با موفقیت حذف شد");
      closeModal();

      if (isAdmin) {
        queryClient.invalidateQueries({
          queryKey: ["commentList"],
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: ["CommentManagmentTeacher"],
        });
      }
    },
  });
};
