import {
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import { convertQueryParamsToString } from "../../../utils/convertQueryParamsToString";
import MainSelect from "../Select/MainSelect";
import { rowsPerPage } from "../../../constants/rowsPerPage";

export default function MainTable({
  data,
  columns,
  renderCell,
  isLoading,
  totalCount,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsOfPage, setRowsOfPage] = useState(10);

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname, search } = location;

  const queryParams = getQueryParams(search);

  useEffect(() => {
    if (queryParams?.RowsOfPage) {
      setRowsOfPage(queryParams?.RowsOfPage);
    }
  }, []);

  const pages = useMemo(() => {
    return totalCount ? Math.ceil(totalCount / rowsOfPage) : 0;
  }, [totalCount, rowsOfPage]);

  const changePageHandler = (newPage) => {
    const newQuery = {
      ...queryParams,
      PageNumber: newPage,
    };
    setCurrentPage(newPage);
    navigate(pathname + convertQueryParamsToString(newQuery));
  };

  return (
    <div>
      <Table
        aria-label="Simple Table"
        className="font-peyda"
        classNames={{ wrapper: ["shadow-sm"] }}
        isStriped
        selectionMode="single"
        color={"primary"}
        bottomContent={
          pages > 0 ? (
            <div className="flex justify-between gap-2 items-center">
              <Pagination
                showControls
                isCompact
                color="primary"
                page={currentPage}
                total={pages}
                onChange={changePageHandler}
                classNames={{
                  item: ["font-vazir"],
                  wrapper: ["flex flex-row-reverse max-w-none"],
                }}
              />
              <MainSelect
                label={"تعداد سطر"}
                variant={"bordered"}
                data={rowsPerPage}
                className={"w-[150px]"}
                queryName={"RowsOfPage"}
              />
            </div>
          ) : null
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              className="text-right"
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          loadingContent={
            <div className="flex items-center gap-2">
              <span>درحال بارگیری</span>
              <Spinner />
            </div>
          }
          isLoading={isLoading}
          items={data}
          emptyContent={"هیچ رکوردی یافت نشد"}
        >
          {(item) => (
            <TableRow key={item.courseId}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
