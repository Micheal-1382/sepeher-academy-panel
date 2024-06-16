import React from "react";
import AddNewsCategoryForm from "../../components/Templates/AddNewsCategory/AddNewsCategoryForm";

export default function AddNewsCategoryPage() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h3 className="mb-4 font-peyda text-2xl">افزودن دسته بندی خبر</h3>
      <AddNewsCategoryForm />
    </div>
  );
}
