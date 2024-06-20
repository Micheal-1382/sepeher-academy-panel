import httpService from "./httpService";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const commentListApi = (params) => {
  return httpService.get(baseUrl + `Course/CommentManagment`, { params });
};

export const commentManagmentTeacherApi = (params) => {
  return httpService.get(baseUrl + `Course/CommentManagmentTeacher`, {
    params,
  });
};

export const acceptCourseCommentApi = (CommentCourseId) => {
  return httpService.post(
    baseUrl + `Course/AcceptCourseComment?CommentCourseId=${CommentCourseId}`
  );
};

export const rejectCourseCommentApi = (CommentCourseId) => {
  return httpService.post(
    baseUrl + `Course/RejectCourseComment?CommentCourseId=${CommentCourseId}`
  );
};

export const deleteCourseCommentApi = (CourseCommandId) => {
  return httpService.delete(
    baseUrl + `Course/DeleteCourseComment?CourseCommandId=${CourseCommandId}`
  );
};
