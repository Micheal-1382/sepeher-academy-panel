import { Input } from "@nextui-org/react";
import React from "react";

export default function PrimaryInput({
  placeholder,
  variant,
  className,
  type = "text",
  register,
  hasBorder = true,
  startContent,
  endContent,
  isInvalid,
  errorMessage,
  isDisabled = false,
}) {
  return (
    <Input
      className={className}
      variant={variant}
      type={type}
      classNames={{
        input: [
          "placeholder:text-lightBody",
          "dark:placeholder:text-darkBody",
          "!text-black dark:!text-white",
        ],
        mainWrapper: ["overflow-hidden", "rounded-[16px]"],
        errorMessage: ["!text-secondary"],
        inputWrapper: [
          "!duration-700",
          "transition",
          "ease-in-out",
          "overflow-hidden",
          "rounded-[16px]",
          "py-8",
          "bg-white",
          "dark:bg-dark-lighter",
          "group-data-[focus=true]:bg-white",
          "dark:group-data-[focus=true]:bg-dark-lighter",
          `${!hasBorder && "border-none"}`,
        ],
        innerWrapper: ["h-auto"],
      }}
      placeholder={placeholder}
      {...register}
      startContent={startContent}
      endContent={endContent}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
    />
  );
}
