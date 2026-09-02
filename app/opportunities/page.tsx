"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { StudentNotifications } from "@/components/student-notifications";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const navigation = [
  ["Dashboard", "/"],
  ["My Skills", "/skills"],
  ["Assessments", "/assessments"],
  ["Opportunities", "/opportunities"],
  ["Applications", "/applications"],
  ["Portfolio", "/portfolio"],
] as const;

type Opportunity = {
  id: string;
  company: string;
  role: string;
  type: "Internship" | "Job";
  location: string;
  mode: "Remote" | "Hybrid" | "On-site";
  deadline: string;
  days: number;
  match: number;
  skills: string[];
  missing: string[];
  reason: string;
  color: string;
  mark: string;
  featured?: boolean;
};

const opportunities: Opportunity[] = [
  {
    id: "razorpay",
    company: "Razorpay",
    role: "Product Engineering Intern",
    type: "Internship",
    location: "Bengaluru",
    mode: "Remote",
    deadline: "12 Sep 2026",
    days: 11,
    match: 94,
    skills: ["JavaScript", "React", "Node.js"],
    missing: ["Node.js"],
    reason:
      "Your JavaScript and React strengths align closely with this product team.",
    color: "#e9f0ff",
    mark: "R",
    featured: true,
  },
  {
    id: "miro",
    company: "Miro",
    role: "Frontend Developer Intern",
    type: "Internship",
    location: "Remote",
    mode: "Remote",
    deadline: "18 Sep 2026",
    days: 17,
    match: 89,
    skills: ["JavaScript", "TypeScript", "Figma"],
    missing: ["TypeScript"],
    reason:
      "Your frontend foundation is a strong fit for collaborative product work.",
    color: "#fff0d8",
    mark: "M",
  },
  {
    id: "zerodha",
    company: "Zerodha",
    role: "Data Analytics Intern",
    type: "Internship",
    location: "Bengaluru",
    mode: "Hybrid",
    deadline: "22 Sep 2026",
    days: 21,
    match: 82,
    skills: ["Python", "SQL", "Tableau"],
    missing: ["Tableau"],
    reason: "Your Python and SQL scores match the core analytics requirements.",
    color: "#e3f2e9",
    mark: "Z",
  },
  {
    id: "meesho",
    company: "Meesho",
    role: "Growth Analyst",
    type: "Job",
    location: "Bengaluru",
    mode: "Hybrid",
    deadline: "30 Sep 2026",
    days: 29,
    match: 78,
    skills: ["SQL", "SEO", "Excel"],
    missing: ["Excel"],
    reason:
      "Your SEO and SQL profile supports the growth insights this role needs.",
    color: "#f9e9e9",
    mark: "M",
  },
  {
    id: "cleartax",
    company: "ClearTax",
    role: "Cloud Platform Intern",
    type: "Internship",
    location: "Bengaluru",
    mode: "On-site",
    deadline: "08 Oct 2026",
    days: 37,
    match: 71,
    skills: ["AWS", "Python", "Git"],
    missing: ["AWS", "Git"],
    reason:
      "Your Python experience is relevant; building cloud confidence would strengthen this match.",
    color: "#e9f0e8",
    mark: "C",
  },
  {
    id: "phonepe",
    company: "PhonePe",
    role: "Associate Software Engineer",
    type: "Job",
    location: "Pune",
    mode: "On-site",
    deadline: "14 Sep 2026",
    days: 13,
    match: 86,
    skills: ["JavaScript", "React", "SQL"],
    missing: [],
    reason:
      "Your verified JavaScript, React and SQL skills map directly to the role.",
    color: "#fff0d8",
    mark: "P",
  },
  {
    id: "groww",
    company: "Groww",
    role: "Product Design & Tech Intern",
    type: "Internship",
    location: "Remote",
    mode: "Remote",
    deadline: "26 Sep 2026",
    days: 25,
    match: 76,
    skills: ["React", "Figma", "Communication"],
    missing: ["Figma"],
    reason:
      "Your React and communication strengths give you a solid product foundation.",
    color: "#e9f0ff",
    mark: "G",
  },
  {
    id: "tiger",
    company: "Tiger Analytics",
    role: "Junior Data Engineer",
    type: "Job",
    location: "Chennai",
    mode: "Hybrid",
    deadline: "04 Oct 2026",
    days: 33,
    match: 80,
    skills: ["Python", "SQL", "AWS"],
    missing: ["AWS"],
    reason:
      "Your data fundamentals are ready; AWS is the one capability to sharpen next.",
    color: "#e3f2e9",
    mark: "T",
  },
];

