import { useForm } from "react-hook-form";
import PrimaryInput from "../../Input/PrimaryInput";
import MainButton from "../../Button/MainButton";

export const UpdateBody = ({
  defaultValues,
  triggerModal,
  action,
  actionLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Id: defaultValues.groupId,
      GroupName: defaultValues.groupName,
      CourseId: defaultValues.courseId,
      GroupCapacity: defaultValues.groupCapacity,
    },
  });

  const submitFormHandler = (data) => {
    action(data);
  };

  return (
    <form onSubmit={handleSubmit(submitFormHandler)} className="space-y-6">
      <p className="font-peyda text-xl mb-4">ویرایش دسته بندی</p>
      <div className="grid grid-cols-2 gap-2">
        <PrimaryInput
          placeholder={"شناسه"}
          className={"font-peyda"}
          label={"شناسه"}
          variant="faded"
          register={{
            ...register("Id", {
              required: "نام گروه نمی تواند خالی باشد",
            }),
          }}
          isInvalid={Boolean(errors.Id?.message)}
          errorMessage={errors.Id?.message}
          isDisabled={true}
        />
        <PrimaryInput
          placeholder={"نام گروه"}
          label={"نام گروه"}
          className={"font-peyda"}
          variant="faded"
          register={{
            ...register("GroupName", {
              required: "نام گروه نمی تواند خالی باشد",
            }),
          }}
          isInvalid={Boolean(errors.GroupName?.message)}
          errorMessage={errors.GroupName?.message}
        />
        <PrimaryInput
          placeholder={"شناسه دوره"}
          label={"شناسه دوره"}
          className={"font-peyda"}
          variant="faded"
          register={{
            ...register("CourseId", {
              required: "شناسه دوره نمی تواند خالی باشد",
            }),
          }}
          isInvalid={Boolean(errors.CourseId?.message)}
          errorMessage={errors.CourseId?.message}
          isDisabled={true}
        />
        <PrimaryInput
          placeholder={"ظرفیت گروه"}
          label={"ظرفیت گروه"}
          className={"font-peyda"}
          variant="faded"
          register={{
            ...register("GroupCapacity", {
              required: "نام گروه نمی تواند خالی باشد",
            }),
          }}
          type="number"
          isInvalid={Boolean(errors.GroupCapacity?.message)}
          errorMessage={errors.GroupCapacity?.message}
        />
      </div>
      <div className="flex items-center gap-2">
        <MainButton
          content={"بازگشت"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={() => triggerModal(false)}
        />
        <MainButton
          content={"بروزرسانی"}
          className={"!bg-secondary text-btnText font-peyda"}
          type="submit"
          isLoading={actionLoading}
        />
      </div>
    </form>
  );
};
