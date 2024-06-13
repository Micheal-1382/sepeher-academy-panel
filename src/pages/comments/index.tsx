import React from "react";
import CommentList from "../../components/Templates/Comments/CommentsList";

export default function CoursesPage() {
  return (
    <div>
      <h3 className="mb-4 font-peyda text-2xl">همه کامنت ها</h3>
      <CommentList />
    </div>
  );
}