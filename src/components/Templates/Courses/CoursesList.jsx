import React, { useCallback, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import MainTable from "../../Modules/Table/MainTable";
import { useCourseListApi } from "../../../hooks/api/useCoursesApi";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import { Image, useDisclosure } from "@nextui-org/react";
import eyeIcon from "../../../assets/icons/outlined/eye.svg";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import infoIcon from "../../../assets/icons/theme/info.svg";
import HorizontalFilterBox from "./CoursesFilterBox";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import courseSortingColItems from "../../../constants/courseSortingColItems";
import convertToPersianDigit from "../../../utils/convertToPersianDigit";
import addCommasToPersianNumber from "../../../utils/addCommasToPersianDigit";
import MainModal from "../../Modules/Modal/MainModal";
import { CourseReserveBody } from "../../Modules/Modal/Content/CourseReserveStudentsContent";

const columns = [
  { name: "نام دوره", uid: "fullName" },
  { name: "نوع دوره", uid: "typeName" },
  { name: "سطح دوره", uid: "levelName" },
  { name: "تعداد رزرو", uid: "reserveCount" },
  { name: "وضعیت دوره", uid: "statusName" },
  { name: "قیمت دوره", uid: "cost" },
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

  const renderCell = useCallback((course, columnKey) => {
    const cellValue = course[columnKey];

    switch (columnKey) {
      case "fullName":
        return <p className="font-peyda">{cellValue}</p>;
      case "typeName":
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
        return <p className="font-peyda">{cellValue}</p>;
      case "cost":
        return (
          <p className="font-peyda">
            {addCommasToPersianNumber(convertToPersianDigit(cellValue))} تومان
          </p>
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
              <Image alt="" src={trashIcon} width={20} />
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
    </div>
  );
}
