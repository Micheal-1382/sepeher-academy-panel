import httpService from "./httpService";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const commentListApi = (params) => {
  return httpService.get(baseUrl + `Course/CommentManagment`, { params });
};