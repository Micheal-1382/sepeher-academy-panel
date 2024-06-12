import { Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import { convertQueryParamsToString } from "../../../utils/convertQueryParamsToString";

export default function MainSelect({
  label,
  variant,
  placeholder,
  queryName,
  data,
  className,
}) {
  const [value, setValue] = useState("");

  const location = useLocation();
  const { pathname, search } = location;

  const queryParams = getQueryParams(search);

  const navigate = useNavigate();

  const handleSelectionChange = (e) => {
    const newQuery = {
      ...queryParams,
      [queryName]: e.target.value,
      PageNumber: 1,
    };

    setValue(e.target.value);
    navigate({
      pathname,
      search: convertQueryParamsToString(newQuery),
    });
  };
  return (
    <Select
      label={label}
      variant={variant}
      placeholder={placeholder}
      selectedKeys={[value]}
      classNames={{
        label: ["font-peyda mr-2"],
        popoverContent: ["font-peyda !bg-mainBodyBg dark:!bg-dark"],
        value: ["font-peyda p-0"],
        trigger: ["!bg-mainBodyBg dark:!bg-dark"],
      }}
      onChange={handleSelectionChange}
      className={className}
    >
      {data.map((animal) => (
        <SelectItem key={animal.query}>{animal.name}</SelectItem>
      ))}
    </Select>
  );
}
