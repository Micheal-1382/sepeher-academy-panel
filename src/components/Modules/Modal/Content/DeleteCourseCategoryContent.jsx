import { useDeleteCourseGroupApi } from "../../../../hooks/api/useCoursesApi";
import MainButton from "../../../Modules/Button/MainButton";

export const DeleteBody = ({ id, closeModal }) => {
  const {
    mutate: deleteCourseCategoryMutate,
    isPending: deleteCourseCategoryPending,
  } = useDeleteCourseGroupApi(closeModal);

  return (
    <>
      <p className="font-peyda">آیا از حذف دسته بندی موردنظر مطمئن هستید؟</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"بازگشت"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"حذف"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={() => deleteCourseCategoryMutate(id)}
          isLoading={deleteCourseCategoryPending}
        />
      </div>
    </>
  );
};
