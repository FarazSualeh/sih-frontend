"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import type { ToggleSetting } from "@/lib/mock-data/settings";
export function NotificationSettingsCard({ setting }: { setting: ToggleSetting }) { const [enabled, setEnabled] = useState(setting.enabled); return <Card className="flex items-center justify-between gap-4 p-4 transition hover:shadow-md"><div><p className="font-medium text-ink">{setting.title}</p><p className="mt-1 text-xs leading-5 text-muted">{setting.description}</p></div><button type="button" aria-pressed={enabled} onClick={() => setEnabled((value) => !value)} className={`relative h-6 w-11 shrink-0 rounded-full transition ${enabled ? "bg-indigo-600" : "bg-slate-200"}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${enabled ? "left-6" : "left-1"}`} /></button></Card>; }
