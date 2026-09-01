"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

interface UserTableProps<T> {
  title: string;
  rows: T[];
  columns: Array<{
    key: keyof T | string;
    label: string;
    render?: (row: T) => React.ReactNode;
    className?: string;
  }>;
  pageSize?: number;
  onView?: (row: T) => void;
}

export function UserTable<T>({
  title,
  rows,
  columns,
  pageSize = 6,
  onView,
}: UserTableProps<T>) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [currentPage, pageSize, rows]);

  return (
    <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500">{rows.length} total records</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              {columns.map((column) => (
                <TableHead key={String(column.key)} className={column.className ?? "text-left text-slate-600"}>
                  {column.label}
                </TableHead>
              ))}
              {onView ? <TableHead className="w-20 text-right text-slate-600">Action</TableHead> : null}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + (onView ? 1 : 0)} className="py-10 text-center text-sm text-slate-500">
                  No records match the current filters.
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row, index) => (
                <TableRow key={index} className="align-middle hover:bg-slate-50/70">
                  {columns.map((column) => (
                    <TableCell key={String(column.key)} className={column.className ?? "text-slate-700"}>
                      {column.render ? column.render(row) : (row as any)[column.key as keyof T]}
                    </TableCell>
                  ))}
                  {onView ? (
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => onView(row)} className="h-8 px-2 text-slate-600 hover:text-slate-900">
                        <Eye className="mr-1 h-4 w-4" /> View
                      </Button>
                    </TableCell>
                  ) : null}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <CardContent className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3">
        <p className="text-xs text-slate-500">
          Showing {paginatedRows.length ? (currentPage - 1) * pageSize + 1 : 0} - {Math.min(currentPage * pageSize, rows.length)} of {rows.length}
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Prev
          </Button>
          <span className="text-xs font-medium text-slate-600">Page {currentPage} / {totalPages}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((page) => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
