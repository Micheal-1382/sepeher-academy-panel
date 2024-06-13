import httpService from "./httpService";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const adminNewsFilterListApi = (params) => {
  return httpService.get(baseUrl + `News/AdminNewsFilterList`, { params });
};
