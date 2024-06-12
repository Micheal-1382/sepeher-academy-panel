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
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQueryParams } from "../../../utils/getQueryParams";
import { convertQueryParamsToString } from "../../../utils/convertQueryParamsToString";

export default function MainTable({
  data,
  columns,
  renderCell,
  isLoading,
  totalCount,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname, search } = location;

  const queryParams = getQueryParams(search);

  const pages = useMemo(() => {
    return totalCount ? Math.ceil(totalCount / rowsPerPage) : 0;
  }, [totalCount, rowsPerPage]);

  const changePageHandler = (newPage) => {
    const newQuery = {
      ...queryParams,
      PageNumber: newPage,
    };
    setCurrentPage(newPage);
    navigate(pathname + convertQueryParamsToString(newQuery));
  };

  return (
    <Table
      aria-label="Simple Table"
      className="font-peyda"
      classNames={{ wrapper: ["shadow-sm"] }}
      isStriped
      selectionMode="single"
      color={"primary"}
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={currentPage}
              total={pages}
              onChange={changePageHandler}
              classNames={{
                item: ["font-vazir"],
              }}
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
  );
}
