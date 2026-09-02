"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  FileText,
  MapPin,
  Menu,
  Pencil,
  Search,
  Share2,
  Sparkles,
  Upload,
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Github = Code2;

const navigation = [
  ["Dashboard", "/"], ["My Skills", "/skills"], ["Assessments", "/assessments"],
  ["Opportunities", "/opportunities"], ["Applications", "/applications"], ["Portfolio", "/portfolio"],
] as const;

type Skill = { name: string; level: string; score: number; verified: boolean; color: string };
const skills: Skill[] = [
  { name: "JavaScript", level: "Advanced", score: 86, verified: true, color: "bg-coral" },
  { name: "React", level: "Advanced", score: 84, verified: true, color: "bg-sky" },
  { name: "Next.js", level: "Intermediate", score: 76, verified: false, color: "bg-olive" },
  { name: "SEO", level: "Intermediate", score: 58, verified: true, color: "bg-gold" },
  { name: "SQL", level: "Intermediate", score: 64, verified: true, color: "bg-rose" },
];

const projects = [
  { name: "SkillConnect", description: "A skills-first platform that helps students discover roles matched to their strengths.", tech: ["Next.js", "TypeScript", "Tailwind"], role: "Product engineer", outcome: "Built the student dashboard and opportunity matching flow.", color: "#e9f0ff", mark: "S" },
  { name: "TimeTable Generator System", description: "A constraint-based web tool that creates clash-free schedules for college departments.", tech: ["React", "Node.js", "PostgreSQL"], role: "Frontend developer", outcome: "Reduced manual timetable planning time for faculty by 60%.", color: "#e3f2e9", mark: "T" },
  { name: "LocalCart", description: "An accessible e-commerce experience for discovering products from neighbourhood stores.", tech: ["JavaScript", "SQL", "CSS"], role: "Full-stack developer", outcome: "Designed checkout flows and shipped the first responsive MVP.", color: "#fff0d8", mark: "L" },
];

const certifications = [
  { name: "Frontend Development Foundations", issuer: "SkillConnect Assessments", date: "18 Aug 2026", credential: "Verified credential" },
  { name: "SQL for Data Analysis", issuer: "Coursera · IBM", date: "04 Aug 2026", credential: "Credential ID: IBM-SQL-4821" },
  { name: "Google Analytics Certification", issuer: "Google Skillshop", date: "12 Jun 2026", credential: "Verified credential" },
];

