import { useDeleteNewsFileApi } from "../../../../hooks/api/useNewsApi";
import MainButton from "../../Button/MainButton";

export const DeleteNewsBody = ({fileId, closeModal}) => {
  const { mutate: deleteNewsMutate, isPending: deleteNewsPending } =
    useDeleteNewsFileApi();

  return (
    <>
      <p className="font-peyda">آیا از حذف خبر موردنظر مطمئن هستید؟</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"بازگشت"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={closeModal}
        />
        <MainButton
          content={"حذف"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={() => deleteNewsMutate({ fileId })}
          isLoading={deleteNewsPending}
        />
      </div>
    </>
  );
};
