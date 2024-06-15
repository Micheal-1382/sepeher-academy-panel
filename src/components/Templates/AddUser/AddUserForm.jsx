import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useCreateUserApi } from "../../../hooks/api/useUserApi";
import PrimaryInput from "../../Modules/Input/PrimaryInput";
import MainButton from "../../Modules/Button/MainButton";
import { Switch } from "@nextui-org/react";

export default function AddUserForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useCreateUserApi(reset);

  const submitFormHandler = (data) => {
    mutate(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitFormHandler)}>
      <div className="grid grid-cols-3 gap-4">
        <PrimaryInput
          placeholder={"نام"}
          className={"font-peyda"}
          label={"نام"}
          register={{
            ...register("firstName", {
              required: "نام نمی تواند خالی باشد",
            }),
          }}
          isInvalid={Boolean(errors.firstName?.message)}
          errorMessage={errors.firstName?.message}
        />
        <PrimaryInput
          placeholder={"نام خانوادگی"}
          label={"نام خانوادگی"}
          className={"font-peyda"}
          register={{
            ...register("lastName", {
              required: "نام خانوادگی نمی تواند خالی باشد",
            }),
          }}
          isInvalid={Boolean(errors.lastName?.message)}
          errorMessage={errors.lastName?.message}
        />
        <PrimaryInput
          placeholder={"شماره موبایل"}
          label={"شماره موبایل"}
          className={"font-peyda"}
          register={{
            ...register("phoneNumber", {
              required: "شماره موبایل نمی تواند خالی باشد",
              pattern: {
                value:
                  /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g,
                message: "شماره موبایل وارد شده صحیح نیست",
              },
            }),
          }}
          isInvalid={Boolean(errors.phoneNumber?.message)}
          errorMessage={errors.phoneNumber?.message}
          type="number"
        />
        <PrimaryInput
          placeholder={"رمز عبور"}
          className={"font-peyda"}
          label={"رمز عبور"}
          register={{
            ...register("password", {
              required: "رمز عبور نمی تواند خالی باشد",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
                message: "فرمت رمز عبور صحیح نیست",
              },
            }),
          }}
          isInvalid={Boolean(errors.password?.message)}
          type="password"
          errorMessage={errors.password?.message}
        />
        <PrimaryInput
          placeholder={"ایمیل"}
          className={"font-peyda"}
          label={"ایمیل"}
          register={{
            ...register("gmail", {
              required: "ایمیل نمی تواند خالی باشد",
              pattern: {
                value:
                  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
                message: "فرمت ایمیل وارد شده صحیح نیست",
              },
            }),
          }}
          isInvalid={Boolean(errors.gmail?.message)}
          errorMessage={errors.gmail?.message}
        />
        <div className="flex items-center gap-4">
          <Controller
            defaultValue={false}
            name="isStudent"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="flex items-center">
                <p className="font-peyda">آیا دانشجو است؟</p>
                <Switch
                  isSelected={value}
                  onChange={(event) => {
                    onChange(event.target.checked);
                  }}
                />
              </div>
            )}
          />
          <Controller
            defaultValue={false}
            name="isTeacher"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="flex items-center">
                <p className="font-peyda">آیا استاد است؟</p>
                <Switch
                  isSelected={value}
                  onChange={(event) => {
                    onChange(event.target.checked);
                  }}
                />
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MainButton
          content={"پاکسازی"}
          className={"font-peyda !bg-secondary text-btnText"}
          onClick={() => reset()}
        />
        <MainButton
          content={"افزودن کاربر"}
          className={"font-peyda !bg-primary text-btnText"}
          type="submit"
          isLoading={isPending}
        />
      </div>
    </form>
  );
}