function Shell({ children, menuOpen, setMenuOpen }: { children: React.ReactNode; menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return <div className="min-h-screen bg-[#f8f8f5] text-ink"><aside className={`fixed inset-y-0 left-0 z-30 flex w-[258px] flex-col border-r border-line bg-[#fbfbf8] px-5 py-7 transition-transform duration-300 lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}><div className="flex items-center justify-between px-3"><Link href="/" className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-coral text-white"><Sparkles size={17} /></span><span className="font-display text-[1.25rem] font-bold tracking-[-0.04em]">skill<span className="text-coral">connect</span></span></Link><button aria-label="Close navigation" className="text-muted lg:hidden" onClick={() => setMenuOpen(false)}><X /></button></div><div className="mt-12 px-3"><p className="eyebrow mb-3">Workspace</p><nav className="space-y-1">{navigation.map(([label, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-[0.92rem] font-medium transition ${label === "Portfolio" ? "bg-coral text-white shadow-[0_6px_14px_rgba(228,98,78,0.17)]" : "text-muted hover:bg-[#efefea] hover:text-ink"}`}><span className="w-5 text-center">{label === "Dashboard" ? "⌂" : label === "My Skills" ? "✦" : label === "Assessments" ? "▣" : label === "Opportunities" ? "◆" : label === "Applications" ? "□" : "○"}</span>{label}</Link>)}</nav></div><div className="mt-auto rounded-2xl bg-[#e9f0e8] p-4"><div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-olive text-white"><Sparkles size={16} /></div><p className="font-display text-[1rem] font-semibold">Build your edge</p><p className="mt-1 text-xs leading-5 text-muted">Complete one assessment to unlock new matches.</p></div><div className="mt-5 flex items-center gap-3 border-t border-line px-3 pt-5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-sm font-bold">AS</div><div className="min-w-0"><p className="truncate text-sm font-semibold">Aarav Sharma</p><p className="truncate text-xs text-muted">Student account</p></div><ChevronDown size={15} /></div></aside>{menuOpen && <button aria-label="Close navigation overlay" className="fixed inset-0 z-20 bg-ink/20 lg:hidden" onClick={() => setMenuOpen(false)} />}<main className="lg:pl-[258px]"><header className="flex min-h-[76px] items-center justify-between border-b border-line bg-[#fbfbf8]/80 px-5 py-3 backdrop-blur sm:px-8 lg:px-11"><div className="flex items-center gap-3"><button aria-label="Open navigation" className="rounded-lg p-2 text-muted hover:bg-[#efefea] lg:hidden" onClick={() => setMenuOpen(true)}><Menu /></button><p className="hidden text-sm text-muted sm:block">Saturday, 5 September 2026</p></div><div className="flex items-center gap-2 sm:gap-5"><label className="relative hidden md:block"><span className="sr-only">Search portfolio</span><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} /><input placeholder="Search portfolio..." className="h-10 w-56 rounded-xl border border-line bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-[#a3a49e] focus:border-coral lg:w-64" /></label><button aria-label="Search portfolio" className="rounded-lg p-2 text-muted hover:bg-[#efefea] md:hidden"><Search /></button><button aria-label="Notifications" className="relative rounded-lg p-2 text-muted hover:bg-[#efefea]"><Bell /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-coral" /></button><RoleSwitcher currentRole="student" /><div className="hidden items-center gap-2 border-l border-line pl-3 sm:flex sm:pl-5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-xs font-bold">AS</div><span className="text-sm font-semibold">Aarav Sharma</span><ChevronDown size={14} /></div></div></header><div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-11 lg:py-10">{children}</div></main></div>;
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mb-5"><p className="eyebrow">{eyebrow}</p><h2 className="mt-1 font-display text-[1.45rem] font-semibold tracking-[-0.03em]">{title}</h2></div>;
}

