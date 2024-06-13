import React from "react";
import { useForm } from "react-hook-form";
import PrimaryInput from "../../Modules/Input/PrimaryInput";
import MainButton from "../../Modules/Button/MainButton";
import { useAddCourseGroupApi } from "../../../hooks/api/useCoursesApi";

export default function AddCourseCategoriesForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useAddCourseGroupApi(reset);

  const submitFormHandler = (data) => {
    mutate(data);
  };

  return (
    <form
      className="grid grid-cols-3 gap-4"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <PrimaryInput
        placeholder={"نام گروه"}
        className={"font-peyda"}
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
        className={"font-peyda"}
        register={{
          ...register("CourseId", {
            required: "شناسه دوره نمی تواند خالی باشد",
          }),
        }}
        isInvalid={Boolean(errors.CourseId?.message)}
        errorMessage={errors.CourseId?.message}
      />
      <PrimaryInput
        placeholder={"ظرفیت گروه"}
        className={"font-peyda"}
        register={{
          ...register("GroupCapacity", {
            required: "ظرفیت گروه نمی تواند خالی باشد",
          }),
        }}
        isInvalid={Boolean(errors.GroupCapacity?.message)}
        errorMessage={errors.GroupCapacity?.message}
        type="number"
      />
      <div className="flex items-center gap-2">
        <MainButton
          content={"پاکسازی"}
          className={"font-peyda !bg-secondary text-btnText w-1/2"}
          onClick={() => reset()}
        />
        <MainButton
          content={"افزودن دسته بندی"}
          className={"font-peyda !bg-primary text-btnText w-1/2"}
          type="submit"
          isLoading={isPending}
        />
      </div>
    </form>
  );
}
