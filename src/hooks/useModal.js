import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerModal = (value) => {
    setIsOpen(value);
  };

  return { isOpen, triggerModal };
};
