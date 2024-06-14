import React from "react";
import searchIcon from "../../../assets/icons/filter/search.svg";
import { Divider, Image } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import { convertQueryParamsToString } from "../../../utils/convertQueryParamsToString";
import PrimaryInput from "../../Modules/Input/PrimaryInput";
import MainButton from "../../Modules/Button/MainButton";
import MainSelect from "../../Modules/Select/MainSelect";

export default function HorizontalFilterBox({
  placeholder,
  sortingColArray,
  sortTypeArray,
}) {
  const location = useLocation();
  const { pathname, search } = location;

  const navigate = useNavigate();

  const queryParams = getQueryParams(search);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      Query: queryParams?.Query ?? "",
    },
  });

  const submitFormHandler = (data) => {
    let newQuery = { ...queryParams };

    if (data.Query.trim()) {
      newQuery = {
        ...queryParams,
        Query: data.Query,
        PageNumber: "1",
      };
    } else {
      delete newQuery.Query;
    }

    navigate(pathname + convertQueryParamsToString(newQuery));
  };

  return (
    <div className="bg-white dark:bg-dark-lighter flex items-center gap-2 flex-row rounded-xl p-2 shadow-sm">
      <form
        className="relative w-[50%] sm:w-[35%] lg:w-[25%]"
        onSubmit={handleSubmit(submitFormHandler)}
      >
        <PrimaryInput
          placeholder={placeholder}
          variant="faded"
          className="text-2xl font-peyda w-full"
          hasBorder={false}
          register={{
            ...register("Query"),
          }}
        />
        <MainButton
          className="absolute left-0 top-0 min-w-unit-0"
          content={
            <img alt="" src={searchIcon} className="cursor-pointer m-0 w-6" />
          }
          type="submit"
        />
      </form>
      <div className="hidden lg:flex items-center w-full gap-8">
        <ul className="items-center gap-x-6 font-peyda text-[13px] md:text-[15px] flex mb-0">
          <li className="w-3 h-5 flex justify-center items-center relative">
            <Divider className="w-8 md:w-12 absolute top-[50%] md:-left-[200%] lg:-left-[150%] rotate-90" />
          </li>
          <li>
            <span className="font-peyda">مرتب سازی براساس :</span>
          </li>
          {sortingColArray.map((item, index) => {
            const newQuery = {
              ...queryParams,
              SortingCol: item.query,
              PageNumber: "1",
            };

            return (
              <li key={index}>
                <Link
                  to={{
                    pathname,
                    search: convertQueryParamsToString(newQuery),
                  }}
                  className={`${
                    queryParams.SortingCol === item.query
                      ? "!text-primary dark:text-primary-lighter"
                      : "!text-gray-lighter"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <MainSelect
          data={sortTypeArray}
          label="نوع مرتب سازی"
          queryName="SortType"
          className="w-[160px]"
        />
      </div>
      <div className="lg:hidden w-[50%] flex gap-2 items-center">
        <Divider className="w-8 md:w-12 rotate-90 -mr-4" />
        <div className="flex items-center gap-2 flex-wrap">
          <MainSelect
            data={sortingColArray}
            label="مرتب سازی براساس"
            queryName="SortingCol"
            className="w-[150px]"
          />
          <MainSelect
            data={sortTypeArray}
            label="نوع مرتب سازی"
            queryName="SortType"
            className="w-[150px]"
          />
        </div>
      </div>
    </div>
  );
}
