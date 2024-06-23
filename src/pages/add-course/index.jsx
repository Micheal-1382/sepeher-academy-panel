import React from "react";
import AddCourseForm from "../../components/Templates/AddCourse/AddCourseForm";

export default function AddCoursePage() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h3 className="mb-4 font-peyda text-2xl">افزودن دوره</h3>
      <AddCourseForm />
    </div>
  );
}
