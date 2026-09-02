"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import { RoleSwitcher } from "@/components/role-switcher";
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

type Status = "Applied" | "Under Review" | "Shortlisted" | "Interview" | "Selected" | "Rejected";
type Filter = "All" | "Active" | "Interviews" | "Selected" | "Rejected";

type Application = {
  id: string;
  company: string;
  role: string;
  type: "Internship" | "Job";
  location: string;
  mode: "Remote" | "Hybrid" | "On-site";
  appliedDate: string;
  match: number;
  status: Status;
  skills: string[];
  missing: string[];
  timeline: { label: string; date: string; complete: boolean }[];
  color: string;
  mark: string;
};

const navigation = [
  ["Dashboard", "/"], ["My Skills", "/skills"], ["Assessments", "/assessments"],
  ["Opportunities", "/opportunities"], ["Applications", "/applications"], ["Portfolio", "/portfolio"],
] as const;

const applications: Application[] = [
  { id: "razorpay", company: "Razorpay", role: "Product Engineering Intern", type: "Internship", location: "Bengaluru", mode: "Remote", appliedDate: "28 Aug 2026", match: 94, status: "Interview", skills: ["JavaScript", "React", "Node.js"], missing: ["Node.js"], color: "#e9f0ff", mark: "R", timeline: [{ label: "Applied", date: "28 Aug", complete: true }, { label: "Under Review", date: "30 Aug", complete: true }, { label: "Shortlisted", date: "01 Sep", complete: true }, { label: "Interview", date: "08 Sep", complete: true }, { label: "Selected", date: "", complete: false }] },
  { id: "miro", company: "Miro", role: "Frontend Developer Intern", type: "Internship", location: "Remote", mode: "Remote", appliedDate: "25 Aug 2026", match: 89, status: "Under Review", skills: ["JavaScript", "TypeScript", "Figma"], missing: ["TypeScript"], color: "#fff0d8", mark: "M", timeline: [{ label: "Applied", date: "25 Aug", complete: true }, { label: "Under Review", date: "29 Aug", complete: true }, { label: "Shortlisted", date: "", complete: false }, { label: "Interview", date: "", complete: false }, { label: "Selected", date: "", complete: false }] },
  { id: "zerodha", company: "Zerodha", role: "Data Analytics Intern", type: "Internship", location: "Bengaluru", mode: "Hybrid", appliedDate: "22 Aug 2026", match: 82, status: "Shortlisted", skills: ["Python", "SQL", "Tableau"], missing: ["Tableau"], color: "#e3f2e9", mark: "Z", timeline: [{ label: "Applied", date: "22 Aug", complete: true }, { label: "Under Review", date: "24 Aug", complete: true }, { label: "Shortlisted", date: "31 Aug", complete: true }, { label: "Interview", date: "", complete: false }, { label: "Selected", date: "", complete: false }] },
  { id: "microsoft", company: "Microsoft", role: "Software Engineering Intern", type: "Internship", location: "Hyderabad", mode: "Hybrid", appliedDate: "18 Aug 2026", match: 87, status: "Applied", skills: ["JavaScript", "Python", "Git"], missing: ["Data Structures"], color: "#e9f0e8", mark: "M", timeline: [{ label: "Applied", date: "18 Aug", complete: true }, { label: "Under Review", date: "", complete: false }, { label: "Shortlisted", date: "", complete: false }, { label: "Interview", date: "", complete: false }, { label: "Selected", date: "", complete: false }] },
  { id: "deloitte", company: "Deloitte", role: "Technology Analyst Intern", type: "Internship", location: "Pune", mode: "On-site", appliedDate: "12 Aug 2026", match: 75, status: "Selected", skills: ["SQL", "Communication", "Excel"], missing: [], color: "#f9e9e9", mark: "D", timeline: [{ label: "Applied", date: "12 Aug", complete: true }, { label: "Under Review", date: "15 Aug", complete: true }, { label: "Shortlisted", date: "19 Aug", complete: true }, { label: "Interview", date: "26 Aug", complete: true }, { label: "Selected", date: "30 Aug", complete: true }] },
  { id: "meesho", company: "Meesho", role: "Growth Analyst", type: "Job", location: "Bengaluru", mode: "Hybrid", appliedDate: "07 Aug 2026", match: 78, status: "Rejected", skills: ["SQL", "SEO", "Excel"], missing: ["Excel"], color: "#fff0d8", mark: "M", timeline: [{ label: "Applied", date: "07 Aug", complete: true }, { label: "Under Review", date: "10 Aug", complete: true }, { label: "Rejected", date: "16 Aug", complete: true }] },
];

