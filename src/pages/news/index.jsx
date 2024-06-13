import React from "react";
import CommentList from "../../components/Templates/Comments/CommentsList";

export default function NewsPage() {
  return (
    <div>
      <h3 className="mb-4 font-peyda text-2xl">همه کامنت</h3>
      <CommentList />
    </div>
  );
}
