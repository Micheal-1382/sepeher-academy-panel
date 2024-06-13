import { useQuery } from "@tanstack/react-query";
import { courseGroupApi, courseListApi } from "../../services/coursesApi";

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
