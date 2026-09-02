"use client";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
const roles = [{ label: "Student Dashboard", route: "/dashboard" }, { label: "Academician Dashboard", route: "/academician" }, { label: "Industry Dashboard", route: "/industry" }, { label: "Admin Dashboard", route: "/admin" }];
export function AdminRoleSwitcher() { const router = useRouter(); return <div className="relative"><select aria-label="Switch dashboard role" defaultValue="/admin" onChange={(event) => router.push(event.target.value)} className="appearance-none rounded-xl border border-line bg-white px-2 py-2 pr-7 text-xs font-medium text-ink outline-none focus:border-coral">{roles.map((role) => <option key={role.route} value={role.route}>{role.label}</option>)}</select><ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" /></div>; }
