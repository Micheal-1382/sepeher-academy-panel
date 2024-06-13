import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import MainTable from "../../Modules/Table/MainTable";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import { Image } from "@nextui-org/react";
import eyeIcon from "../../../assets/icons/outlined/eye.svg";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import HorizontalFilterBox from "./CommentsFilterBox";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import commentSortingColItems from "../../../constants/commentSortingColItems";
import { useCommentListApi } from "../../../hooks/api/useComment";

const columns = [
  { name: "نام کاربر", uid: "userFullName" },
  { name: "سرتیتر کامنت", uid: "commentTitle" },
  { name: "نام دوره", uid: "courseTitle" },
  { name: "توضیحات", uid: "describe" },
  { name: "تعداد ریپلای", uid: "replyCount" },
  { name: "تعداد لایک", uid: "replyCount" },
  { name: "تعداد دیس لایک", uid: "dislikeCount" },
  { name: "عملیات", uid: "actions" },
];

export default function CommentsList() {
  const location = useLocation();
  const { search } = location;

  const queryParams = getQueryParams(search);

  const { data, isLoading } = useCommentListApi(queryParams);

  const renderCell = useCallback((comment, columnKey) => {
    const cellValue = comment[columnKey];

    switch (columnKey) {
      case "courseTitle":
        return <p className="font-peyda">{cellValue}</p>;
      case "commentTitle":
        return <p className="font-peyda">{cellValue}</p>;
      case "describe":
        return <p className="font-peyda">{cellValue}</p>;
      case "likeCount":
        return <p className="font-peyda">{cellValue}</p>;
      case "dislikeCount":
        return <p className="font-peyda">{cellValue}</p>;
      case "userFullName":
        return <p className="font-peyda">{cellValue}</p>;
      case "replyCount":
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
        data={data?.comments ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.totalCount ?? 0}
      />
    </div>
  );
}
