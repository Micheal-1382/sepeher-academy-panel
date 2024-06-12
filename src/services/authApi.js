import httpService from "./httpService";

const baseUrl = "https://classapi.sepehracademy.ir/api/";

export const loginUserApi = (payload) => {
  return httpService.post(baseUrl + "Sign/Login", payload);
};
