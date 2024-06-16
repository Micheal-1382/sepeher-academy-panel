import { useDeleteCourseReserveApi } from "../../../../hooks/api/useCoursesApi";
import MainButton from "../../Button/MainButton";

export const DeleteBody = ({ reserveId, closeModal }) => {
  const {
    mutate: deleteCourseReserveMutate,
    isPending: deleteCourseReservePending,
  } = useDeleteCourseReserveApi(closeModal);

  return (
    <>
      <p className="font-peyda">آیا از حذف دانشجو رزرو موردنظر مطمئن هستید؟</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"بازگشت"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"حذف"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={() => deleteCourseReserveMutate(reserveId)}
          isLoading={deleteCourseReservePending}
        />
      </div>
    </>
  );
};
