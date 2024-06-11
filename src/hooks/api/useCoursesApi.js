import { useQuery } from "@tanstack/react-query";
import { courseListApi } from "../../services/coursesApi";

export const useCourseListApi = (params) => {
  return useQuery({
    queryKey: ["courseList", params],
    queryFn: () => courseListApi(params).then((data) => data.data),
  });
};