const statusVariant: Record<Status, "default" | "success" | "warning" | "info" | "danger"> = {
  Applied: "default", "Under Review": "warning", Shortlisted: "info", Interview: "info", Selected: "success", Rejected: "danger",
};

function statusMatches(filter: Filter, status: Status) {
  if (filter === "All") return true;
  if (filter === "Active") return status !== "Selected" && status !== "Rejected";
  if (filter === "Interviews") return status === "Interview";
  return status === filter;
}

function AppShell({ children, menuOpen, setMenuOpen, query, setQuery }: { children: React.ReactNode; menuOpen: boolean; setMenuOpen: (open: boolean) => void; query: string; setQuery: (query: string) => void }) {
  return <div className="min-h-screen bg-[#f8f8f5] text-ink"><aside className={`fixed inset-y-0 left-0 z-30 flex w-[258px] flex-col border-r border-line bg-[#fbfbf8] px-5 py-7 transition-transform duration-300 lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}><div className="flex items-center justify-between px-3"><Link href="/" className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-coral text-white"><Sparkles size={17} /></span><span className="font-display text-[1.25rem] font-bold tracking-[-0.04em]">skill<span className="text-coral">connect</span></span></Link><button aria-label="Close navigation" className="text-muted lg:hidden" onClick={() => setMenuOpen(false)}><X /></button></div><div className="mt-12 px-3"><p className="eyebrow mb-3">Workspace</p><nav className="space-y-1">{navigation.map(([label, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-[0.92rem] font-medium transition ${label === "Applications" ? "bg-coral text-white shadow-[0_6px_14px_rgba(228,98,78,0.17)]" : "text-muted hover:bg-[#efefea] hover:text-ink"}`}><span className="w-5 text-center">{label === "Dashboard" ? "⌂" : label === "My Skills" ? "✦" : label === "Assessments" ? "▣" : label === "Opportunities" ? "◆" : label === "Applications" ? "□" : "○"}</span>{label}</Link>)}</nav></div><div className="mt-auto rounded-2xl bg-[#e9f0e8] p-4"><div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-olive text-white"><Sparkles size={16} /></div><p className="font-display text-[1rem] font-semibold">Build your edge</p><p className="mt-1 text-xs leading-5 text-muted">Complete one assessment to unlock new matches.</p></div><div className="mt-5 flex items-center gap-3 border-t border-line px-3 pt-5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-sm font-bold">AS</div><div className="min-w-0"><p className="truncate text-sm font-semibold">Aarav Sharma</p><p className="truncate text-xs text-muted">Student account</p></div><ChevronDown size={15} /></div></aside>{menuOpen && <button aria-label="Close navigation overlay" className="fixed inset-0 z-20 bg-ink/20 lg:hidden" onClick={() => setMenuOpen(false)} />}<main className="lg:pl-[258px]"><header className="flex min-h-[76px] items-center justify-between border-b border-line bg-[#fbfbf8]/80 px-5 py-3 backdrop-blur sm:px-8 lg:px-11"><div className="flex items-center gap-3"><button aria-label="Open navigation" className="rounded-lg p-2 text-muted hover:bg-[#efefea] lg:hidden" onClick={() => setMenuOpen(true)}><Menu /></button><p className="hidden text-sm text-muted sm:block">Saturday, 5 September 2026</p></div><div className="flex items-center gap-2 sm:gap-5"><label className="relative hidden md:block"><span className="sr-only">Search applications</span><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search applications..." className="h-10 w-56 rounded-xl border border-line bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-[#a3a49e] focus:border-coral lg:w-64" /></label><button aria-label="Search applications" className="rounded-lg p-2 text-muted hover:bg-[#efefea] md:hidden"><Search /></button><button aria-label="Notifications" className="relative rounded-lg p-2 text-muted hover:bg-[#efefea]"><Bell /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-coral" /></button><RoleSwitcher currentRole="student" /><div className="hidden items-center gap-2 border-l border-line pl-3 sm:flex sm:pl-5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-xs font-bold">AS</div><span className="text-sm font-semibold">Aarav Sharma</span><ChevronDown size={14} /></div></div></header><div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-11 lg:py-10">{children}</div></main></div>;
}

