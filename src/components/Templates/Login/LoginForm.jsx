import React from "react";
import PrimaryInput from "../../Modules/Input/PrimaryInput";
import { combinedEmailAndPhoneRegex } from "../../../utils/combinedEmailAndPhoneRegex";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "@nextui-org/react";
import MainButton from "../../Modules/Button/MainButton";
import { useLoginUserApi } from "../../../hooks/api/useAuthApi";

export default function LoginForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useLoginUserApi();

  const submitFormHandler = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitFormHandler)}
      className="flex flex-col gap-3"
    >
      <PrimaryInput
        placeholder="شماره موبایل/جیمیل"
        variant="faded"
        className="font-peyda"
        type="text"
        register={{
          ...register("phoneOrGmail", {
            required: "شماره موبایل/جیمیلت رو نمیتونی خالی بذاری",
            pattern: {
              value: combinedEmailAndPhoneRegex(),
              message: "شماره موبایل/جیمیلت که نوشتی درست نیست",
            },
          }),
        }}
        isInvalid={Boolean(errors.phoneOrGmail)}
        errorMessage={errors.phoneOrGmail?.message}
      />
      <PrimaryInput
        placeholder="رمزعبور"
        variant="faded"
        className="font-peyda"
        type="text"
        register={{
          ...register("password", {
            required: "رمزعبورت رو نمیتونی خالی بذاری",
          }),
        }}
        isInvalid={Boolean(errors.password)}
        errorMessage={errors.password?.message}
      />
      <div className="mt-1">
        <Controller
          control={control}
          defaultValue={false}
          name="rememberMe"
          render={({ field: { onChange, value } }) => (
            <Checkbox
              isSelected={value}
              classNames={{
                label: ["ms-1 font-peyda text-lightBody dark:text-darkBody"],
              }}
              onChange={(newValue) => onChange(newValue)}
            >
              منو فراموش نکن
            </Checkbox>
          )}
        />
      </div>
      <MainButton
        content={"ورود"}
        type="submit"
        className="!bg-primary !dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl font-peyda"
        isLoading={isPending}
      />
    </form>
  );
}
