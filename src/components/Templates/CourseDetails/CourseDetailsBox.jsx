import { Card, Skeleton } from "@nextui-org/react";
import React from "react";
import addCommasToPersianNumber from "../../../utils/addCommasToPersianDigit";
import convertToPersianDigit from "../../../utils/convertToPersianDigit";

export default function CourseDetailsBox({
  title,
  describe,
  teacherName,
  courseStatusName,
  courseLevelName,
  cost,
  isLoading,
}) {
  return (
    <Card className="font-peyda p-4 shadow-sm grid grid-cols-3 gap-2">
      <div className="flex items-center gap-2">
        <p>نام دوره:</p>
        {isLoading ? (
          <Skeleton className="rounded-md w-[100px] h-[25px]" />
        ) : (
          <p className="!text-primary">{title}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p>توضیحات:</p>
        {isLoading ? (
          <Skeleton className="rounded-md w-[100px] h-[25px]" />
        ) : (
          <p className="!text-primary">{describe}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p>نام استاد:</p>
        {isLoading ? (
          <Skeleton className="rounded-md w-[100px] h-[25px]" />
        ) : (
          <p className="!text-primary">{teacherName}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p>وضعیت دوره:</p>
        {isLoading ? (
          <Skeleton className="rounded-md w-[100px] h-[25px]" />
        ) : (
          <p className="!text-primary">{courseStatusName}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p>سطح دوره:</p>
        {isLoading ? (
          <Skeleton className="rounded-md w-[100px] h-[25px]" />
        ) : (
          <p className="!text-primary">{courseLevelName}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p>قیمت:</p>
        {isLoading ? (
          <Skeleton className="rounded-md w-[100px] h-[25px]" />
        ) : (
          <p className="!text-primary">
            {addCommasToPersianNumber(convertToPersianDigit(cost))} ریال
          </p>
        )}
      </div>
    </Card>
  );
}
