import { Card } from "@nextui-org/react";
import React from "react";

export default function CourseCategoryDetailsBox({
  courseCapacity,
  courseId,
  courseName,
  groupCapacity,
  groupId,
  groupName,
  teacherId,
  teacherName,
}) {
  return (
    <Card className="font-peyda p-4 shadow-sm grid grid-cols-3 gap-2">
      <div className="flex items-center gap-2">
        <p>نام گروه:</p>
        <p className="!text-primary">{groupName}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>ظرفیت گروه:</p>
        <p className="!text-primary">{groupCapacity}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>نام دوره:</p>
        <p className="!text-primary">{courseName}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>ظرفیت دوره:</p>
        <p className="!text-primary">{courseCapacity}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>نام استاد:</p>
        <p className="!text-primary">{teacherName}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>شناسه دوره:</p>
        <p className="!text-primary">{courseId}</p>
      </div>
    </Card>
  );
}
