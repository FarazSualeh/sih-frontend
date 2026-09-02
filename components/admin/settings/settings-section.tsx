import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
export function SettingsSection({ title, description, children }: { title: string; description: string; children: ReactNode }) { return <Card className="p-5 sm:p-6"><div className="mb-5"><h2 className="text-xl font-semibold tracking-tight text-ink">{title}</h2><p className="mt-1 text-sm leading-6 text-muted">{description}</p></div>{children}</Card>; }
