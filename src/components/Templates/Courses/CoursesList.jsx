import React, { useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import MainTable from "../../Modules/Table/MainTable";
import { useCourseListApi } from "../../../hooks/api/useCoursesApi";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import { Chip, Image, useDisclosure } from "@nextui-org/react";
import eyeIcon from "../../../assets/icons/outlined/eye.svg";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import infoIcon from "../../../assets/icons/theme/info.svg";
import markIcon from "../../../assets/icons/outlined/mark.svg";
import closeIcon from "../../../assets/icons/outlined/close.svg";
import HorizontalFilterBox from "./CoursesFilterBox";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import courseSortingColItems from "../../../constants/courseSortingColItems";
import convertToPersianDigit from "../../../utils/convertToPersianDigit";
import addCommasToPersianNumber from "../../../utils/addCommasToPersianDigit";
import MainModal from "../../Modules/Modal/MainModal";
import { CourseReserveBody } from "../../Modules/Modal/Content/CourseReserveStudentsContent";
import ActiveCourseContent from "../../Modules/Modal/Content/ActiveCourseContent";
import DeActiveCourseContent from "../../Modules/Modal/Content/DeActiveCourseContent";
import DeleteCourseContent from "../../Modules/Modal/Content/DeleteCourseContent";
import UpdateCourseStatusContent from "../../Modules/Modal/Content/UpdateCourseStatusContent";

const columns = [
  { name: "نام دوره", uid: "fullName" },
  { name: "سطح دوره", uid: "levelName" },
  { name: "تعداد رزرو", uid: "reserveCount" },
  { name: "وضعیت دوره", uid: "statusName" },
  { name: "قیمت دوره", uid: "cost" },
  { name: "آیا فعال است؟", uid: "isActive" },
  { name: "عملیات", uid: "actions" },
];

export default function CoursesList() {
  const location = useLocation();
  const { search } = location;
  const navigate = useNavigate();

  const queryParams = getQueryParams(search);

  const { data, isLoading } = useCourseListApi(queryParams);

  const selectedCourseId = useRef();

  const {
    isOpen: isCourseReserveOpen,
    onOpenChange: onOpenChangeCourseReserve,
    onOpen: onOpenCourserReserve,
  } = useDisclosure();

  const {
    isOpen: isActiveCourseModalOpen,
    onOpenChange: onOpenChangeActiveCourseModal,
    onOpen: onOpenActiveCourseModal,
    onClose: onCloseActiveCourseModal,
  } = useDisclosure();

  const {
    isOpen: isDeActiveCourseModalOpen,
    onOpenChange: onOpenChangeDeActiveCourseModal,
    onOpen: onOpenDeActiveCourseModal,
    onClose: onCloseDeActiveCourseModal,
  } = useDisclosure();

  const {
    isOpen: isDeleteCourseModalOpen,
    onOpenChange: onOpenChangeDeleteCourseModal,
    onOpen: onOpenDeleteCourseModal,
    onClose: onCloseDeleteCourseModal,
  } = useDisclosure();

  const {
    isOpen: isUpdateStatusModalOpen,
    onOpenChange: onOpenChangeUpdateStatusModal,
    onOpen: onOpenUpdateStatusModal,
    onClose: onCloseUpdateStatusModal,
  } = useDisclosure();

  const renderCell = useCallback((course, columnKey) => {
    const cellValue = course[columnKey];

    switch (columnKey) {
      case "fullName":
        return <p className="font-peyda">{cellValue}</p>;
      case "levelName":
        return <p className="font-peyda">{cellValue}</p>;
      case "reserveCount":
        return (
          <div className="font-peyda flex items-center gap-1">
            <p className="pt-1">{cellValue}</p>
            <MainTooltip
              content={
                <p className="!text-primary cursor-pointer font-peyda">
                  مشاهده دانشجویان رزرو شده
                </p>
              }
            >
              <img
                src={infoIcon}
                alt=""
                className="w-[20px] cursor-pointer"
                onClick={() => {
                  selectedCourseId.current = course.courseId;
                  onOpenCourserReserve();
                }}
              />
            </MainTooltip>
          </div>
        );
      case "statusName":
        return (
          <div className="font-peyda flex items-center gap-1">
            <p className="pt-1">{cellValue}</p>
            <MainTooltip
              content={
                <p className="!text-primary cursor-pointer font-peyda">
                  ویرایش وضعیت دوره
                </p>
              }
            >
              <img
                src={infoIcon}
                alt=""
                className="w-[20px] cursor-pointer"
                onClick={() => {
                  selectedCourseId.current = course.courseId;
                  onOpenUpdateStatusModal();
                }}
              />
            </MainTooltip>
          </div>
        );
      case "cost":
        return (
          <p className="font-peyda">
            {addCommasToPersianNumber(convertToPersianDigit(cellValue))} تومان
          </p>
        );
      case "isActive":
        return (
          <div className="flex items-center gap-1">
            <Chip
              color={cellValue ? "success" : "danger"}
              className="text-btnText font-peyda"
            >
              {cellValue ? "فعال" : "غیرفعال"}
            </Chip>
            {cellValue ? (
              <MainTooltip content={"غیرفعال سازی"}>
                <img
                  src={closeIcon}
                  alt=""
                  className="cursor-pointer w-[30px]"
                  onClick={() => {
                    selectedCourseId.current = course.courseId;
                    onOpenDeActiveCourseModal();
                  }}
                />
              </MainTooltip>
            ) : (
              <MainTooltip content={"فعال سازی"}>
                <img
                  src={markIcon}
                  alt=""
                  className="cursor-pointer w-[30px]"
                  onClick={() => {
                    selectedCourseId.current = course.courseId;
                    onOpenActiveCourseModal();
                  }}
                />
              </MainTooltip>
            )}
          </div>
        );
      case "actions":
        return (
          <div className="relative flex !items-center gap-2">
            <MainTooltip content="جزئیات">
              <Image
                alt=""
                src={eyeIcon}
                width={20}
                className="cursor-pointer"
                onClick={() => {
                  navigate(`${course.courseId}`);
                }}
              />
            </MainTooltip>
            <MainTooltip content="ویرایش">
              <Image alt="" src={editIcon} width={20} />
            </MainTooltip>
            <MainTooltip color="danger" content="حذف">
              <Image
                alt=""
                src={trashIcon}
                width={20}
                className="cursor-pointer"
                onClick={() => {
                  selectedCourseId.current = {
                    active: course.isActive,
                    id: course.courseId,
                  };
                  onOpenDeleteCourseModal();
                }}
              />
            </MainTooltip>
          </div>
        );
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
        data={data?.courseDtos ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.totalCount ?? 0}
      />
      <MainModal
        isOpen={isCourseReserveOpen}
        size="4xl"
        onOpenChange={onOpenChangeCourseReserve}
        body={<CourseReserveBody CourseId={selectedCourseId.current} />}
      />
      <MainModal
        isOpen={isActiveCourseModalOpen}
        onOpenChange={onOpenChangeActiveCourseModal}
        body={
          <ActiveCourseContent
            closeModal={onCloseActiveCourseModal}
            id={selectedCourseId.current}
          />
        }
      />
      <MainModal
        isOpen={isDeActiveCourseModalOpen}
        onOpenChange={onOpenChangeDeActiveCourseModal}
        body={
          <DeActiveCourseContent
            closeModal={onCloseDeActiveCourseModal}
            id={selectedCourseId.current}
          />
        }
      />
      <MainModal
        isOpen={isDeleteCourseModalOpen}
        onOpenChange={onOpenChangeDeleteCourseModal}
        body={
          <DeleteCourseContent
            closeModal={onCloseDeleteCourseModal}
            payload={selectedCourseId.current}
          />
        }
      />
      <MainModal
        isOpen={isUpdateStatusModalOpen}
        onOpenChange={onOpenChangeUpdateStatusModal}
        size="2xl"
        body={
          <UpdateCourseStatusContent
            closeModal={onCloseUpdateStatusModal}
            CourseId={selectedCourseId.current}
          />
        }
      />
    </div>
  );
}
