import React from "react";
import { useLocation } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import MainTable from "../../Modules/Table/MainTable";

export default function CoursesList() {
  const location = useLocation();
  const queryParams = getQueryParams(location.search);

  //   const { data, isLoading } = useCourseListApi();
  return (
    <>
      <MainTable />
    </>
  );
}