function ApplicationCard({ application, onDetails }: { application: Application; onDetails: (application: Application) => void }) {
  const canWithdraw = application.status === "Applied" || application.status === "Under Review";
  return <article className="group rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#d4d8cf] hover:shadow-[0_12px_30px_rgba(35,43,38,0.08)]"><div className="flex items-start justify-between gap-3"><div className="flex min-w-0 items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl font-display text-lg font-bold" style={{ background: application.color }}>{application.mark}</span><div className="min-w-0"><p className="text-xs font-semibold text-muted">{application.company}</p><h2 className="mt-1 truncate font-display text-lg font-semibold tracking-[-0.03em]">{application.role}</h2></div></div><p className="shrink-0 font-display text-xl font-bold text-olive">{application.match}%<span className="block text-right text-[0.58rem] font-medium uppercase tracking-[0.12em] text-muted">match</span></p></div><div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted"><span className="rounded-md bg-[#f1f2ed] px-2 py-1">{application.type}</span><span className="flex items-center gap-1"><MapPin size={13} />{application.location}</span><span className="rounded-md bg-[#f1f2ed] px-2 py-1">{application.mode}</span></div><div className="mt-5 flex items-center justify-between border-t border-line pt-4"><span className="flex items-center gap-1.5 text-xs text-muted"><CalendarDays size={14} />Applied {application.appliedDate}</span><Badge variant={statusVariant[application.status]}>{application.status}</Badge></div><div className="mt-5 flex flex-wrap gap-2"><Button variant="outline" size="sm" onClick={() => onDetails(application)}>View Details <ArrowRight size={14} /></Button><Button variant="secondary" size="sm" onClick={() => onDetails(application)}>{application.status === "Interview" ? "Track Interview" : "View Status"}</Button>{canWithdraw && <button className="ml-auto text-xs font-semibold text-muted transition hover:text-coral">Withdraw</button>}</div></article>;
}

function Details({ application }: { application: Application }) {
  return <div className="space-y-6"><div className="grid gap-4 sm:grid-cols-2"><div><p className="eyebrow">Opportunity</p><p className="mt-2 font-semibold">{application.role}</p><p className="mt-1 text-sm text-muted">{application.type} · {application.mode}</p></div><div><p className="eyebrow">Company</p><p className="mt-2 font-semibold">{application.company}</p><p className="mt-1 flex items-center gap-1 text-sm text-muted"><MapPin size={14} />{application.location}</p></div><div><p className="eyebrow">Applied</p><p className="mt-2 flex items-center gap-1.5 text-sm font-semibold"><CalendarDays size={15} />{application.appliedDate}</p></div><div><p className="eyebrow">Match score</p><p className="mt-2 font-display text-2xl font-bold text-olive">{application.match}%</p></div></div><div className="border-t border-line pt-5"><p className="eyebrow">Skill fit</p><div className="mt-3 flex flex-wrap gap-2">{application.skills.map((skill) => <span key={skill} className={`rounded-md px-2.5 py-1.5 text-xs font-medium ${application.missing.includes(skill) ? "bg-[#fff3d8] text-[#9d6d00]" : "bg-[#e9f0e8] text-olive"}`}>{skill}{application.missing.includes(skill) && " · strengthen"}</span>)}{application.missing.filter((skill) => !application.skills.includes(skill)).map((skill) => <span key={skill} className="rounded-md bg-[#fdeae7] px-2.5 py-1.5 text-xs font-medium text-[#b33d2d]">{skill} · missing</span>)}</div></div><div className="border-t border-line pt-5"><div className="flex items-center justify-between"><p className="eyebrow">Application status</p><Badge variant={statusVariant[application.status]}>{application.status}</Badge></div><div className="mt-5 overflow-x-auto pb-2"><div className="flex min-w-[560px]">{application.timeline.map((step, index) => <div key={step.label} className="relative flex-1 text-center"><div className={`mx-auto grid h-7 w-7 place-items-center rounded-full ${step.complete ? "bg-olive text-white" : "border-2 border-[#dfe3db] bg-white text-transparent"}`}>{step.complete ? <Check size={14} /> : <span className="h-2 w-2 rounded-full bg-[#dfe3db]" />}</div>{index < application.timeline.length - 1 && <div className={`absolute left-1/2 top-3.5 h-px w-full ${application.timeline[index + 1].complete ? "bg-olive" : "bg-[#dfe3db]"}`} />}</div>)}</div><div className="mt-2 flex min-w-[560px]">{application.timeline.map((step) => <div key={step.label} className={`flex-1 px-1 text-center text-[0.65rem] font-semibold ${step.complete ? "text-ink" : "text-muted"}`}>{step.label}<span className="mt-1 block font-normal text-muted">{step.date || "Pending"}</span></div>)}</div></div></div></div>;
}

export default function ApplicationsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Application | null>(null);
  const filtered = useMemo(() => applications.filter((application) => statusMatches(filter, application.status) && `${application.company} ${application.role}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  const filters: Filter[] = ["All", "Active", "Interviews", "Selected", "Rejected"];
  return <AppShell menuOpen={menuOpen} setMenuOpen={setMenuOpen} query={query} setQuery={setQuery}><div className="mb-8"><p className="eyebrow">Application tracker</p><h1 className="mt-2 font-display text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-[2.75rem]">Your applications <span className="text-coral">.</span></h1><p className="mt-3 max-w-xl text-[0.95rem] leading-6 text-muted">Keep every application, update and next step organised in one place.</p></div><section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">{[["Total Applications", applications.length, "All your applications"], ["Under Review", applications.filter((item) => item.status === "Under Review").length, "Being assessed"], ["Interviews", applications.filter((item) => item.status === "Interview").length, "Next conversations"], ["Selected", applications.filter((item) => item.status === "Selected").length, "Offers received"]].map(([label, value, note], index) => <div key={label} className={`min-h-[122px] rounded-2xl border border-line p-4 sm:p-5 ${index === 0 ? "bg-ink text-white" : "bg-white"}`}><p className={`text-xs font-semibold ${index === 0 ? "text-[#b3b8b0]" : "text-muted"}`}>{label}</p><p className={`mt-5 font-display text-3xl font-semibold tracking-[-0.06em] ${index === 0 ? "text-white" : "text-ink"}`}>{value}</p><p className={`mt-1 text-[0.68rem] ${index === 0 ? "text-[#b3b8b0]" : "text-muted"}`}>{note}</p></div>)}</section><section><div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Your pipeline</p><h2 className="mt-1 font-display text-[1.45rem] font-semibold tracking-[-0.03em]">Track your progress</h2></div><div className="flex flex-wrap gap-1.5 rounded-xl border border-line bg-white p-1">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${filter === item ? "bg-ink text-white" : "text-muted hover:bg-[#f1f2ed] hover:text-ink"}`}>{item}</button>)}</div></div>{filtered.length > 0 ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((application) => <ApplicationCard key={application.id} application={application} onDetails={setSelected} />)}</div> : <div className="rounded-2xl border border-dashed border-[#cfd5cd] bg-white px-6 py-16 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#e9f0e8] text-olive"><BriefcaseBusiness size={22} /></span><h3 className="mt-5 font-display text-xl font-semibold">No applications found</h3><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">Try another company or role, or switch to a different status filter.</p><button onClick={() => { setQuery(""); setFilter("All"); }} className="mt-5 text-sm font-bold text-coral hover:text-ink">Clear filters <ArrowRight className="ml-1 inline" size={15} /></button></div>}</section><Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}><DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto"><DialogHeader><div className="flex items-start justify-between gap-4"><div><p className="eyebrow">Application details</p><DialogTitle className="mt-2 font-display text-2xl tracking-[-0.04em]">{selected?.role}</DialogTitle><DialogDescription className="mt-1">{selected?.company} · {selected?.type}</DialogDescription></div><DialogClose asChild><button aria-label="Close application details" className="rounded-lg p-1 text-muted hover:bg-[#f1f2ed]"><X size={18} /></button></DialogClose></div></DialogHeader>{selected && <Details application={selected} />}<div className="flex items-center gap-2 border-t border-line pt-4 text-xs text-muted"><Clock3 size={14} />Timeline updates are based on your latest application activity.</div></DialogContent></Dialog></AppShell>;
}