"use client";

import React from "react";
import Link from "next/link";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";
import { StudentLayout } from "@/components/student-layout";

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
  return (
    <StudentLayout>
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        {/* Greeting + CTA */}
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
          <Link
            href="/assessments"
            className="flex w-fit items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-bold text-white shadow-[0_8px_16px_rgba(228,98,78,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d85643]"
          >
            <Zap size={16} />
            Take assessment <ArrowRight size={16} />
          </Link>
        </div>

        {/* Hero section */}
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
                  <span className="font-bold text-white">64%</span> of students
                  in your field. Keep building momentum.
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
                    <p className="font-display text-2xl font-semibold">Good</p>
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
                    <ArrowRight size={15} />
                  </span>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                    {value}
                  </p>
                  <p className="mt-1 text-[0.68rem] font-medium text-muted">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills + Gaps */}
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
                  <CheckCircle size={12} />
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
                  ["Cloud fundamentals", "AWS", "Start with a 20 min lesson", "bg-rose"],
                  ["Data storytelling", "Tableau", "Recommended for your goals", "bg-sky"],
                  ["Technical interviews", "DSA", "Build your confidence", "bg-gold"],
                ].map(([title, tag, note, tone]) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-xl bg-[#f8f8f5] p-3"
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${tone} text-white`}
                    >
                      <Zap size={15} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">
                        {title}{" "}
                        <span className="ml-1 rounded bg-white px-1.5 py-0.5 text-[0.65rem] font-medium text-muted">
                          {tag}
                        </span>
                      </p>
                      <p className="mt-1 truncate text-xs text-muted">{note}</p>
                    </div>
                    <ArrowRight size={15} className="text-muted shrink-0" />
                  </div>
                ))}
              </div>
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-bold transition hover:border-ink hover:bg-[#f8f8f5]">
                View personalized roadmap <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </div>

        {/* Opportunities */}
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
                <p className="mt-5 text-xs font-semibold text-muted">{opportunity.company}</p>
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
                  View opportunity <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </StudentLayout>
  );
}
