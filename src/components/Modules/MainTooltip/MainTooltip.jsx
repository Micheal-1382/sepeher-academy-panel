import { Tooltip } from "@nextui-org/react";
import React from "react";

export default function MainTooltip({ children, content, color }) {
  return (
    <Tooltip
      content={<span className="font-peyda text-sm">{content}</span>}
      className="rounded-md !p-2"
      showArrow
      color={color}
    >
      {children}
    </Tooltip>
  );
}
