import React, { useCallback, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import { useGetCourseUserListApi } from "../../../hooks/api/useCoursesApi";
import { convertToPersianDate } from "../../../utils/convertToPersianDate";
import MainTable from "../../Modules/Table/MainTable";
import { Chip, useDisclosure } from "@nextui-org/react";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import markIcon from "../../../assets/icons/outlined/mark.svg";
import MainModal from "../../Modules/Modal/MainModal";
import AddToCourseStudentContent from "../../Modules/Modal/Content/AddToCourseStudentContent";

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

  const selectedUserInfo = useRef();

  const {
    isOpen: isAcceptModalOpen,
    onOpenChange: onOpenChangeAcceptModal,
    onOpen: onOpenAcceptModal,
    onClose: onCloseAcceptModal,
  } = useDisclosure();

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
          <div className="flex items-center gap-1">
            <Chip
              color={cellValue ? "success" : "danger"}
              className="text-btnText font-peyda"
            >
              {cellValue ? "تکمیل شده" : "تکمیل نشده"}
            </Chip>
            {!cellValue && (
              <MainTooltip
                content={
                  <p className="!text-primary cursor-pointer font-peyda">
                    تایید پرداخت هزینه دوره
                  </p>
                }
              >
                <img
                  src={markIcon}
                  alt=""
                  className="w-[20px] cursor-pointer"
                  onClick={() => {
                    selectedUserInfo.current = {
                      studentId: user.studentId,
                      courseGroupId: user.courseGroupId,
                      courseId: params.id,
                    };
                    onOpenAcceptModal();
                  }}
                />
              </MainTooltip>
            )}
          </div>
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
      <MainTable
        data={data ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.length ?? 0}
      />
      <MainModal
        isOpen={isAcceptModalOpen}
        onOpenChange={onOpenChangeAcceptModal}
        body={
          <AddToCourseStudentContent
            closeModal={onCloseAcceptModal}
            payload={selectedUserInfo.current}
          />
        }
      />
    </div>
  );
}
