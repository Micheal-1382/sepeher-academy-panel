import React from "react";
import CourseDetailsBox from "../../../components/Templates/CourseDetails/CourseDetailsBox";
import { useCourseDetailsApi } from "../../../hooks/api/useCoursesApi";
import { useParams } from "react-router-dom";
import CourseUsersList from "../../../components/Templates/CourseDetails/CourseUsersList";

export default function CourseDetailsPage() {
  const params = useParams();

  const { data, isLoading } = useCourseDetailsApi(params?.id);
  return (
    <div>
      <h3 className="mb-4 font-peyda text-2xl">مشخصات دوره</h3>
      <CourseDetailsBox {...data} isLoading={isLoading} />
      <h3 className="my-4 font-peyda text-2xl">کاربران دوره</h3>
      <CourseUsersList />
    </div>
  );
}
