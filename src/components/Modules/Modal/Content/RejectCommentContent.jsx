import React from "react";
import { useRejectCourseCommentApi } from "../../../../hooks/api/useCommentApi";
import { checkUserRoles } from "../../../../utils/checkUserRoles";
import MainButton from "../../Button/MainButton";

export default function RejectCommentContent({ CommentCourseId, closeModal }) {
  const { mutate: rejectCommentMutate, isPending: rejectCommentPending } =
    useRejectCourseCommentApi(closeModal, checkUserRoles().isAdmin);

  return (
    <>
      <p className="font-peyda">آیا می خواهید این کامنت را رد کنید</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"خیر"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"بله"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={() => rejectCommentMutate(CommentCourseId)}
          isLoading={rejectCommentPending}
        />
      </div>
    </>
  );
}
