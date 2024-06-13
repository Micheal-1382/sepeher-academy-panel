import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";

export default function MainModal({ isOpen, header, body, footer }) {
  return (
    <Modal isOpen={isOpen} backdrop="blur">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter className="justify-start">{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
}
