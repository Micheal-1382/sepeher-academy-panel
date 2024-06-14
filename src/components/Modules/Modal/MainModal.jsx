import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import React from "react";

export default function MainModal({ isOpen, size = "md", body }) {
  return (
    <Modal
      isOpen={isOpen}
      backdrop="blur"
      size={size}
      scrollBehavior={"inside"}
    >
      <ModalContent>
        <ModalBody className="py-4">{body}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
