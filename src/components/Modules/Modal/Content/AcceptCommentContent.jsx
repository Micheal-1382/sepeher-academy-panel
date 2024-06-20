import React from "react";
import { useAcceptCourseCommentApi } from "../../../../hooks/api/useCommentApi";
import MainButton from "../../Button/MainButton";
import { checkUserRoles } from "../../../../utils/checkUserRoles";

export default function AcceptCommentContent({ CommentCourseId, closeModal }) {
  const { mutate: acceptCommentMutate, isPending: acceptCommentPending } =
    useAcceptCourseCommentApi(closeModal, checkUserRoles().isAdmin);

  return (
    <>
      <p className="font-peyda">آیا می خواهید این کامنت را تایید کنید</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"خیر"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"بله"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={() => acceptCommentMutate(CommentCourseId)}
          isLoading={acceptCommentPending}
        />
      </div>
    </>
  );
}
