import React from "react";
import CourseReservesList from "../../components/Templates/CourseReserves/CourseReservesList";

export default function CourseReservesPage() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h3 className="font-peyda text-2xl">دانشجویان رزرو شده دروس</h3>
      <CourseReservesList />
    </div>
  );
}