function PortfolioView() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [shared, setShared] = useState(false);
  const [resumeName, setResumeNameState] = useState("Aarav_Sharma_Resume.pdf");
  const [summary] = useState("Frontend-focused IT student with experience in JavaScript, React, Next.js and SQL, interested in building practical web products.");

  const sharePortfolio = async () => {
    const url = "https://skillconnect.example/aarav-sharma";
    if (navigator.clipboard) await navigator.clipboard.writeText(url);
    setShared(true);
    window.setTimeout(() => setShared(false), 2200);
  };

  const downloadResume = (fileName: string) => {
    const file = new Blob([`Resume: ${fileName}\nAarav Sharma\n${summary}`], { type: "application/pdf" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const setResumeName = (fileName: string) => {
    setResumeNameState(fileName);
    downloadResume(fileName);
  };

  return <Shell menuOpen={menuOpen} setMenuOpen={setMenuOpen}><div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Professional profile</p><h1 className="mt-2 font-display text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-[2.75rem]">Your portfolio <span className="text-coral">.</span></h1><p className="mt-3 text-[0.95rem] text-muted">Showcase what you can do, not just what you&apos;ve studied.</p></div><div className="flex flex-wrap gap-2"><Button variant="outline" onClick={() => setPreviewOpen(true)}><ExternalLink size={15} />Preview portfolio</Button><Button onClick={() => setEditOpen(true)}><Pencil size={15} />Edit profile</Button></div></div>
    <section className="rounded-2xl bg-ink p-6 text-white sm:p-8"><div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div className="flex items-start gap-4 sm:gap-6"><div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-[#d9d4c8] font-display text-2xl font-bold text-ink sm:h-24 sm:w-24">AS</div><div><p className="eyebrow text-[#b3b8b0]">Open to opportunities</p><h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">Aarav Sharma</h2><p className="mt-1 text-sm text-[#d0d5cd]">BSc Information Technology</p><p className="mt-2 flex items-center gap-1.5 text-sm text-[#b3b8b0]"><MapPin size={14} />Navi Mumbai, Maharashtra</p><p className="mt-4 max-w-2xl text-sm leading-6 text-[#b3b8b0]">Frontend-focused IT student with experience in JavaScript, React, Next.js and SQL, interested in building practical web products.</p></div></div><div className="w-full shrink-0 border-t border-white/10 pt-5 lg:w-56 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"><div className="flex items-center justify-between"><p className="text-sm font-semibold">Profile completeness</p><p className="font-display text-2xl font-bold text-coral">82%</p></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15"><div className="h-full w-[82%] rounded-full bg-coral" /></div><p className="mt-2 text-xs text-[#b3b8b0]">Add one more project to reach 90%.</p><button onClick={sharePortfolio} className="mt-5 flex items-center gap-2 text-sm font-bold text-white hover:text-coral">{shared ? <Check size={15} /> : <Share2 size={15} />}{shared ? "Link copied" : "Share portfolio"}</button></div></div></section>
    <div className="mt-10 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]"><section><SectionHeading eyebrow="What I work with" title="Skills" /><div className="grid gap-4 sm:grid-cols-2">{skills.map((skill) => <article key={skill.name} className="rounded-2xl border border-line bg-white p-5"><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${skill.color}`} /><h3 className="font-display text-lg font-semibold">{skill.name}</h3></div>{skill.verified ? <Badge variant="success"><Check size={11} className="mr-1" />Verified</Badge> : <Badge>Added</Badge>}</div><div className="mt-4 flex items-center justify-between text-xs text-muted"><span>{skill.level}</span><span>{skill.score}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#eeeee9]"><div className={`h-full rounded-full ${skill.color}`} style={{ width: `${skill.score}%` }} /></div></article>)}</div></section><section><SectionHeading eyebrow="Where I learned it" title="Education" /><article className="rounded-2xl border border-line bg-white p-5 sm:p-6"><div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e9f0e8] text-olive"><BriefcaseBusiness size={19} /></span><div><h3 className="font-display text-lg font-semibold">BSc Information Technology</h3><p className="mt-1 text-sm text-muted">SIES College of Arts, Science & Commerce</p><p className="mt-3 flex items-center gap-1.5 text-xs text-muted"><CalendarDays size={14} />Currently studying · 2024 - 2027</p></div></div></article></section></div>
    <section className="mt-10"><SectionHeading eyebrow="Selected work" title="Projects" /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <article key={project.name} className="flex flex-col rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(35,43,38,0.08)]"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl font-display text-lg font-bold" style={{ backgroundColor: project.color }}>{project.mark}</span><span className="text-xs font-semibold text-muted">{project.role}</span></div><h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.03em]">{project.name}</h3><p className="mt-2 text-sm leading-6 text-muted">{project.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.tech.map((technology) => <span key={technology} className="rounded-md bg-[#f1f2ed] px-2 py-1 text-[0.68rem] font-medium text-muted">{technology}</span>)}</div><p className="mt-5 border-t border-line pt-4 text-xs leading-5 text-muted"><span className="font-bold text-ink">Key contribution: </span>{project.outcome}</p><div className="mt-auto flex gap-4 pt-5"><a href={`https://github.com/aarav-sharma/${project.name.toLowerCase().replaceAll(" ", "-")}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-ink hover:text-coral"><Github size={15} />GitHub</a><a href="#preview" onClick={() => setPreviewOpen(true)} className="flex items-center gap-1.5 text-xs font-bold text-ink hover:text-coral"><ExternalLink size={15} />Live demo</a></div></article>)}</div></section>
    <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]"><section><SectionHeading eyebrow="Proof of progress" title="Certifications & achievements" /><div className="space-y-3">{certifications.map((certification) => <article key={certification.name} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 sm:p-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fff0d8] text-[#9d6d00]"><Check size={18} /></span><div className="min-w-0 flex-1"><h3 className="truncate text-sm font-semibold">{certification.name}</h3><p className="mt-1 text-xs text-muted">{certification.issuer} · {certification.date}</p></div><Badge variant={certification.credential === "Verified credential" ? "success" : "default"}>{certification.credential === "Verified credential" ? "Verified" : "Credential"}</Badge></article>)}</div></section><section><SectionHeading eyebrow="Experience" title="Internships & experience" /><article className="rounded-2xl border border-line bg-white p-5 sm:p-6"><div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e9f0e8] text-olive"><BriefcaseBusiness size={19} /></span><div><h3 className="font-display text-lg font-semibold">Frontend Developer Intern</h3><p className="mt-1 text-sm font-semibold text-muted">Campus Labs · May 2026 - Jul 2026</p><p className="mt-3 text-sm leading-6 text-muted">Built responsive React interfaces, collaborated with design and improved page performance across the student portal.</p></div></div></article></section></div>
    <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_0.8fr]"><section><SectionHeading eyebrow="Ready when you are" title="Resume" /><article className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex items-center gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#f9e9e9] text-coral"><FileText size={21} /></span><div><h3 className="font-semibold">{resumeName}</h3><p className="mt-1 text-xs text-muted">Uploaded · Last updated 28 Aug 2026</p></div></div><div className="flex flex-wrap gap-2"><Button variant="outline" size="sm" onClick={() => setPreviewOpen(true)}><FileText size={14} />View Resume</Button><Button variant="secondary" size="sm" onClick={() => setResumeName("Aarav_Sharma_Resume_Updated.pdf")}><Download size={14} />Download</Button><label className="inline-flex h-8 cursor-pointer items-center gap-2 rounded-xl bg-ink px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#3b4740]"><Upload size={14} />Update<input type="file" accept=".pdf" className="sr-only" onChange={(event) => event.target.files?.[0] && setResumeName(event.target.files[0].name)} /></label></div></article></section><section><SectionHeading eyebrow="Your control" title="Profile visibility" /><article className="rounded-2xl border border-line bg-white p-5 sm:p-6"><div className="flex items-start justify-between gap-4"><div><h3 className="font-semibold">Visible to industry</h3><p className="mt-1 text-xs leading-5 text-muted">Recruiters can discover your skills and projects.</p></div><button role="switch" aria-checked={visible} aria-label="Toggle profile visibility" onClick={() => setVisible(!visible)} className={`relative h-6 w-11 shrink-0 rounded-full transition ${visible ? "bg-olive" : "bg-[#cdd2cb]"}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${visible ? "left-6" : "left-1"}`} /></button></div><p className="mt-5 flex items-center gap-1.5 border-t border-line pt-4 text-xs text-muted"><CalendarDays size={14} />Last updated 02 Sep 2026</p></article></section></div>
    <Dialog open={editOpen} onOpenChange={setEditOpen}><DialogContent><DialogHeader><DialogTitle className="font-display text-2xl">Edit profile</DialogTitle><DialogDescription>Keep your professional profile current for industry teams.</DialogDescription></DialogHeader><div className="space-y-4"><label className="block text-sm font-semibold">Professional summary<textarea defaultValue="Frontend-focused IT student with experience in JavaScript, React, Next.js and SQL, interested in building practical web products." className="mt-2 min-h-24 w-full rounded-xl border border-line p-3 text-sm font-normal outline-none focus:border-coral" /></label><label className="block text-sm font-semibold">Current location<input defaultValue="Navi Mumbai, Maharashtra" className="mt-2 h-10 w-full rounded-xl border border-line px-3 text-sm font-normal outline-none focus:border-coral" /></label></div><DialogFooter><DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose><DialogClose asChild><Button onClick={() => setEditOpen(false)}>Save changes <Check size={15} /></Button></DialogClose></DialogFooter></DialogContent></Dialog><Dialog open={previewOpen} onOpenChange={setPreviewOpen}><DialogContent className="max-w-2xl"><DialogHeader><DialogTitle className="font-display text-2xl">Aarav Sharma</DialogTitle><DialogDescription>Public portfolio preview</DialogDescription></DialogHeader><div className="rounded-xl bg-[#f8f8f5] p-5"><p className="eyebrow">Frontend developer</p><p className="mt-3 text-sm leading-6 text-muted">Frontend-focused IT student building practical web products with JavaScript, React, Next.js and SQL.</p><div className="mt-5 flex flex-wrap gap-2">{skills.slice(0, 4).map((skill) => <Badge key={skill.name} variant={skill.verified ? "success" : "default"}>{skill.name}</Badge>)}</div></div><DialogFooter><DialogClose asChild><Button>Close preview</Button></DialogClose></DialogFooter></DialogContent></Dialog></Shell>;
}

export default function PortfolioPage() {
  return <PortfolioView />;
}