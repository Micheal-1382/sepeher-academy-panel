import httpService from "./httpService";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const userListApi = (params) => {
  return httpService.get(baseUrl + `User/UserMannage`, {
    params,
  });
};

export const createUserApi = (payload) => {
  return httpService.post(baseUrl + `User/CreateUser`, payload);
};

export const deleteUserApi = (userId) => {
  return httpService.delete(baseUrl + `User/DeleteUser`, {
    data: {
      userId,
    },
  });
};

export const updateUserApi = (payload) => {
  return httpService.put(baseUrl + `User/UpdateUser`, payload);
};

export const userDetailsApi = (userId) => {
  return httpService.get(baseUrl + `User/UserDetails/${userId}`);
};
