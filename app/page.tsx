"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Layers3,
  Menu,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const ecosystem = [
  { title: "Students", text: "Build verified skills and find opportunities that fit your direction.", icon: GraduationCap, tone: "bg-[#e9f0ff] text-[#4e72a8]" },
  { title: "Academicians", text: "See where learners need support and guide their next best move.", icon: Users, tone: "bg-[#e9f0e8] text-olive" },
  { title: "Industry", text: "Discover emerging talent through skills, projects and evidence.", icon: BriefcaseBusiness, tone: "bg-[#fff0d8] text-[#9d6d00]" },
  { title: "Institutions", text: "Turn employability data into better outcomes for every cohort.", icon: BarChart3, tone: "bg-[#f9e9e9] text-[#ad6568]" },
];

const features = [
  ["Skill mapping", "Make your capabilities visible with a living skills profile.", Layers3],
  ["Assessments", "Validate what you know with structured, practical checks.", ClipboardCheck],
  ["Skill gap insights", "Know exactly what to learn next for the roles you want.", Target],
  ["Industry matching", "Connect strengths and demand to surface better-fit roles.", Network],
  ["Application tracking", "Keep every application, update and next step in one place.", FileText],
  ["Digital portfolio", "Showcase projects and progress beyond a traditional resume.", ShieldCheck],
] as const;

const flow = ["Assess", "Identify Gaps", "Improve", "Match", "Apply"];

