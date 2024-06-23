import React, { useCallback } from "react";
import { useGetCourseGroupApi } from "../../../hooks/api/useCoursesApi";
import MainTable from "../../Modules/Table/MainTable";

const columns = [
  { name: "نام دسته بندی", uid: "groupName" },
  { name: "ظرفیت دسته بندی", uid: "groupCapacity" },
  { name: "نام دوره", uid: "courseName" },
  { name: "ظرفیت دوره", uid: "courseCapacity" },
  { name: "نام استاد", uid: "teacherName" },
];

export default function CourseCategoriesList({ TeacherId, CourseId }) {
  const { data, isLoading } = useGetCourseGroupApi({ TeacherId, CourseId });

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "groupName":
        return <p className="font-peyda">{cellValue}</p>;
      case "groupCapacity":
        return <p className="font-peyda">{cellValue}</p>;
      case "courseName":
        return <p className="font-peyda">{cellValue}</p>;
      case "courseCapacity":
        return <p className="font-peyda">{cellValue}</p>;
      case "teacherName":
        return <p className="font-peyda">{cellValue}</p>;
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <MainTable
        data={data ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.length ?? 0}
      />
    </>
  );
}
