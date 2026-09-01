"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface UserDetailDialogProps {
  open: boolean;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export function UserDetailDialog({ open, title, subtitle, children, onClose }: UserDetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="max-w-2xl border-slate-200 bg-white p-0">
        <DialogHeader className="border-b border-slate-200 px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-xl font-semibold text-slate-900">{title}</DialogTitle>
              {subtitle ? <DialogDescription className="mt-1 text-sm text-slate-500">{subtitle}</DialogDescription> : null}
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="px-6 py-5">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const palette: Record<string, string> = {
    Active: "bg-emerald-100 text-emerald-700",
    Inactive: "bg-slate-200 text-slate-700",
    Suspended: "bg-amber-100 text-amber-700",
    Verified: "bg-emerald-100 text-emerald-700",
    Pending: "bg-amber-100 text-amber-700",
    Rejected: "bg-rose-100 text-rose-700",
    "Full Admin": "bg-violet-100 text-violet-700",
    Faculty: "bg-sky-100 text-sky-700",
    "Department Coordinator": "bg-indigo-100 text-indigo-700",
    Disabled: "bg-rose-100 text-rose-700",
  };

  return <Badge className={`${palette[status] ?? "bg-slate-100 text-slate-700"} border-0`}>{status}</Badge>;
}