function Logo() {
  return <Link href="/" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-[11px] bg-coral text-white"><Sparkles size={18} /></span><span className="font-display text-[1.3rem] font-bold tracking-[-0.04em]">skill<span className="text-coral">connect</span></span></Link>;
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="min-h-screen overflow-hidden bg-[#f8f8f5] text-ink">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"><Logo /><div className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex"><a href="#features" className="hover:text-ink">Features</a><a href="#how-it-works" className="hover:text-ink">How it works</a><Link href="/login" className="hover:text-ink">Sign in</Link><Link href="/login" className="rounded-xl bg-coral px-4 py-2.5 text-white shadow-[0_8px_16px_rgba(228,98,78,0.16)] hover:bg-[#d85643]">Get started</Link></div><button aria-label="Toggle menu" className="rounded-lg p-2 text-muted hover:bg-white md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></nav>
    {menuOpen && <div className="mx-5 space-y-1 rounded-2xl border border-line bg-white p-3 md:hidden"><a href="#features" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold">Features</a><a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold">How it works</a><Link href="/login" className="block rounded-xl px-3 py-3 text-sm font-semibold">Sign in</Link><Link href="/login" className="block rounded-xl bg-coral px-3 py-3 text-center text-sm font-bold text-white">Get started</Link></div>}
    <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-28"><div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"><div><p className="eyebrow">Skills-first employability</p><h1 className="mt-5 max-w-3xl font-display text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.07em] sm:text-[5.2rem]">Bridge the gap between <span className="text-coral">skills</span> and opportunity.</h1><p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg">SkillConnect is a skills-first ecosystem for SIH PS44, helping learners discover their strengths, close meaningful gaps and connect with the teams that need them.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/login"><Button size="lg">Start building your edge <ArrowRight size={17} /></Button></Link><a href="#how-it-works" className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-white px-5 text-sm font-semibold hover:bg-[#f1f2ed]">See how it works <ChevronRight size={16} /></a></div><div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-muted"><span className="flex items-center gap-2"><Check size={14} className="text-olive" />Evidence over guesswork</span><span className="flex items-center gap-2"><Check size={14} className="text-olive" />Built for the full ecosystem</span></div></div><div className="relative"><div className="relative overflow-hidden rounded-[2rem] bg-ink p-6 text-white shadow-[0_24px_60px_rgba(35,43,38,0.14)] sm:p-8"><div className="absolute right-[-15%] top-[-18%] h-64 w-64 rounded-full border border-white/10" /><div className="relative"><div className="flex items-center justify-between"><div><p className="eyebrow text-[#b3b8b0]">Your opportunity signal</p><p className="mt-2 font-display text-2xl font-semibold">Profile momentum</p></div><TrendingUp className="text-coral" size={24} /></div><div className="mt-10 grid grid-cols-3 gap-2 text-center"><div className="rounded-xl bg-white/10 p-3"><p className="font-display text-2xl font-bold">78</p><p className="mt-1 text-[0.6rem] uppercase tracking-[0.12em] text-[#b3b8b0]">readiness</p></div><div className="rounded-xl bg-white/10 p-3"><p className="font-display text-2xl font-bold">08</p><p className="mt-1 text-[0.6rem] uppercase tracking-[0.12em] text-[#b3b8b0]">verified skills</p></div><div className="rounded-xl bg-white/10 p-3"><p className="font-display text-2xl font-bold">12</p><p className="mt-1 text-[0.6rem] uppercase tracking-[0.12em] text-[#b3b8b0]">matches</p></div></div><div className="mt-8 space-y-3"><div className="flex items-center gap-3 rounded-xl bg-white/10 p-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-coral"><Search size={16} /></span><div className="flex-1"><p className="text-sm font-semibold">Frontend engineering</p><p className="text-xs text-[#b3b8b0]">94% match · Razorpay</p></div><ArrowRight size={16} className="text-[#b3b8b0]" /></div><div className="flex items-center gap-3 rounded-xl bg-white/10 p-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-olive"><ShieldCheck size={16} /></span><div className="flex-1"><p className="text-sm font-semibold">JavaScript verified</p><p className="text-xs text-[#b3b8b0]">Assessment completed</p></div><Check size={16} className="text-[#b3b8b0]" /></div></div></div></div><div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-line bg-white p-4 shadow-[0_12px_30px_rgba(35,43,38,0.1)] sm:block"><p className="eyebrow">Next best move</p><p className="mt-2 font-display font-semibold">Close your Node.js gap</p><p className="mt-1 text-xs text-muted">Unlock 4 new matches</p></div></div></div></section>
    <section className="border-y border-line bg-white/60 py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="mb-8 max-w-xl"><p className="eyebrow">One connected ecosystem</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Better signals for every side of employability.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{ecosystem.map(({ title, text, icon: Icon, tone }) => <article key={title} className="rounded-2xl border border-line bg-[#fbfbf8] p-5 transition hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(35,43,38,0.07)]"><span className={`grid h-11 w-11 place-items-center rounded-xl ${tone}`}><Icon size={21} /></span><h3 className="mt-5 font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}</div></div></section>
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><p className="eyebrow">How it works</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Progress that points somewhere.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-muted">Every step makes your next decision clearer, from your first assessment to your next opportunity.</p></div><div className="grid gap-2 sm:grid-cols-5">{flow.map((step, index) => <div key={step} className="relative rounded-2xl border border-line bg-white p-4 sm:min-h-32"><span className="font-display text-2xl font-bold text-coral">0{index + 1}</span><p className="mt-5 text-sm font-bold">{step}</p>{index < flow.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden rounded-full bg-[#f8f8f5] text-muted sm:block" size={18} />}</div>)}</div></div></section>
    <section id="features" className="bg-ink py-20 text-white sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-[#b3b8b0]">The SkillConnect toolkit</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Everything you need to move with evidence.</h2></div><p className="max-w-xs text-sm leading-6 text-[#b3b8b0]">A practical layer between learning, readiness and the world of work.</p></div><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{features.map(([title, text, Icon]) => <article key={title} className="bg-ink p-6 transition hover:bg-[#303a34]"><Icon size={21} className="text-coral" /><h3 className="mt-7 font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#b3b8b0]">{text}</p></article>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><div className="rounded-[2rem] bg-[#e9f0e8] p-6 sm:p-10"><div className="max-w-2xl"><p className="eyebrow text-olive">From capability to connection</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Student skills become a language industry can act on.</h2></div><div className="mt-10 grid gap-2 sm:grid-cols-5">{[["Student skills", "JavaScript · React"], ["Skill gap", "Node.js"], ["Industry demand", "Product teams"], ["Skill match", "94% aligned"], ["Opportunity", "Apply with confidence"]].map(([title, value], index) => <div key={title} className="relative rounded-xl bg-white/75 p-4"><p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{title}</p><p className="mt-3 font-display text-lg font-semibold">{value}</p>{index < 4 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden rounded-full bg-[#e9f0e8] text-olive sm:block" size={18} />}</div>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10"><div className="flex flex-col justify-between gap-7 rounded-[2rem] bg-coral p-7 text-white sm:flex-row sm:items-center sm:p-10"><div><p className="eyebrow text-white/70">Your next chapter starts here</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Build skills. Find opportunities.</h2></div><Link href="/login"><Button variant="secondary" size="lg">Get started <ArrowRight size={17} /></Button></Link></div></section>
    <footer className="border-t border-line bg-[#fbfbf8]"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-10"><Logo /><p className="text-xs text-muted">Skills, direction and opportunity in one connected place.</p><div className="flex gap-5 text-xs font-semibold text-muted"><Link href="/login" className="hover:text-ink">Sign in</Link><a href="#features" className="hover:text-ink">Features</a></div></div></footer>
  </main>;
}
