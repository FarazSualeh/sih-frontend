"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";

interface UserFiltersProps {
  search: string;
  status: string;
  department: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onReset: () => void;
  departments: string[];
  statusOptions: string[];
}

export function UserFilters({
  search,
  status,
  department,
  onSearchChange,
  onStatusChange,
  onDepartmentChange,
  onReset,
  departments,
  statusOptions,
}: UserFiltersProps) {
  return (
    <Card className="border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name, email or ID"
            className="h-10 border-slate-200 bg-slate-50 pl-9 text-sm focus-visible:ring-sky-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2">
            <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            <select
              value={status}
              onChange={(event) => onStatusChange(event.target.value)}
              className="border-0 bg-transparent text-sm text-slate-700 outline-none"
            >
              <option value="all">All status</option>
              {statusOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2">
            <select
              value={department}
              onChange={(event) => onDepartmentChange(event.target.value)}
              className="border-0 bg-transparent text-sm text-slate-700 outline-none"
            >
              <option value="all">All departments</option>
              {departments.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <Button variant="outline" onClick={onReset} className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>
      </div>
    </Card>
  );
}
