import React from "react";
import CourseCategoryDetailsBox from "../../../components/Templates/CourseCategoryDetails/CourseCategoryDetailsBox";
import { useCourseGroupDetailsApi } from "../../../hooks/api/useCoursesApi";
import { useParams } from "react-router-dom";

export default function CategoryDetailsPage() {
  const params = useParams();

  const { data, isLoading } = useCourseGroupDetailsApi(params);
  
  return (
    <div>
      <h3 className="mb-4 text-2xl font-peyda">مشخصات دسته بندی</h3>
      <CourseCategoryDetailsBox {...data?.courseGroupDto} />
    </div>
  );
}
