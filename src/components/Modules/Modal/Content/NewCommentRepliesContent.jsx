import React, { useCallback } from "react";
import { useGetAdminRepliesCommentsApi } from "../../../../hooks/api/useNewsApi";
import { convertToPersianDate } from "../../../../utils/convertToPersianDate";
import MainTable from "../../Table/MainTable";

const columns = [
  { name: "عنوان", uid: "title" },
  { name: "توضیحات", uid: "describe" },
  { name: "نویسنده", uid: "autor" },
  { name: "تاریخ ثبت", uid: "inserDate" },
  { name: "تعداد پاسخ ها", uid: "replyCount" },
  { name: "تعداد لایک ها", uid: "likeCount" },
  { name: "تعداد دیسلایک ها", uid: "dissLikeCount" },
];

export default function NewCommentRepliesContent({ CommentId }) {
  const { data, isLoading } = useGetAdminRepliesCommentsApi({ CommentId });

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
        return <p className="pt-1">{cellValue}</p>;
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
      <h3 className="font-peyda text-2xl">پاسخ های کامنت</h3>
      <MainTable
        columns={columns}
        data={data ?? []}
        isLoading={isLoading}
        renderCell={renderCell}
        totalCount={data?.length}
      />
    </>
  );
}
