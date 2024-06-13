import React from "react";
import UsersList from "../../components/Templates/Users/UsersList";

export default function UsersPage() {
  return (
    <div>
      <h3 className="mb-4 font-peyda text-2xl">همه کاربران</h3>
      <UsersList />
    </div>
  );
}