import React, { useCallback } from "react";
import { useCourseReserveApi } from "../../../hooks/api/useCoursesApi";
import { convertToPersianDate } from "../../../utils/convertToPersianDate";
import { Chip } from "@nextui-org/react";
import MainTable from "../../Modules/Table/MainTable";

const columns = [
  { name: "نام دانشجو", uid: "studentName" },
  { name: "تاریخ رزرو", uid: "reserverDate" },
  { name: "وضعیت ثبت", uid: "accept" },
  { name: "نام دوره", uid: "courseName" },
  { name: "شناسه رزرو", uid: "reserveId" },
];

export default function CourseReservesList() {
  const { data, isLoading } = useCourseReserveApi();

  const renderCell = useCallback((course, columnKey) => {
    const cellValue = course[columnKey];

    switch (columnKey) {
      case "studentName":
        return <p className="font-peyda">{cellValue}</p>;
      case "reserverDate":
        return <p className="font-peyda">{convertToPersianDate(cellValue)}</p>;
      case "accept":
        return (
          <Chip
            color={cellValue ? "success" : "danger"}
            className="text-btnText font-peyda"
          >
            {cellValue ? "تایید شده" : "تایید نشده"}
          </Chip>
        );
      case "courseName":
        return <p className="font-peyda">{cellValue}</p>;
      case "reserveId":
        return <p className="font-peyda">{cellValue}</p>;
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <MainTable
        columns={columns}
        data={data ?? []}
        isLoading={isLoading}
        renderCell={renderCell}
        totalCount={data?.length}
      />
    </>
  );
}
