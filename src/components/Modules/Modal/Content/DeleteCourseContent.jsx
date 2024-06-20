import React from "react";
import MainButton from "../../Button/MainButton";
import { useDeleteCourseApi } from "../../../../hooks/api/useCoursesApi";

export default function DeleteCourseContent({ payload, closeModal }) {
  const { mutate: deleteCourseMutate, isPending: deleteCoursePending } =
    useDeleteCourseApi(closeModal);

  return (
    <>
      <p className="font-peyda">آیا از حذف دوره موردنظر مطمئن هستید؟</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"بازگشت"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"حذف"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={() => deleteCourseMutate(payload)}
          isLoading={deleteCoursePending}
        />
      </div>
    </>
  );
}
