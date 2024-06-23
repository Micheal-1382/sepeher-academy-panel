import React, { useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import MainTable from "../../Modules/Table/MainTable";
import MainTooltip from "../../Modules/MainTooltip/MainTooltip";
import { Chip, Image, useDisclosure } from "@nextui-org/react";
import editIcon from "../../../assets/icons/outlined/edit.svg";
import trashIcon from "../../../assets/icons/outlined/trash.svg";
import HorizontalFilterBox from "./UsersFilterBox";
import { sortTypeItems } from "../../../constants/sortTypeItems";
import commentSortingColItems from "../../../constants/commentSortingColItems";
import {
  useDeleteUserApi,
  useUpdateUserApi,
  useUserListApi,
} from "../../../hooks/api/useUserApi";
import MainModal from "../../Modules/Modal/MainModal";
import { DeleteBody } from "../../Modules/Modal/Content/DeleteUserContent";
import { UpdateBody } from "../../Modules/Modal/Content/UpdateUserContent";

const columns = [
  { name: "نام", uid: "fname" },
  { name: "نام خانوادگی", uid: "lname" },
  { name: "ایمیل", uid: "gmail" },
  { name: "شماره همراه", uid: "phoneNumber" },
  { name: "سطح کاربر", uid: "userRoles" },
  { name: "وضعیت کاربر", uid: "active" },
  { name: "عملیات", uid: "actions" },
];

export default function UsersList() {
  const location = useLocation();
  const { search } = location;

  const queryParams = getQueryParams(search);

  const selectedUserData = useRef();

  const {
    isOpen: isDeleteModalOpen,
    onClose: onCloseDeleteModal,
    onOpen: onOpenDeleteModal,
    onOpenChange: onOpenChangeDeleteModal,
  } = useDisclosure();

  const {
    isOpen: isEditeModalOpen,
    onClose: onCloseEditeModal,
    onOpen: onOpenEditModal,
    onOpenChange: onOpenChangeEditModal,
  } = useDisclosure();

  const { data, isLoading } = useUserListApi(queryParams);

  const { mutate: deleteUserMutate, isPending: deleteUserPending } =
    useDeleteUserApi(onCloseDeleteModal);

  const { mutate: updateUserMutate, isPending: updateUserPending } =
    useUpdateUserApi(onCloseEditeModal);

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "gmail":
        return <p className="font-peyda">{cellValue}</p>;
      case "phoneNumber":
        return <p className="font-peyda">{cellValue}</p>;
      case "active":
        return (
          <Chip
            color={cellValue === "True" ? "success" : "danger"}
            className="text-btnText font-peyda"
          >
            {cellValue === "True" ? "فعال" : "غیرفعال"}
          </Chip>
        );
      case "userRoles":
        return <p className="font-peyda">{cellValue}</p>;
      case "fname":
        return <p className="font-peyda">{cellValue}</p>;
      case "lname":
        return <p className="font-peyda">{cellValue}</p>;
      case "actions":
        return (
          <div className="relative flex !items-center gap-2">
            <MainTooltip content="ویرایش">
              <Image
                alt=""
                src={editIcon}
                width={20}
                onClick={() => {
                  selectedUserData.current = user.id;
                  onOpenEditModal();
                }}
              />
            </MainTooltip>
            <MainTooltip color="danger" content="حذف">
              <Image
                alt=""
                src={trashIcon}
                width={20}
                onClick={() => {
                  selectedUserData.current = user.id;
                  onOpenDeleteModal();
                }}
              />
            </MainTooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <div className="space-y-3">
      <HorizontalFilterBox
        placeholder={"جستجو"}
        sortTypeArray={sortTypeItems}
        sortingColArray={commentSortingColItems}
      />
      <MainTable
        data={data?.listUser ?? []}
        columns={columns}
        renderCell={renderCell}
        isLoading={isLoading}
        totalCount={data?.totalCount ?? 0}
      />
      <MainModal
        isOpen={isDeleteModalOpen}
        onOpenChange={onOpenChangeDeleteModal}
        body={
          <DeleteBody
            closeModal={onCloseDeleteModal}
            action={() => deleteUserMutate(selectedUserData.current)}
            actionLoading={deleteUserPending}
          />
        }
      />
      <MainModal
        isOpen={isEditeModalOpen}
        onOpenChange={onOpenChangeEditModal}
        size="3xl"
        body={
          <UpdateBody
            userId={selectedUserData.current}
            closeModal={onCloseEditeModal}
            action={updateUserMutate}
            actionLoading={updateUserPending}
          />
        }
      />
    </div>
  );
}
