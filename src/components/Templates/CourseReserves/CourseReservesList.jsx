import React, { useCallback, useRef } from "react";
import {
  useCourseReserveApi,
  useDeleteCourseReserveApi,
} from "../../../hooks/api/useCoursesApi";
import { convertToPersianDate } from "../../../utils/convertToPersianDate";
import { Chip, Image, useDisclosure } from "@nextui-org/react";
import MainTable from "../../Modules/Table/MainTable";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import eyeIcon from "../../../assets/icons/outlined/eye.svg";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import MainModal from "../../Modules/Modal/MainModal";
import { DeleteBody } from "../../Modules/Modal/Content/DeleteCourseReserveContent";

const columns = [
  { name: "نام دانشجو", uid: "studentName" },
  { name: "تاریخ رزرو", uid: "reserverDate" },
  { name: "وضعیت ثبت", uid: "accept" },
  { name: "نام دوره", uid: "courseName" },
  { name: "شناسه رزرو", uid: "reserveId" },
  { name: "عملیات", uid: "actions" },
];

export default function CourseReservesList() {
  const {
    isOpen: isDeleteModalOpen,
    onClose: onCloseDeleteModal,
    onOpen: onOpenDeleteModal,
    onOpenChange: onOpenChangeDeleteModal,
  } = useDisclosure();

  const { data, isLoading } = useCourseReserveApi();

  const selectedCourseReserveId = useRef();

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
      case "actions":
        return (
          <div className="relative flex !items-center gap-2">
            <MainTooltip content="جزئیات">
              <Image alt="" src={eyeIcon} width={20} />
            </MainTooltip>
            <MainTooltip content="ویرایش">
              <Image alt="" src={editIcon} width={20} />
            </MainTooltip>
            {!course["accept"] && (
              <MainTooltip color="danger" content="حذف">
                <Image
                  alt=""
                  src={trashIcon}
                  width={20}
                  onClick={() => {
                    selectedCourseReserveId.current = course.reserveId;
                    onOpenDeleteModal();
                  }}
                />
              </MainTooltip>
            )}
          </div>
        );
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
      <MainModal
        isOpen={isDeleteModalOpen}
        onOpenChange={onOpenChangeDeleteModal}
        body={
          <DeleteBody
            closeModal={onCloseDeleteModal}
            reserveId={selectedCourseReserveId.current}
          />
        }
      />
    </>
  );
}
