import React, { useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import { useAdminNewsFilterListApi } from "../../../hooks/api/useNewsApi";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import { Chip, Image, useDisclosure } from "@nextui-org/react";
import eyeIcon from "../../../assets/icons/outlined/eye.svg";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import HorizontalFilterBox from "../Courses/CoursesFilterBox";
import MainTable from "../../Modules/Table/MainTable";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import courseSortingColItems from "../../../constants/courseSortingColItems";
import { convertToPersianDate } from "../../../utils/convertToPersianDate";
import MainModal from "../../Modules/Modal/MainModal";
import { DeleteNewsBody } from "../../Modules/Modal/Content/DeleteNewsContent";

const columns = [
  { name: "عنوان", uid: "title" },
  { name: "نویسنده", uid: "addUserFullName" },
  { name: "دسته بندی", uid: "newsCatregoryName" },
  { name: "زمان ثبت", uid: "insertDate" },
  { name: "امتیاز", uid: "currentRate" },
  { name: "وضعیت", uid: "isActive" },
  { name: "عملیات", uid: "actions" },
];

export default function NewsList() {
  const location = useLocation();
  const { search } = location;

  const navigate = useNavigate();

  const queryParams = getQueryParams(search);

  const { data, isLoading } = useAdminNewsFilterListApi(queryParams);

  const {
    isOpen: isDeleteModalOpen,
    onOpenChange: onOpenChangeDeleteModal,
    onClose: onCloseDeleteModal,
    onOpen: onOpenDeleteModal,
  } = useDisclosure();

  const selectedNewsData = useRef();

  const renderCell = useCallback((news, columnKey) => {
    const cellValue = news[columnKey];

    switch (columnKey) {
      case "title":
        return <p className="font-peyda">{cellValue}</p>;
      case "addUserFullName":
        return <p className="font-peyda">{cellValue}</p>;
      case "newsCatregoryName":
        return <p className="font-peyda">{cellValue}</p>;
      case "insertDate":
        return <p className="font-peyda">{convertToPersianDate(cellValue)}</p>;
      case "currentRate":
        return <p className="font-peyda">{cellValue}</p>;
      case "isActive":
        return (
          <Chip
            color={cellValue ? "success" : "danger"}
            className="text-btnText"
          >
            {cellValue ? "فعال" : "غیرفعال"}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex !items-center gap-2">
            <MainTooltip content="جزئیات">
              <Image
                alt=""
                src={eyeIcon}
                className="cursor-pointer"
                width={20}
                onClick={() => navigate(`${news.id}`)}
              />
            </MainTooltip>
            <MainTooltip content="ویرایش">
              <Image alt="" src={editIcon} width={20} />
            </MainTooltip>
            <MainTooltip color="danger" content="حذف">
              <Image
                alt=""
                src={trashIcon}
                className="cursor-pointer"
                width={20}
                onClick={() => {
                  selectedNewsData.current = news.id;
                  onOpenDeleteModal();
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
        data={data?.news ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.totalCount ?? 0}
      />
      <MainModal
        isOpen={isDeleteModalOpen}
        onOpenChange={onOpenChangeDeleteModal}
        body={
          <DeleteNewsBody
            fileId={selectedNewsData.current}
            closeModal={onCloseDeleteModal}
          />
        }
      />
    </div>
  );
}
