import React from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryInput from "../../Modules/Input/PrimaryInput";
import { Input } from "@nextui-org/react";
import MainButton from "../../Modules/Button/MainButton";
import { useCreateNewsCategoryApi } from "../../../hooks/api/useNewsApi";
import PrimaryTextarea from "../../Modules/Textarea/PrimaryTextarea";

export default function AddNewsCategoryForm() {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    mutate: createNewsCategoryMutate,
    isPending: createNewsCategoryPending,
  } = useCreateNewsCategoryApi(reset);

  const submitFormHandler = async (data) => {
    createNewsCategoryMutate(data);
  };

  const changeImageHandler = (event, onChange) => {
    onChange(event.target.files[0]);
  };

  const changeIconHandler = (event, onChange) => {
    onChange(event.target.files[0]);
  };

  return (
    <form
      onSubmit={handleSubmit(submitFormHandler)}
      className="grid grid-cols-3 gap-4"
    >
      <PrimaryInput
        placeholder={"نام دسته بندی"}
        className={"font-peyda"}
        label={"نام گروه"}
        register={{
          ...register("CategoryName", {
            required: "نام دسته بندی نمی تواند خالی باشد",
          }),
        }}
        isInvalid={Boolean(errors.CategoryName?.message)}
        errorMessage={errors.CategoryName?.message}
      />
      <Controller
        control={control}
        name="Image"
        render={({ field: { onChange } }) => (
          <Input
            className="font-peyda"
            label="عکس"
            placeholder="عکس"
            value={null}
            type="file"
            onChange={(e) => changeImageHandler(e, onChange)}
          />
        )}
      />
      <Controller
        control={control}
        name="IconAddress"
        render={({ field: { onChange } }) => (
          <Input
            className="font-peyda"
            label="آیکون"
            placeholder="آیکون"
            type="file"
            value={null}
            onChange={(e) => changeIconHandler(e, onChange)}
          />
        )}
      />
      <PrimaryInput
        placeholder={"نام آیکون"}
        className={"font-peyda"}
        label={"نام آیکون"}
        register={{
          ...register("IconName", {
            required: "نام آیکون نمی تواند خالی باشد",
          }),
        }}
        isInvalid={Boolean(errors.IconName?.message)}
        errorMessage={errors.IconName?.message}
      />
      <PrimaryInput
        placeholder={"عنوان گوگل"}
        className={"font-peyda"}
        label={"عنوان گوگل"}
        register={{
          ...register("GoogleTitle", {
            required: "عنوان گوگل نمی تواند خالی باشد",
            minLength: {
              value: 40,
              message: "تعداد حروف عنوان گوگل نمی تواند کمتر از ۴۰ باشد",
            },
            maxLength: {
              value: 70,
              message: "تعداد حروف عنوان گوگل نمی تواند بیشتر از ۷۰ باشد",
            },
          }),
        }}
        isInvalid={Boolean(errors.GoogleTitle?.message)}
        errorMessage={errors.GoogleTitle?.message}
      />
      <PrimaryTextarea
        placeholder={"توضیحات گوگل"}
        className={"font-peyda"}
        label={"توضیحات گوگل"}
        register={{
          ...register("GoogleDescribe", {
            required: "توضیحات گوگل نمی تواند خالی باشد",
            minLength: {
              value: 70,
              message: "تعداد حروف توضیحات گوگل نمی تواند کمتر از ۷۰ باشد",
            },
            maxLength: {
              value: 150,
              message: "تعداد حروف توضیحات گوگل نمی تواند بیشتر از ۱۵۰ باشد",
            },
          }),
        }}
        isInvalid={Boolean(errors.GoogleDescribe?.message)}
        errorMessage={errors.GoogleDescribe?.message}
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
          isLoading={createNewsCategoryPending}
        />
      </div>
    </form>
  );
}
