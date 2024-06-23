import React from "react";
import { useSendReserveToCourseApi } from "../../../../hooks/api/useCoursesApi";
import MainButton from "../../Button/MainButton";

export default function AddToCourseStudentContent({ payload, closeModal }) {
  const {
    mutate: sendReserveToCourseMutate,
    isPending: sendReserveToCoursePending,
  } = useSendReserveToCourseApi(closeModal);

  return (
    <>
      <p className="font-peyda">آیا میخواهید این کاربر را داشنجوی دوره کنید؟</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"خیر"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"بله"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={() => sendReserveToCourseMutate(payload)}
          isLoading={sendReserveToCoursePending}
        />
      </div>
    </>
  );
}
