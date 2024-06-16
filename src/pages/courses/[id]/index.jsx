import React from "react";
import CourseDetailsBox from "../../../components/Templates/CourseDetails/CourseDetailsBox";
import { useCourseDetailsApi } from "../../../hooks/api/useCoursesApi";
import { useParams } from "react-router-dom";

export default function CourseDetailsPage() {
  const params = useParams();

  const { data, isLoading } = useCourseDetailsApi(params?.id);
  return (
    <div>
      <h3 className="mb-4 font-peyda text-2xl">مشخصات دوره</h3>
      <CourseDetailsBox {...data} isLoading={isLoading} />
    </div>
  );
}
