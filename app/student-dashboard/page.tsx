"use client";

import { useState } from "react";
import Link from "next/link";

import { RoleSwitcher } from "@/components/role-switcher";
import { StudentNotifications } from "@/components/student-notifications";

type IconName =
  | "grid"
  | "spark"
  | "clipboard"
  | "briefcase"
  | "file"
  | "user"
  | "search"
  | "bell"
  | "arrow"
  | "check"
  | "menu"
  | "close"
  | "chevron";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3-1.5 6.5L4 11l6.5 1.5L12 19l1.5-6.5L20 11l-6.5-1.5L12 3Z" />
        <path d="m19 17-.6 2.4L16 20l2.4.6L19 23l.6-2.4L22 20l-2.4-.6L19 17Z" />
      </>
    ),
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4.5V3h6v1.5M9 11h6M9 15h4" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
    bell: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
  };
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

const navigation = [
  ["Dashboard", "grid", "/student-dashboard"],
  ["My Skills", "spark", "/skills"],
  ["Assessments", "clipboard", "/assessments"],
  ["Opportunities", "briefcase", "/opportunities"],
  ["Applications", "file", "/applications"],
  ["Portfolio", "user", "/portfolio"],
] as const;

const skills = [
  { name: "JavaScript", level: "Advanced", progress: 86, tone: "bg-coral" },
  { name: "Python", level: "Intermediate", progress: 72, tone: "bg-olive" },
  { name: "SQL", level: "Intermediate", progress: 64, tone: "bg-sky" },
  { name: "SEO", level: "Intermediate", progress: 58, tone: "bg-gold" },
  { name: "AWS", level: "Beginner", progress: 42, tone: "bg-rose" },
];

