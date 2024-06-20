import React, { useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import MainTable from "../../Modules/Table/MainTable";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import { Chip, Image, useDisclosure } from "@nextui-org/react";
import eyeIcon from "../../../assets/icons/outlined/eye.svg";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import markIcon from "../../../assets/icons/outlined/mark.svg";
import closeIcon from "../../../assets/icons/outlined/close.svg";
import HorizontalFilterBox from "./CommentsFilterBox";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import commentSortingColItems from "../../../constants/commentSortingColItems";
import {
  useCommentListApi,
  useCommentManagmentTeacherApi,
} from "../../../hooks/api/useCommentApi";
import { checkUserRoles } from "../../../utils/checkUserRoles";
import MainModal from "../../Modules/Modal/MainModal";
import AcceptCommentContent from "../../Modules/Modal/Content/AcceptCommentContent";
import RejectCommentContent from "../../Modules/Modal/Content/RejectCommentContent";

const columns = [
  { name: "نام کاربر", uid: "userFullName" },
  { name: "سرتیتر کامنت", uid: "commentTitle" },
  { name: "نام دوره", uid: "courseTitle" },
  { name: "توضیحات", uid: "describe" },
  { name: "تعداد ریپلای", uid: "replyCount" },
  { name: "وضعیت", uid: "accept" },
  // { name: "تعداد لایک", uid: "likeCount" },
  // { name: "تعداد دیس لایک", uid: "dislikeCount" },
  { name: "عملیات", uid: "actions" },
];

export default function CommentsList() {
  const location = useLocation();

  const { search } = location;

  const queryParams = getQueryParams(search);

  const {
    isOpen: isAcceptModalOpen,
    onOpen: onOpenAcceptModal,
    onOpenChange: onOpenChangeAcceptModal,
    onClose: onCloseAcceptModal,
  } = useDisclosure();

  const {
    isOpen: isRejectModalOpen,
    onOpen: onOpenRejectModal,
    onOpenChange: onOpenChangeRejectModal,
    onClose: onCloseRejectModal,
  } = useDisclosure();

  const { data: commentsListForAdmin, isLoading: commentsListForAdminLoading } =
    useCommentListApi(queryParams, checkUserRoles().isAdmin);

  const {
    data: commentsListForTeacher,
    isLoading: commentsListForTeacherLoading,
  } = useCommentManagmentTeacherApi(
    queryParams,
    checkUserRoles().isAdmin,
    checkUserRoles().isTeacher
  );

  const selectedCommentId = useRef();

  const handleData = () => {
    switch (checkUserRoles().isAdmin) {
      case true:
        return {
          data: commentsListForAdmin?.comments ?? [],
          isLoading: commentsListForAdminLoading,
          totalCount: commentsListForAdmin?.totalCount ?? 0,
        };
      case false:
        return {
          data: commentsListForTeacher?.comments ?? [],
          isLoading: commentsListForTeacherLoading,
          totalCount: commentsListForTeacher?.totalCount ?? 0,
        };
    }
  };

  const renderCell = useCallback((comment, columnKey) => {
    const cellValue = comment[columnKey];

    switch (columnKey) {
      case "courseTitle":
        return <p className="font-peyda">{cellValue}</p>;
      case "commentTitle":
        return <p className="font-peyda">{cellValue}</p>;
      case "describe":
        return <p className="font-peyda">{cellValue}</p>;
      // case "likeCount":
      //   return <p className="font-peyda">{cellValue}</p>;
      // case "dislikeCount":
      //   return <p className="font-peyda">{cellValue}</p>;
      case "userFullName":
        return <p className="font-peyda">{cellValue}</p>;
      case "replyCount":
        return <p className="font-peyda">{cellValue}</p>;
      case "accept":
        return (
          <div className="flex items-center gap-1">
            <Chip
              color={cellValue ? "success" : "warning"}
              className="text-btnText font-peyda"
            >
              {cellValue ? "تایید شده" : "در حال انتظار"}
            </Chip>
            {!cellValue && (
              <div className="flex items-center">
                <MainTooltip content={"تایید کامنت"}>
                  <img
                    alt=""
                    src={markIcon}
                    className="w-[30px] cursor-pointer"
                    onClick={() => {
                      selectedCommentId.current = comment.commentId;
                      onOpenAcceptModal();
                    }}
                  />
                </MainTooltip>
                <MainTooltip content={"رد کامنت"}>
                  <img
                    alt=""
                    src={closeIcon}
                    className="w-[30px] cursor-pointer"
                    onClick={() => {
                      selectedCommentId.current = comment.commentId;
                      onOpenRejectModal();
                    }}
                  />
                </MainTooltip>
              </div>
            )}
          </div>
        );
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
        data={handleData().data}
        columns={columns}
        renderCell={renderCell}
        isLoading={handleData().isLoading}
        totalCount={handleData().totalCount}
      />
      <MainModal
        isOpen={isAcceptModalOpen}
        onOpenChange={onOpenChangeAcceptModal}
        body={
          <AcceptCommentContent
            closeModal={onCloseAcceptModal}
            CommentCourseId={selectedCommentId.current}
          />
        }
      />
      <MainModal
        isOpen={isRejectModalOpen}
        onOpenChange={onOpenChangeRejectModal}
        body={
          <RejectCommentContent
            closeModal={onCloseRejectModal}
            CommentCourseId={selectedCommentId.current}
          />
        }
      />
    </div>
  );
}
