import React from "react";
import AddCourseCategoriesForm from "../../components/Templates/AddCourseCategories/AddCourseCategoriesForm";

export default function AddCourseCategoriesPage() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h3 className="mb-4 font-peyda text-2xl">افزودن دسته بندی دوره</h3>
      <AddCourseCategoriesForm />
    </div>
  );
}