const opportunities = [
  {
    company: "Razorpay",
    role: "Product Engineering Intern",
    type: "Internship · Bengaluru / Remote",
    match: 94,
    skills: ["JavaScript", "React", "Node.js"],
    color: "#e9f0ff",
    mark: "R",
  },
  {
    company: "Miro",
    role: "Frontend Developer Intern",
    type: "Internship · Remote",
    match: 89,
    skills: ["JavaScript", "TypeScript", "Figma"],
    color: "#fff0d8",
    mark: "M",
  },
  {
    company: "Zerodha",
    role: "Data Analytics Intern",
    type: "Internship · Bengaluru",
    match: 82,
    skills: ["Python", "SQL", "Tableau"],
    color: "#e3f2e9",
    mark: "Z",
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

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-ink">
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-[258px] flex-col border-r border-line bg-[#fbfbf8] px-5 py-7 transition-transform duration-300 lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-coral text-white">
              <Icon name="spark" size={17} />
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
            <Icon name="close" />
          </button>
        </div>
        <div className="mt-12 px-3">
          <p className="eyebrow mb-3">Workspace</p>
          <nav className="space-y-1">
            {navigation.map(([label, icon, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => {
                  setActive(label);
                  setMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[0.92rem] font-medium transition ${active === label ? "bg-coral text-white shadow-[0_6px_14px_rgba(228,98,78,0.17)]" : "text-muted hover:bg-[#efefea] hover:text-ink"}`}
              >
                <Icon name={icon} size={18} />
                {label}
                {label === "Opportunities" && (
                  <span
                    className={`ml-auto rounded-full px-2 py-0.5 text-[0.68rem] ${active === label ? "bg-white/20 text-white" : "bg-[#e9ece7] text-muted"}`}
                  >
                    12
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto rounded-2xl bg-[#e9f0e8] p-4">
          <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-olive text-white">
            <Icon name="spark" size={16} />
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
          <Icon name="chevron" size={15} />
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
              <Icon name="menu" />
            </button>
            <p className="hidden text-sm text-muted sm:block">
              Saturday, 5 September 2026
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <label className="relative hidden md:block">
              <span className="sr-only">Search</span>
              <Icon name="search" size={17} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search opportunities..."
                className="h-10 w-56 rounded-xl border border-line bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-[#a3a49e] focus:border-coral lg:w-64"
              />
            </label>
            <button
              aria-label="Search"
              className="rounded-lg p-2 text-muted hover:bg-[#efefea] md:hidden"
            >
              <Icon name="search" />
            </button>
            <StudentNotifications />
            <RoleSwitcher currentRole="student" />
            <div className="flex items-center gap-2 border-l border-line pl-3 sm:pl-5">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-xs font-bold">
                AS
              </div>
              <span className="hidden text-sm font-semibold sm:block">
                Aarav Sharma
              </span>
              <Icon name="chevron" size={14} />
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-11 lg:py-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Student dashboard</p>
              <h1 className="mt-2 font-display text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.055em] text-ink sm:text-[2.75rem]">
                Good morning, Aarav <span className="text-coral">.</span>
              </h1>
              <p className="mt-3 text-[0.95rem] text-muted">
                Your next opportunity is closer than you think.
              </p>
            </div>
            <Link href="/assessments" className="flex w-fit items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-bold text-white shadow-[0_8px_16px_rgba(228,98,78,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d85643]">
              <Icon name="spark" size={16} />
              Take assessment <Icon name="arrow" size={16} />
            </Link>
          </div>
          <section className="grid gap-5 xl:grid-cols-[1.35fr_1fr]">
            <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white sm:p-8">
              <div className="relative z-10 flex h-full flex-col justify-between gap-8 sm:flex-row sm:items-center">
                <div>
                  <p className="eyebrow text-[#b3b8b0]">Your skill readiness</p>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="font-display text-[4.6rem] font-semibold leading-none tracking-[-0.08em]">
                      78
                    </span>
                    <span className="text-xl text-[#9fa69d]">/ 100</span>
                  </div>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#b3b8b0]">
                    You&apos;re ahead of{" "}
                    <span className="font-bold text-white">64%</span> of
                    students in your field. Keep building momentum.
                  </p>
                </div>
                <div
                  className="relative grid h-36 w-36 shrink-0 place-items-center self-center rounded-full"
                  style={{
                    background:
                      "conic-gradient(#e4624e 0deg 281deg, #3c4540 281deg 360deg)",
                  }}
                >
                  <div className="grid h-[116px] w-[116px] place-items-center rounded-full bg-ink">
                    <div className="text-center">
                      <p className="font-display text-2xl font-semibold">
                        Good
                      </p>
                      <p className="mt-1 text-[0.68rem] uppercase tracking-[0.15em] text-[#9fa69d]">
                        momentum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full border border-white/10" />
            </div>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {[
                ["Verified skills", "08", "up 2 this month", "#e9f0e8"],
                ["Applications", "06", "2 interviews", "#fff0d8"],
                ["Internship matches", "12", "3 new this week", "#e9f0e8"],
              ].map(([label, value, note, color]) => (
                <div
                  key={label}
                  className="flex min-h-[178px] flex-col justify-between p-4 sm:p-5"
                  style={{ backgroundColor: color }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="max-w-[90px] text-xs font-semibold leading-4 text-muted">
                      {label}
                    </span>
                    <span className="text-olive">
                      <Icon name="arrow" size={15} />
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                      {value}
                    </p>
                    <p className="mt-1 text-[0.68rem] font-medium text-muted">
                      {note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="mt-10 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <section>
              <SectionHeading
                eyebrow="Progress snapshot"
                title="Skill overview"
                action="View all skills"
              />
              <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-xs text-muted">
                          {skill.level}{" "}
                          <span className="mx-2 text-[#d4d5cf]">|</span>{" "}
                          {skill.progress}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#eeeee9]">
                        <div
                          className={`h-full rounded-full ${skill.tone}`}
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-2 border-t border-line pt-5 text-xs text-muted">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e9f0e8] text-olive">
                    <Icon name="check" size={12} />
                  </span>{" "}
                  Skills are updated from your latest assessments
                </div>
              </div>
            </section>
            <section>
              <SectionHeading
                eyebrow="Focus areas"
                title="Close your skill gaps"
                action="See roadmap"
              />
              <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
                <p className="text-sm leading-6 text-muted">
                  A little focused practice can unlock your next level.
                </p>
                <div className="mt-5 space-y-3">
                  {[
                    [
                      "Cloud fundamentals",
                      "AWS",
                      "Start with a 20 min lesson",
                      "bg-rose",
                    ],
                    [
                      "Data storytelling",
                      "Tableau",
                      "Recommended for your goals",
                      "bg-sky",
                    ],
                    [
                      "Technical interviews",
                      "DSA",
                      "Build your confidence",
                      "bg-gold",
                    ],
                  ].map(([title, tag, note, tone]) => (
                    <div
                      key={title}
                      className="flex items-center gap-3 rounded-xl bg-[#f8f8f5] p-3"
                    >
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${tone} text-white`}
                      >
                        <Icon name="spark" size={15} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">
                          {title}{" "}
                          <span className="ml-1 rounded bg-white px-1.5 py-0.5 text-[0.65rem] font-medium text-muted">
                            {tag}
                          </span>
                        </p>
                        <p className="mt-1 truncate text-xs text-muted">
                          {note}
                        </p>
                      </div>
                      <Icon name="arrow" size={15} />
                    </div>
                  ))}
                </div>
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-bold transition hover:border-ink hover:bg-[#f8f8f5]">
                  View personalized roadmap <Icon name="arrow" size={16} />
                </button>
              </div>
            </section>
          </div>
          <section className="mt-10">
            <SectionHeading
              eyebrow="Curated for you"
              title="Recommended opportunities"
              action="Browse all opportunities"
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {opportunities.map((opportunity) => (
                <article
                  key={opportunity.company}
                  className="group rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,43,38,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-xl font-display text-lg font-bold"
                      style={{ backgroundColor: opportunity.color }}
                    >
                      {opportunity.mark}
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-bold text-olive">
                        {opportunity.match}%
                      </p>
                      <p className="text-[0.65rem] uppercase tracking-[0.12em] text-muted">
                        match
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-xs font-semibold text-muted">
                    {opportunity.company}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold tracking-[-0.03em]">
                    {opportunity.role}
                  </h3>
                  <p className="mt-2 text-xs text-muted">{opportunity.type}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {opportunity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-[#f1f2ed] px-2 py-1 text-[0.68rem] font-medium text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 flex w-full items-center justify-between border-t border-line pt-4 text-sm font-bold transition group-hover:text-coral">
                    View opportunity <Icon name="arrow" size={16} />
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
