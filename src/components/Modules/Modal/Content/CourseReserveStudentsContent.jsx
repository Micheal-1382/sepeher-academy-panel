import { useCallback } from "react";
import MainTable from "../../Table/MainTable";
import { Chip, Spinner } from "@nextui-org/react";
import { useCourseReserveDetailsApi } from "../../../../hooks/api/useCoursesApi";
import { convertToPersianDate } from "../../../../utils/convertToPersianDate";

const columns = [
  { name: "نام دانشجو", uid: "studentName" },
  { name: "تاریخ رزرو", uid: "reserverDate" },
  { name: "وضعیت ثبت", uid: "accept" },
  { name: "نام دوره", uid: "courseName" },
  { name: "شناسه رزرو", uid: "reserveId" },
];

export const CourseReserveBody = ({ CourseId }) => {
  const { data, isLoading } = useCourseReserveDetailsApi(CourseId);

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
        return (
          <div className="relative flex !items-center gap-2">
            <MainTooltip content="جزئیات">
              <Image alt="" src={eyeIcon} width={20} />
            </MainTooltip>
            <MainTooltip content="ویرایش">
              <Image alt="" src={editIcon} width={20} />
            </MainTooltip>
            <MainTooltip color="danger" content="حذف">
              <Image alt="" src={trashIcon} width={20} />
            </MainTooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 font-peyda">
        <p>درحال بارگیری</p>
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <h3 className="font-peyda text-2xl mt-4">لیست کاربران رزرو شده</h3>
      <MainTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        renderCell={renderCell}
        totalCount={data?.length ?? 0}
      />
    </>
  );
};
