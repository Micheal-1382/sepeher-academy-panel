import { useQuery } from "@tanstack/react-query";
import { commentListApi } from "../../services/commentApi";

export const useCommentListApi = (params) => {
    return useQuery({
      queryKey: ["commentList", params],
      queryFn: () => commentListApi(params).then((data) => data.data),
    });
  };