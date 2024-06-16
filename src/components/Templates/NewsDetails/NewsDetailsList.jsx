import React, { useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import { useGetAdminNewsCommentsApi } from "../../../hooks/api/useNewsApi";
import { convertToPersianDate } from "../../../utils/convertToPersianDate";
import MainTable from "../../Modules/Table/MainTable";
import infoIcon from "../../../assets/icons/theme/info.svg";
import { useDisclosure } from "@nextui-org/react";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import MainModal from "../../Modules/Modal/MainModal";
import NewsCommentRepliesContent from "../../Modules/Modal/Content/NewCommentRepliesContent";

const columns = [
  { name: "عنوان", uid: "title" },
  { name: "توضیحات", uid: "describe" },
  { name: "نویسنده", uid: "autor" },
  { name: "تاریخ ثبت", uid: "inserDate" },
  { name: "تعداد پاسخ ها", uid: "replyCount" },
  { name: "تعداد لایک ها", uid: "likeCount" },
  { name: "تعداد دیسلایک ها", uid: "dissLikeCount" },
];

export default function NewsDetailsList() {
  const params = useParams();

  const { data, isLoading } = useGetAdminNewsCommentsApi(params);

  const selectedCommentData = useRef();

  const {
    isOpen: isRepliesModalOpen,
    onOpen: onOpenRepliesModal,
    onOpenChange: onOpenChangeRepliesModal,
  } = useDisclosure();

  const renderCell = useCallback((comment, columnKey) => {
    const cellValue = comment[columnKey];

    switch (columnKey) {
      case "title":
        return <p className="font-peyda">{cellValue}</p>;
      case "describe":
        return <p className="font-peyda">{cellValue}</p>;
      case "autor":
        return <p className="font-peyda">{cellValue}</p>;
      case "inserDate":
        return <p className="font-peyda">{convertToPersianDate(cellValue)}</p>;
      case "replyCount":
        return (
          <div className="font-peyda flex items-center gap-1">
            <p className="pt-1">{cellValue}</p>
            <MainTooltip
              content={
                <p className="!text-primary cursor-pointer font-peyda">
                  مشاهده پاسخ ها
                </p>
              }
            >
              <img
                src={infoIcon}
                alt=""
                className="w-[20px] cursor-pointer"
                onClick={() => {
                  selectedCommentData.current = comment.id;
                  onOpenRepliesModal();
                }}
              />
            </MainTooltip>
          </div>
        );
      case "likeCount":
        return <p className="font-peyda">{cellValue}</p>;
      case "dissLikeCount":
        return <p className="font-peyda">{cellValue}</p>;
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <MainTable
        data={data ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.length ?? 0}
      />
      <MainModal
        isOpen={isRepliesModalOpen}
        onOpenChange={onOpenChangeRepliesModal}
        size="3xl"
        body={
          <NewsCommentRepliesContent CommentId={selectedCommentData.current} />
        }
      />
    </>
  );
}
