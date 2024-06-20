import React, { useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import { useGetCourseUserListApi } from "../../../hooks/api/useCoursesApi";
import HorizontalFilterBox from "../Courses/CoursesFilterBox";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import courseSortingColItems from "../../../constants/courseSortingColItems";
import { convertToPersianDate } from "../../../utils/convertToPersianDate";
import MainTable from "../../Modules/Table/MainTable";
import { Chip } from "@nextui-org/react";

const columns = [
  { name: "نام دانشجو", uid: "studentName" },
  { name: "نمره دوره", uid: "courseGrade" },
  { name: "وضعیت پرداخت", uid: "peymentDone" },
  { name: "حذف شده است؟", uid: "isDelete" },
  { name: "مسدود شده است؟", uid: "lockUser" },
  { name: "تاریخ مسدود", uid: "lockedDate" },
];
export default function CourseUsersList() {
  const { search } = useLocation();
  const params = useParams();

  const queryParams = getQueryParams(search);

  const { data, isLoading } = useGetCourseUserListApi({
    ...queryParams,
    CourseId: params?.id,
  });

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "studentName":
        return <p className="font-peyda">{cellValue}</p>;
      case "courseGrade":
        return <p className="font-peyda">{cellValue}</p>;
      case "peymentDone":
        return (
          <Chip
            color={cellValue ? "success" : "danger"}
            className="text-btnText font-peyda"
          >
            {cellValue ? "تکمیل شده" : "تکمیل نشده"}
          </Chip>
        );
      case "isDelete":
        return (
          <Chip
            color={cellValue ? "success" : "danger"}
            className="text-btnText font-peyda"
          >
            {cellValue ? "بله" : "خیر"}
          </Chip>
        );
      case "lockUser":
        return (
          <Chip
            color={cellValue ? "success" : "danger"}
            className="text-btnText font-peyda"
          >
            {cellValue ? "بله" : "خیر"}
          </Chip>
        );
      case "lockedDate":
        return <p className="font-peyda">{convertToPersianDate(cellValue)}</p>;
      default:
        return cellValue;
    }
  }, []);
  return (
    <div className="space-y-3">
      <HorizontalFilterBox
        placeholder={"جستجو"}
        sortTypeArray={sortTypeItems}
        sortingColArray={courseSortingColItems}
      />
      <MainTable
        data={data ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.length ?? 0}
      />
    </div>
  );
}
