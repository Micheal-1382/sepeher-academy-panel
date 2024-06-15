import React, { useCallback } from "react";
import CourseCategoryDetailsBox from "../../../components/Templates/CourseCategoryDetails/CourseCategoryDetailsBox";
import { useCourseGroupDetailsApi } from "../../../hooks/api/useCoursesApi";
import { useParams } from "react-router-dom";
import MainTable from "../../../components/Modules/Table/MainTable";
import { Chip } from "@nextui-org/react";
import { convertToPersianDate } from "../../../utils/convertToPersianDate";

const columns = [
  { name: "نام دانشجو", uid: "studentName" },
  { name: "وضعیت پرداخت", uid: "peymentDone" },
  { name: "اعلان", uid: "notification" },
  { name: "وضعیت مسدودی کاربر", uid: "lockUser" },
  { name: "تاریخ مسدود", uid: "lockedDate" },
  { name: "حذف شده است؟", uid: "isDelete" },
];

export default function CategoryDetailsPage() {
  const params = useParams();

  const { data, isLoading } = useCourseGroupDetailsApi(params);

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "studentName":
        return <p className="font-peyda">{cellValue}</p>;
      case "peymentDone":
        return (
          <Chip
            color={cellValue ? "success" : "danger"}
            className="text-btnText font-peyda"
          >
            {cellValue ? "تکمیل" : "تکمیل نشده"}
          </Chip>
        );
      case "notification":
        return (
          <Chip
            color={cellValue ? "success" : "danger"}
            className="text-btnText font-peyda"
          >
            {cellValue ? "فعال" : "غیرفعال"}
          </Chip>
        );
      case "lockUser":
        return (
          <Chip
            color={cellValue ? "danger" : "success"}
            className="text-btnText font-peyda"
          >
            {cellValue ? "مسدود" : "فعال"}
          </Chip>
        );
      case "lockedDate":
        return <p className="font-peyda">{convertToPersianDate(cellValue)}</p>;
      case "isDelete":
        return (
          <Chip
            color={cellValue ? "danger" : "success"}
            className="text-btnText font-peyda"
          >
            {cellValue ? "حذف شده" : "فعال"}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <div>
      <h3 className="mb-4 text-2xl font-peyda">مشخصات دسته بندی</h3>
      <CourseCategoryDetailsBox
        {...data?.courseGroupDto}
        isLoading={isLoading}
      />
      <h3 className="mb-4 text-2xl font-peyda mt-8">لیست کاربران دوره</h3>
      <MainTable
        data={data?.courseUserListDto ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.courseUserListDto.length ?? 0}
      />
    </div>
  );
}
