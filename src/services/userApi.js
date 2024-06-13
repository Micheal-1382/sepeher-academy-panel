import httpService from "./httpService";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const userListApi = (params) => {
  return httpService.get(baseUrl + `User/UserMannage`, { params });
};