"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Doughnut, Radar } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip);

type IconName = "grid" | "spark" | "clipboard" | "briefcase" | "file" | "user" | "search" | "bell" | "arrow" | "check" | "menu" | "close" | "chevron" | "lock";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    spark: <><path d="m12 3-1.5 6.5L4 11l6.5 1.5L12 19l1.5-6.5L20 11l-6.5-1.5L12 3Z" /><path d="m19 17-.6 2.4L16 20l2.4.6L19 23l.6-2.4L22 20l-2.4-.6L19 17Z" /></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5V3h6v1.5M9 11h6M9 15h4" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    file: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  };
  return <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">{paths[name]}</svg>;
}

const navigation = [["Dashboard", "grid", "/"], ["My Skills", "spark", "/skills"], ["Assessments", "clipboard", "/assessments"], ["Opportunities", "briefcase", "#"], ["Applications", "file", "#"], ["Portfolio", "user", "#"]] as const;

type Skill = { name: string; score: number; status: "Verified" | "Assessed" | "Needs assessment"; level: string; category: "Technical" | "Soft skills" | "Domain skills"; color: string; detail: string };

const skillData: Skill[] = [
  { name: "JavaScript", score: 86, status: "Verified", level: "Advanced", category: "Technical", color: "bg-coral", detail: "Frontend development" },
  { name: "Python", score: 72, status: "Verified", level: "Intermediate", category: "Technical", color: "bg-olive", detail: "Programming & automation" },
  { name: "React", score: 84, status: "Verified", level: "Advanced", category: "Technical", color: "bg-sky", detail: "Frontend development" },
  { name: "SQL", score: 64, status: "Assessed", level: "Intermediate", category: "Technical", color: "bg-gold", detail: "Data & databases" },
  { name: "AWS", score: 42, status: "Needs assessment", level: "Beginner", category: "Technical", color: "bg-rose", detail: "Cloud infrastructure" },
  { name: "Communication", score: 78, status: "Assessed", level: "Strong", category: "Soft skills", color: "bg-olive", detail: "Collaboration" },
  { name: "Problem solving", score: 81, status: "Verified", level: "Strong", category: "Soft skills", color: "bg-coral", detail: "Critical thinking" },
  { name: "Digital marketing", score: 58, status: "Assessed", level: "Intermediate", category: "Domain skills", color: "bg-gold", detail: "Growth & acquisition" },
  { name: "Product thinking", score: 66, status: "Assessed", level: "Intermediate", category: "Domain skills", color: "bg-sky", detail: "Product strategy" },
];

const statusStyles = { Verified: "bg-[#e9f0e8] text-olive", Assessed: "bg-[#fff0d8] text-[#9b721c]", "Needs assessment": "bg-[#f9e9e9] text-[#ad6568]" };

function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: string }) {
  return <div className="mb-5 flex items-end justify-between gap-4"><div><p className="eyebrow">{eyebrow}</p><h2 className="mt-1 font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-ink">{title}</h2></div>{action && <button className="hidden text-sm font-semibold text-coral transition hover:text-ink sm:block">{action} <span className="ml-1">&rarr;</span></button>}</div>;
}

