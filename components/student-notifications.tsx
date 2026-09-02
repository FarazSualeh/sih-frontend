"use client";

import { Bell, Check, X } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const notifications = [
  { title: "Razorpay moved your application to Interview", time: "2 hours ago", unread: true },
  { title: "Your JavaScript assessment result is verified", time: "Yesterday", unread: true },
  { title: "3 new opportunities match your profile", time: "2 days ago", unread: false },
];

export function StudentNotifications() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(notifications);
  const unread = items.filter((item) => item.unread).length;

  return (
    <>
      <button
        aria-label={`${unread} unread notifications`}
        className="relative rounded-lg p-2 text-muted hover:bg-[#efefea]"
        onClick={() => setOpen(true)}
      >
        <Bell />
        {unread > 0 && <span className="absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-coral px-1 text-[0.55rem] font-bold text-white">{unread}</span>}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <DialogTitle className="font-display text-2xl">Notifications</DialogTitle>
                <DialogDescription>Your latest profile and application updates.</DialogDescription>
              </div>
              <DialogClose asChild><button aria-label="Close notifications" className="rounded-lg p-1 text-muted hover:bg-[#f1f2ed]"><X size={18} /></button></DialogClose>
            </div>
          </DialogHeader>
          <div className="space-y-2">
            {items.map((item, index) => <button key={item.title} className="flex w-full items-start gap-3 rounded-xl p-3 text-left transition hover:bg-[#f8f8f5]" onClick={() => setItems((current) => current.map((entry, entryIndex) => entryIndex === index ? { ...entry, unread: false } : entry))}><span className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg ${item.unread ? "bg-[#fff0d8] text-[#9d6d00]" : "bg-[#e9f0e8] text-olive"}`}>{item.unread ? <Bell size={14} /> : <Check size={14} />}</span><span className="min-w-0 flex-1"><span className="block text-sm font-semibold">{item.title}</span><span className="mt-1 block text-xs text-muted">{item.time}</span></span>{item.unread && <Badge variant="warning">New</Badge>}</button>)}
          </div>
          <Button variant="outline" className="w-full" onClick={() => setItems((current) => current.map((item) => ({ ...item, unread: false })))}>Mark all as read</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
