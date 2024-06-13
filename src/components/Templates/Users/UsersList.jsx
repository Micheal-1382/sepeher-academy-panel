import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import MainTable from "../../Modules/Table/MainTable";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import { Image } from "@nextui-org/react";
import eyeIcon from "../../../assets/icons/outlined/eye.svg";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import HorizontalFilterBox from "./UsersFilterBox";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import commentSortingColItems from "../../../constants/commentSortingColItems";
import { useUserListApi } from "../../../hooks/api/useUserApi";
// import { useUserApi } from "../../../hooks/api/useUserApi";

const columns = [
  { name: "نام", uid: "fname" },
  { name: "نام خانوادگی", uid: "lname" },
  { name: "ایمیل", uid: "gmail" },
  { name: "شماره همراه", uid: "phoneNumber" },
  { name: "پروفایل تکمیل درصد", uid: "profileCompletionPercentage" },
  { name: "دانش آموز", uid: "isStudent" },
];

export default function UsersList() {
  const location = useLocation();
  const { search } = location;

  const queryParams = getQueryParams(search);
  console.log(queryParams);

  const { data, isLoading } = useUserListApi(queryParams);
  console.log(data);

  const renderCell = useCallback((comment, columnKey) => {
    const cellValue = comment[columnKey];

    switch (columnKey) {
      case "gmail":
        return <p className="font-peyda">{cellValue}</p>;
      case "phoneNumber":
        return <p className="font-peyda">{cellValue}</p>;
      case "profileCompletionPercentage":
        return <p className="font-peyda">{cellValue}</p>;
      case "isStudent":
        return <p className="font-peyda">{cellValue === true ? "هست" : "نیست"}</p>;
      case "fname":
        return <p className="font-peyda">{cellValue}</p>;
      case "lname":
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
        sortingColArray={commentSortingColItems}
      /> 
      <MainTable
        data={data?.listUser ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.totalCount ?? 0}
      />
    </div>
  );
}
