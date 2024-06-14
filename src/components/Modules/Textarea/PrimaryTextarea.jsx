import { Textarea } from "@nextui-org/react";
import React from "react";

export default function PrimaryTextarea({
  placeholder,
  label,
  variant,
  className,
  register,
  isInvalid,
  errorMessage,
}) {
  return (
    <Textarea
      className={className}
      disableAnimation
      disableAutosize
      label={label}
      placeholder={placeholder}
      variant={variant}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      {...register}
      classNames={{
        mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
        inputWrapper: [
          "bg-transparent border-1 dark:border-black-15 rounded-2xl",
        ],
        input: ["bg-transparent"],
        innerWrapper: ["bg-transparent"],
      }}
    />
  );
}