function SkillCard({ skill }: { skill: Skill }) {
  return <article className="group rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d4d8cf] hover:shadow-[0_12px_30px_rgba(35,43,38,0.08)]"><div className="flex items-start justify-between gap-3"><div><div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${skill.color}`} /><h3 className="font-display text-[1.05rem] font-semibold tracking-[-0.025em]">{skill.name}</h3></div><p className="mt-1 text-xs text-muted">{skill.detail}</p></div><div className="text-right"><p className="font-display text-2xl font-semibold tracking-[-0.06em] text-ink">{skill.score}%</p><p className="text-[0.65rem] text-muted">{skill.level}</p></div></div><div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#eeeee9]"><div className={`h-full rounded-full ${skill.color} transition-all duration-700`} style={{ width: `${skill.score}%` }} /></div><div className="mt-4 flex items-center justify-between"><span className={`rounded-md px-2 py-1 text-[0.65rem] font-bold ${statusStyles[skill.status]}`}>{skill.status}</span><button aria-label={`View ${skill.name} details`} className="text-muted opacity-0 transition group-hover:opacity-100"><Icon name="arrow" size={15} /></button></div></article>;
}

export default function MySkillsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | Skill["category"]>("All");
  const filteredSkills = useMemo(() => skillData.filter((skill) => (category === "All" || skill.category === category) && skill.name.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const skillGroups = ["Technical", "Soft skills", "Domain skills"] as const;
  const radarData = { labels: ["Python", "SQL", "React", "AWS", "Git"], datasets: [{ label: "Aarav's profile", data: [72, 64, 84, 42, 76], backgroundColor: "rgba(228, 98, 78, 0.16)", borderColor: "#e4624e", borderWidth: 2, pointBackgroundColor: "#e4624e", pointBorderColor: "#fff", pointBorderWidth: 2, pointRadius: 4 }] };
  const radarOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { backgroundColor: "#232b26", padding: 10, displayColors: false } }, scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 20 }, grid: { color: "#dfe3dc" }, angleLines: { color: "#dfe3dc" }, pointLabels: { color: "#69736b", font: { family: "Geist, sans-serif", size: 11, weight: 600 } } } } };
  const doughnutData = { labels: ["Ready", "To build"], datasets: [{ data: [78, 22], backgroundColor: ["#e4624e", "#3c4540"], borderWidth: 0, hoverOffset: 4 }] };
  const doughnutOptions = { responsive: true, maintainAspectRatio: false, cutout: "78%", rotation: -90, circumference: 360, plugins: { legend: { display: false }, tooltip: { enabled: false } } };

  return <div className="min-h-screen bg-[#f8f8f5] text-ink">
    <aside className={`fixed inset-y-0 left-0 z-30 flex w-[258px] flex-col border-r border-line bg-[#fbfbf8] px-5 py-7 transition-transform duration-300 lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex items-center justify-between px-3"><Link href="/" className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-coral text-white"><Icon name="spark" size={17} /></span><span className="font-display text-[1.25rem] font-bold tracking-[-0.04em]">skill<span className="text-coral">connect</span></span></Link><button aria-label="Close navigation" className="text-muted lg:hidden" onClick={() => setMenuOpen(false)}><Icon name="close" /></button></div>
      <div className="mt-12 px-3"><p className="eyebrow mb-3">Workspace</p><nav className="space-y-1">{navigation.map(([label, icon, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[0.92rem] font-medium transition ${label === "My Skills" ? "bg-coral text-white shadow-[0_6px_14px_rgba(228,98,78,0.17)]" : "text-muted hover:bg-[#efefea] hover:text-ink"}`}><Icon name={icon} size={18} />{label}{label === "Opportunities" && <span className="ml-auto rounded-full bg-[#e9ece7] px-2 py-0.5 text-[0.68rem] text-muted">12</span>}</Link>)}</nav></div>
      <div className="mt-auto rounded-2xl bg-[#e9f0e8] p-4"><div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-olive text-white"><Icon name="spark" size={16} /></div><p className="font-display text-[1rem] font-semibold">Build your edge</p><p className="mt-1 text-xs leading-5 text-muted">Complete one assessment to unlock new matches.</p><button className="mt-4 flex items-center text-xs font-bold text-olive">Explore assessments <span className="ml-2">&rarr;</span></button></div>
      <div className="mt-5 flex items-center gap-3 border-t border-line px-3 pt-5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-sm font-bold">AS</div><div className="min-w-0"><p className="truncate text-sm font-semibold">Aarav Sharma</p><p className="truncate text-xs text-muted">Student account</p></div><Icon name="chevron" size={15} /></div>
    </aside>
    {menuOpen && <button aria-label="Close navigation overlay" className="fixed inset-0 z-20 bg-ink/20 lg:hidden" onClick={() => setMenuOpen(false)} />}
    <main className="lg:pl-[258px]"><header className="flex h-[76px] items-center justify-between border-b border-line bg-[#fbfbf8]/80 px-5 backdrop-blur sm:px-8 lg:px-11"><div className="flex items-center gap-3"><button aria-label="Open navigation" className="rounded-lg p-2 text-muted hover:bg-[#efefea] lg:hidden" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button><p className="hidden text-sm text-muted sm:block">Saturday, 5 September 2026</p></div><div className="flex items-center gap-3 sm:gap-5"><label className="relative hidden md:block"><span className="sr-only">Search skills</span><Icon name="search" size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search your skills..." className="h-10 w-56 rounded-xl border border-line bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-[#a3a49e] focus:border-coral lg:w-64" /></label><button aria-label="Search" className="rounded-lg p-2 text-muted hover:bg-[#efefea] md:hidden"><Icon name="search" /></button><button aria-label="Notifications" className="relative rounded-lg p-2 text-muted hover:bg-[#efefea]"><Icon name="bell" /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-coral" /></button><div className="flex items-center gap-2 border-l border-line pl-3 sm:pl-5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-xs font-bold">AS</div><span className="hidden text-sm font-semibold sm:block">Aarav Sharma</span><Icon name="chevron" size={14} /></div></div></header>
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-11 lg:py-10">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Your capabilities</p><h1 className="mt-2 font-display text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.055em] text-ink sm:text-[2.75rem]">My skills <span className="text-coral">.</span></h1><p className="mt-3 text-[0.95rem] text-muted">Build a profile that gets noticed by the right teams.</p></div><button className="flex w-fit items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-bold text-white shadow-[0_8px_16px_rgba(228,98,78,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d85643]"><Icon name="spark" size={16} />Take assessment <Icon name="arrow" size={16} /></button></div>
        <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white sm:p-8"><div className="relative z-10 flex items-center justify-between gap-4"><div><p className="eyebrow text-[#b3b8b0]">Overall readiness</p><p className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">Career ready</p><p className="mt-2 max-w-[200px] text-sm leading-6 text-[#b3b8b0]">Your profile is gaining momentum. Keep closing the gaps.</p></div><div className="relative h-40 w-40 shrink-0"><Doughnut data={doughnutData} options={doughnutOptions} /><div className="absolute inset-0 grid place-items-center text-center"><div><p className="font-display text-[2.5rem] font-semibold leading-none tracking-[-0.07em]">78%</p><p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-[#b3b8b0]">readiness</p></div></div></div></div><div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs"><span className="text-[#b3b8b0]">+6% since your last assessment</span><span className="flex items-center gap-1 font-semibold text-white"><span className="h-1.5 w-1.5 rounded-full bg-coral" /> On track</span></div><div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" /></div>
          <div className="rounded-2xl border border-line bg-white p-5 sm:p-7"><div className="flex items-start justify-between"><div><p className="eyebrow">Technical snapshot</p><h2 className="mt-1 font-display text-xl font-semibold tracking-[-0.03em]">Your skill profile</h2><p className="mt-2 text-sm text-muted">How your core skills compare today.</p></div><span className="rounded-lg bg-[#e9f0e8] px-2.5 py-1.5 text-[0.68rem] font-bold text-olive">5 core skills</span></div><div className="mt-3 h-[225px] sm:h-[240px]"><Radar data={radarData} options={radarOptions} /></div></div>
        </section>
        <section className="mt-10"><SectionHeading eyebrow="Your toolkit" title="Skills by category" /><div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-1 overflow-x-auto rounded-xl border border-line bg-white p-1">{(["All", ...skillGroups] as const).map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold transition ${category === item ? "bg-ink text-white" : "text-muted hover:bg-[#f1f2ed] hover:text-ink"}`}>{item}</button>)}</div><p className="text-xs text-muted">{filteredSkills.length} skills in your profile</p></div>{category === "All" ? <div className="space-y-8">{skillGroups.map((group) => <div key={group}><div className="mb-4 flex items-center gap-3"><h3 className="font-display text-lg font-semibold tracking-[-0.03em]">{group}</h3><span className="h-px flex-1 bg-line" /></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{skillData.filter((skill) => skill.category === group && skill.name.toLowerCase().includes(query.toLowerCase())).map((skill) => <SkillCard key={skill.name} skill={skill} />)}</div></div>)}</div> : <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filteredSkills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}</div>}</section>
        <div className="mt-10 grid gap-8 xl:grid-cols-[1.08fr_0.92fr]"><section><SectionHeading eyebrow="Keep growing" title="Close your skill gaps" /><div className="rounded-2xl border border-line bg-white p-5 sm:p-7"><p className="max-w-md text-sm leading-6 text-muted">These skills could make the biggest difference to your internship matches.</p><div className="mt-5 space-y-3">{skillData.filter((skill) => skill.score < 65).map((skill) => <div key={skill.name} className="flex items-center justify-between gap-3 rounded-xl bg-[#f8f8f5] p-3.5"><div className="flex min-w-0 items-center gap-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${skill.color} text-white`}><Icon name="spark" size={15} /></span><div className="min-w-0"><p className="text-sm font-semibold">{skill.name}</p><p className="mt-1 text-xs text-muted">Current score {skill.score}% · {skill.detail}</p></div></div><button className="shrink-0 text-xs font-bold text-coral transition hover:text-ink">Improve skill <span className="ml-1">&rarr;</span></button></div>)}</div></div></section>
          <section><SectionHeading eyebrow="Latest activity" title="Recent assessments" /><div className="rounded-2xl border border-line bg-white p-5 sm:p-7"><div className="space-y-1">{[["Frontend foundations", "JavaScript · React", "86%", "18 Aug 2026", "bg-coral"], ["SQL for analytics", "SQL & databases", "64%", "04 Aug 2026", "bg-gold"], ["Workplace communication", "Soft skills", "78%", "28 Jul 2026", "bg-olive"]].map(([title, subtitle, score, date, tone]) => <div key={title} className="flex items-center gap-3 border-b border-line py-3.5 last:border-0"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${tone} text-white`}><Icon name="check" size={15} /></span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-muted">{subtitle} · {date}</p></div><p className="font-display text-lg font-bold text-olive">{score}</p></div>)}</div><button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-bold transition hover:border-ink hover:bg-[#f8f8f5]">View all assessments <Icon name="arrow" size={16} /></button></div></section></div>
        <section className="mt-10 overflow-hidden rounded-2xl bg-[#e9f0e8] p-6 sm:p-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="eyebrow text-olive">Make your next move</p><h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em]">Turn your progress into opportunity.</h2><p className="mt-2 text-sm text-muted">Take a focused assessment and show teams what you can do.</p></div><button className="flex w-fit shrink-0 items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#3b4740]">Take assessment <Icon name="arrow" size={16} /></button></div></section>
      </div>
    </main>
  </div>;
}
