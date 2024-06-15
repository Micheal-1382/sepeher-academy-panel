import React, { useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import {
  useCourseGroupApi,
  useDeleteCourseGroupApi,
  useUpdateCourseGroupApi,
} from "../../../hooks/api/useCoursesApi";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import { Image } from "@nextui-org/react";
import HorizontalFilterBox from "../Courses/CoursesFilterBox";
import MainTable from "../../Modules/Table/MainTable";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import courseSortingColItems from "../../../constants/courseSortingColItems";
import eyeIcon from "../../../assets/icons/outlined/eye.svg";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import { useModal } from "../../../hooks/useModal";
import MainModal from "../../Modules/Modal/MainModal";
import { DeleteBody } from "../../Modules/Modal/Content/DeleteCourseCategoryContent";
import { UpdateBody } from "../../Modules/Modal/Content/UpdateCourseCategoryCourseContent";

const columns = [
  { name: "نام دوره", uid: "courseName" },
  { name: "ظرفیت دوره", uid: "courseCapacity" },
  { name: "نام استاد", uid: "teacherName" },
  { name: "ظرفیت گروه", uid: "groupCapacity" },
  { name: "نام گروه", uid: "groupName" },
  { name: "عملیات", uid: "actions" },
];

export default function CourseCategoriesList() {
  const location = useLocation();
  const { search } = location;
  const navigate = useNavigate();

  const queryParams = getQueryParams(search);

  const { isOpen: isDeleteModalOpen, triggerModal: triggerDeleteModal } =
    useModal();

  const { isOpen: isEditModalOpen, triggerModal: triggerEditModal } =
    useModal();

  const { data, isLoading } = useCourseGroupApi(queryParams);

  const {
    mutate: deleteCourseCategoryMutate,
    isPending: deleteCourseCategoryPending,
  } = useDeleteCourseGroupApi(triggerDeleteModal);

  const {
    mutate: updateCourseCategoryMutate,
    isPending: updateCourseCategoryPending,
  } = useUpdateCourseGroupApi(triggerEditModal);

  const selectedCourseCategoryData = useRef();

  const renderCell = useCallback((course, columnKey) => {
    const cellValue = course[columnKey];

    switch (columnKey) {
      case "courseName":
        return <p className="font-peyda">{cellValue}</p>;
      case "courseCapacity":
        return <p className="font-peyda">{cellValue}</p>;
      case "teacherName":
        return <p className="font-peyda">{cellValue}</p>;
      case "groupCapacity":
        return <p className="font-peyda">{cellValue}</p>;
      case "groupName":
        return <p className="font-peyda">{cellValue}</p>;
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
                  navigate(`${course.groupId}`);
                }}
              />
            </MainTooltip>
            <MainTooltip content="ویرایش">
              <Image
                alt=""
                src={editIcon}
                width={20}
                className="cursor-pointer"
                onClick={() => {
                  selectedCourseCategoryData.current = course;
                  triggerEditModal(true);
                }}
              />
            </MainTooltip>
            <MainTooltip color="danger" content="حذف">
              <Image
                alt=""
                src={trashIcon}
                width={20}
                className="cursor-pointer"
                onClick={() => {
                  selectedCourseCategoryData.current = course.groupId;
                  triggerDeleteModal(true);
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
        data={data?.courseGroupDtos ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.totalCount ?? 0}
      />
      <MainModal
        isOpen={isDeleteModalOpen}
        body={
          <DeleteBody
            triggerModal={triggerDeleteModal}
            action={() =>
              deleteCourseCategoryMutate(selectedCourseCategoryData.current)
            }
            actionLoading={deleteCourseCategoryPending}
          />
        }
      />
      <MainModal
        isOpen={isEditModalOpen}
        size="2xl"
        body={
          <UpdateBody
            defaultValues={selectedCourseCategoryData.current}
            triggerModal={triggerEditModal}
            action={updateCourseCategoryMutate}
            actionLoading={updateCourseCategoryPending}
          />
        }
      />
    </div>
  );
}