function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-1 font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-ink">
          {title}
        </h2>
      </div>
      {action && (
        <button className="hidden text-sm font-semibold text-coral transition hover:text-ink sm:block">
          {action} <span className="ml-1">&rarr;</span>
        </button>
      )}
    </div>
  );
}

function Shell({
  children,
  menuOpen,
  setMenuOpen,
  query,
  setQuery,
}: {
  children: React.ReactNode;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
}) {
  return (
    <div className="min-h-screen bg-[#f8f8f5] text-ink">
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-[258px] flex-col border-r border-line bg-[#fbfbf8] px-5 py-7 transition-transform duration-300 lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-coral text-white">
              <Sparkles size={17} />
            </span>
            <span className="font-display text-[1.25rem] font-bold tracking-[-0.04em]">
              skill<span className="text-coral">connect</span>
            </span>
          </Link>
          <button
            aria-label="Close navigation"
            className="text-muted lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <X />
          </button>
        </div>
        <div className="mt-12 px-3">
          <p className="eyebrow mb-3">Workspace</p>
          <nav className="space-y-1">
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-[0.92rem] font-medium transition ${label === "Opportunities" ? "bg-coral text-white shadow-[0_6px_14px_rgba(228,98,78,0.17)]" : "text-muted hover:bg-[#efefea] hover:text-ink"}`}
              >
                <span className="w-5 text-center">
                  {label === "Dashboard"
                    ? "⌂"
                    : label === "My Skills"
                      ? "✦"
                      : label === "Assessments"
                        ? "▣"
                        : label === "Opportunities"
                          ? "◆"
                          : label === "Applications"
                            ? "□"
                            : "○"}
                </span>
                {label}
                {label === "Opportunities" && (
                  <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[0.68rem]">
                    12
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto rounded-2xl bg-[#e9f0e8] p-4">
          <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-olive text-white">
            <Sparkles size={16} />
          </div>
          <p className="font-display text-[1rem] font-semibold">
            Build your edge
          </p>
          <p className="mt-1 text-xs leading-5 text-muted">
            Complete one assessment to unlock new matches.
          </p>
          <button className="mt-4 flex items-center text-xs font-bold text-olive">
            Explore assessments <span className="ml-2">&rarr;</span>
          </button>
        </div>
        <div className="mt-5 flex items-center gap-3 border-t border-line px-3 pt-5">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-sm font-bold">
            AS
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Aarav Sharma</p>
            <p className="truncate text-xs text-muted">Student account</p>
          </div>
          <ChevronDown size={15} />
        </div>
      </aside>
      {menuOpen && (
        <button
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-20 bg-ink/20 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <main className="lg:pl-[258px]">
        <header className="flex h-[76px] items-center justify-between border-b border-line bg-[#fbfbf8]/80 px-5 backdrop-blur sm:px-8 lg:px-11">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open navigation"
              className="rounded-lg p-2 text-muted hover:bg-[#efefea] lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </button>
            <p className="hidden text-sm text-muted sm:block">
              Saturday, 5 September 2026
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <label className="relative hidden md:block">
              <span className="sr-only">Search opportunities</span>
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                size={17}
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search opportunities..."
                className="h-10 w-56 rounded-xl border border-line bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-[#a3a49e] focus:border-coral lg:w-64"
              />
            </label>
            <StudentNotifications />
            <div className="flex items-center gap-2 border-l border-line pl-3 sm:pl-5">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-xs font-bold">
                AS
              </div>
              <span className="hidden text-sm font-semibold sm:block">
                Aarav Sharma
              </span>
              <ChevronDown size={14} />
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-11 lg:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}

function OpportunityCard({
  opportunity,
  onDetails,
}: {
  opportunity: Opportunity;
  onDetails: (opportunity: Opportunity) => void;
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d4d8cf] hover:shadow-[0_12px_30px_rgba(35,43,38,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="grid h-11 w-11 place-items-center rounded-xl font-display text-lg font-bold"
            style={{ background: opportunity.color }}
          >
            {opportunity.mark}
          </span>
          <div>
            <p className="text-xs font-semibold text-muted">
              {opportunity.company}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold tracking-[-0.03em]">
              {opportunity.role}
            </h3>
          </div>
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-bold text-olive">
            {opportunity.match}%
          </p>
          <p className="text-[0.62rem] uppercase tracking-[0.12em] text-muted">
            match
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
        <span className="rounded-md bg-[#f1f2ed] px-2 py-1">
          {opportunity.type}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={13} />
          {opportunity.location}
        </span>
        <span className="rounded-md bg-[#f1f2ed] px-2 py-1">
          {opportunity.mode}
        </span>
      </div>
      <p className="mt-5 text-sm leading-6 text-muted">
        <span className="font-semibold text-ink">Why you match: </span>
        {opportunity.reason}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {opportunity.skills.map((skill) => (
          <span
            key={skill}
            className={`rounded-md px-2 py-1 text-[0.68rem] font-medium ${opportunity.missing.includes(skill) ? "bg-[#f9e9e9] text-[#ad6568]" : "bg-[#e9f0e8] text-olive"}`}
          >
            {skill}
            {opportunity.missing.includes(skill) && " · build"}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs">
        <span
          className={`flex items-center gap-1.5 ${opportunity.days <= 14 ? "font-bold text-coral" : "text-muted"}`}
        >
          <Clock3 size={14} />
          Deadline {opportunity.deadline}
        </span>
        <button
          onClick={() => onDetails(opportunity)}
          className="flex items-center gap-1 text-sm font-bold text-ink transition group-hover:text-coral"
        >
          View details <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

export default function OpportunitiesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Best Match");
  const [selected, setSelected] = useState<Opportunity | null>(null);
  const filtered = useMemo(
    () =>
      [...opportunities]
        .filter(
          (item) =>
            (filter === "All" ||
              item.type === filter ||
              item.mode === filter) &&
            `${item.company} ${item.role} ${item.skills.join(" ")}`
              .toLowerCase()
              .includes(query.toLowerCase()),
        )
        .sort((a, b) =>
          sort === "Newest"
            ? b.id.localeCompare(a.id)
            : sort === "Deadline"
              ? a.days - b.days
              : b.match - a.match,
        ),
    [filter, query, sort],
  );
  const featured = opportunities[0];
  return (
    <Shell
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      query={query}
      setQuery={setQuery}
    >
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Your opportunity feed</p>
          <h1 className="mt-2 max-w-2xl font-display text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-[2.75rem]">
            Opportunities matched to your skills{" "}
            <span className="text-coral">.</span>
          </h1>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-6 text-muted">
            Roles selected around your strengths, goals and next best skill
            moves.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-xs text-muted">
          <Sparkles size={15} className="text-coral" /> Matching updated today
        </div>
      </div>
      <section className="mb-10 overflow-hidden rounded-2xl bg-ink p-6 text-white sm:p-8">
        <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="eyebrow text-[#b3b8b0]">Highest match for you</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              {featured.role}
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#d0d5cd]">
              {featured.company} · {featured.type} · {featured.mode}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[#b3b8b0]">
              {featured.reason} Your verified skills put you in the top tier of
              applicants for this role.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs text-[#e0e4dc]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setSelected(featured)}
                className="flex items-center gap-2 rounded-xl bg-coral px-4 py-3 text-sm font-bold transition hover:bg-[#d85643]"
              >
                View details <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Apply now <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="grid h-32 w-32 place-items-center rounded-full border-[10px] border-coral text-center">
              <div>
                <p className="font-display text-3xl font-semibold">
                  {featured.match}%
                </p>
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[#b3b8b0]">
                  match
                </p>
              </div>
            </div>
            <div className="hidden text-xs leading-6 text-[#b3b8b0] sm:block">
              <p className="font-bold text-white">Why this fits</p>
              <p>JavaScript + React</p>
              <p>Product engineering</p>
              <p className="mt-2 flex items-center gap-1 text-coral">
                <Clock3 size={13} /> {featured.days} days left
              </p>
            </div>
          </div>
        </div>
        <div className="absolute" />
      </section>
      <section>
        <SectionHeading
          eyebrow="Recommended roles"
          title="Find your next move"
          action="Saved opportunities"
        />
        <div className="mb-6 flex flex-col justify-between gap-3 lg:flex-row lg:items-center">
          <div className="flex gap-1 overflow-x-auto rounded-xl border border-line bg-white p-1">
            {["All", "Internship", "Job", "Remote"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold transition ${filter === item ? "bg-ink text-white" : "text-muted hover:bg-[#f1f2ed] hover:text-ink"}`}
              >
                {item === "Internship"
                  ? "Internships"
                  : item === "Job"
                    ? "Jobs"
                    : item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted">
              {filtered.length} matches
            </span>
            <label className="flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-xs font-semibold">
              <span className="text-muted">Sort</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="bg-transparent outline-none"
              >
                <option>Best Match</option>
                <option>Newest</option>
                <option>Deadline</option>
              </select>
              <ChevronDown size={14} className="text-muted" />
            </label>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              onDetails={setSelected}
            />
          ))}
        </div>
      </section>
      <section className="mt-10 overflow-hidden rounded-2xl bg-[#e9f0e8] p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-olive">
              A stronger profile opens more doors
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em]">
              Close your AWS gap to unlock 6 more matches.
            </h2>
            <p className="mt-2 text-sm text-muted">
              A short assessment could move your readiness score from 78 to 84.
            </p>
          </div>
          <Link
            href="/assessments"
            className="flex w-fit shrink-0 items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#3b4740]"
          >
            Take assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      {selected && (
        <div
          className="fixed inset-0 z-40 grid place-items-center bg-ink/30 p-5"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-line bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="eyebrow">{selected.company}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em]">
                  {selected.role}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {selected.type} · {selected.location} · {selected.mode}
                </p>
              </div>
              <button
                aria-label="Close opportunity details"
                onClick={() => setSelected(null)}
                className="text-muted"
              >
                <X />
              </button>
            </div>
            <div className="mt-6 rounded-xl bg-[#f8f8f5] p-4">
              <p className="font-display text-3xl font-semibold text-olive">
                {selected.match}% match
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {selected.reason}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-sm font-bold">Skills for this role</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {selected.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-md px-2.5 py-1.5 text-xs font-semibold ${selected.missing.includes(skill) ? "bg-[#f9e9e9] text-[#ad6568]" : "bg-[#e9f0e8] text-olive"}`}
                  >
                    {selected.missing.includes(skill) ? "Build: " : "Ready: "}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-7 flex gap-3">
              <button className="flex-1 rounded-xl bg-coral py-3 text-sm font-bold text-white transition hover:bg-[#d85643)">
                Apply now
              </button>
              <button
                onClick={() => setSelected(null)}
                className="rounded-xl border border-line px-5 py-3 text-sm font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
