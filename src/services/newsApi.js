import httpService from "./httpService";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const adminNewsFilterListApi = (params) => {
  return httpService.get(baseUrl + `News/AdminNewsFilterList`, { params });
};

export const deleteNewsFileApi = (params) => {
  return httpService.delete(baseUrl + `News/DeleteNewsFile`, { params });
};

export const getAdminNewsCommentsApi = (params) => {
  return httpService.get(baseUrl + `News/GetAdminNewsComments`, { params });
};

export const getAdminRepliesCommentsApi = (params) => {
  return httpService.get(baseUrl + `News/GetAdminRepliesComments`, { params });
};

export const createNewsCategoryApi = (payload) => {
  return httpService.post(baseUrl + `News/CreateNewsCategory`, payload, {
    headers: {
      useMultipartForm: true,
    },
  });
};
