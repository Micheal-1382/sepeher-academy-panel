import React from "react";
import AddUserForm from "../../components/Templates/AddUser/AddUserForm";

export default function AddUserPage() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h3 className="mb-4 font-peyda text-2xl">افزودن کاربر</h3>
      <AddUserForm />
    </div>
  );
}
