import React from "react";
import { useDeleteCourseCommentApi } from "../../../../hooks/api/useCommentApi";
import { checkUserRoles } from "../../../../utils/checkUserRoles";
import MainButton from "../../Button/MainButton";

export default function DeleteCommentContent({ CourseCommandId, closeModal }) {
  const { mutate: deleteCommentMutate, isPending: deleteCommentPending } =
    useDeleteCourseCommentApi(closeModal, checkUserRoles().isAdmin);

  return (
    <>
      <p className="font-peyda">آیا از حذف کامنت موردنظر مطمئن هستید؟</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"بازگشت"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"حذف"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={() => deleteCommentMutate(CourseCommandId)}
          isLoading={deleteCommentPending}
        />
      </div>
    </>
  );
}
