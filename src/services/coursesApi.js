import httpService from "./httpService";

const baseUrl = "https://classapi.sepehracademy.ir/api/";

export const courseListApi = (params) => {
  return httpService.get(baseUrl + `Course/CourseList`, { params });
};
