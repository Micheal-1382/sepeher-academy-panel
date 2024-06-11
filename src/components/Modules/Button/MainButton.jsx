import React from "react";
import { Button } from "@nextui-org/react";

function MainButton({
  className,
  content,
  type = "button",
  variant = "solid",
  startIcon,
  endIcon,
  color = "default",
  onClick,
  isDisabled,
  isLoading,
}) {
  return (
    <Button
      className={className}
      type={type}
      variant={variant}
      startContent={startIcon}
      endContent={endIcon}
      onClick={onClick}
      color={color}
      isDisabled={isDisabled}
      isLoading={isLoading}
    >
      {content}
    </Button>
  );
}

export default MainButton;
