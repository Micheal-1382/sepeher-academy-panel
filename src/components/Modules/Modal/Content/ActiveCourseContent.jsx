import React from "react";
import { useActiveAndDeactiveCourseApi } from "../../../../hooks/api/useCoursesApi";
import MainButton from "../../Button/MainButton";

export default function ActiveCourseContent({ id, closeModal }) {
  const { mutate: activeCourseMutate, isPending: activeCoursePending } =
    useActiveAndDeactiveCourseApi(closeModal);
  return (
    <>
      <p className="font-peyda">آیا می خواهید این دوره را فعال کنید</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"خیر"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"بله"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={() =>
            activeCourseMutate({
              active: true,
              id,
            })
          }
          isLoading={activeCoursePending}
        />
      </div>
    </>
  );
}
