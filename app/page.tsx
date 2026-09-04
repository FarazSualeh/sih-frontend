'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronRight,
  Cpu,
  FileCheck,
  GraduationCap,
  Menu,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';

const roles = [
  {
    id: 'students',
    title: 'Students & Learners',
    badge: 'Empowerment',
    icon: GraduationCap,
    color: 'from-sky-500 to-blue-600',
    tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
    description: 'Master in-demand skills, validate proficiency via standardized assessments, and get matched with top hiring companies.',
    highlights: [
      'Take standardized assessments with objective benchmarks',
      'Track individual skill readiness against live market demand',
      'Build a verified digital portfolio that replaces traditional resumes'
    ],
    cta: 'Explore Student Portal',
    href: '/login'
  },
  {
    id: 'academicians',
    title: 'Academicians & Mentors',
    badge: 'Insights & Mentorship',
    icon: Users,
    color: 'from-emerald-500 to-teal-600',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Diagnose student skill gaps through centralized assessment insights and prescribe targeted training to elevate cohort outcomes.',
    highlights: [
      'Access deep diagnostic analytics across cohorts and skills',
      'Inspect standardized assessment criteria without grading friction',
      'Recommend personalized video and project training to close gaps'
    ],
    cta: 'Open Mentor Dashboard',
    href: '/academician'
  },
  {
    id: 'admin',
    title: 'Institutional Admins',
    badge: 'Governance',
    icon: ShieldCheck,
    color: 'from-indigo-500 to-violet-600',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: 'Centrally author standardized assessments, manage user governance, verify industry partners, and track institutional placement success.',
    highlights: [
      'Exclusively configure and calibrate standardized assessments',
      'Ensure objective, bias-free skill evaluations matching industry standards',
      'Oversee institutional readiness and placement funnels'
    ],
    cta: 'Enter Admin Console',
    href: '/admin'
  },
  {
    id: 'industry',
    title: 'Industry Partners',
    badge: 'Recruitment',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-600',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Discover certified candidate cohorts with verified skills, post high-impact opportunities, and streamline campus hiring.',
    highlights: [
      'Access candidate pipelines with authenticated skill scores',
      'Post internships and full-time engineering roles directly',
      'Zero credential inflation — rely on standardized evaluations'
    ],
    cta: 'Partner With Us',
    href: '/industry'
  }
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Centralized Assessment Governance',
    description: 'Standardized evaluation banks calibrated centrally by institutional administrators to ensure rigorous, objective skill benchmarking.',
    accent: 'text-indigo-600 bg-indigo-50'
  },
  {
    icon: Target,
    title: 'Diagnostic Skill Gap Engine',
    description: 'Mentors receive deep diagnostic signals on student performance, pinpointing precise knowledge deficiencies for targeted interventions.',
    accent: 'text-emerald-600 bg-emerald-50'
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Industry Demand Pulse',
    description: 'Dynamic mapping connects curriculum benchmarks to live job market requisitions from verified enterprise recruiters.',
    accent: 'text-amber-600 bg-amber-50'
  },
  {
    icon: Cpu,
    title: 'Automated Opportunity Matching',
    description: 'Algorithmically pairs student proficiency scores with hiring requirements for high-confidence job placements.',
    accent: 'text-sky-600 bg-sky-50'
  },
  {
    icon: FileCheck,
    title: 'Verified Digital Portfolios',
    description: 'Comprehensive candidate records featuring certified exam scores, supervised projects, and validated strengths.',
    accent: 'text-rose-600 bg-rose-50'
  },
  {
    icon: BarChart3,
    title: 'Institutional Placement Funnels',
    description: 'Real-time telemetry tracking learners from baseline skills to active applications, shortlists, and final offers.',
    accent: 'text-teal-600 bg-teal-50'
  }
];

const workflowSteps = [
  {
    step: '01',
    title: 'Standardized Assessment',
    desc: 'Learners complete standardized, admin-calibrated tests evaluating real technical & professional competence.'
  },
  {
    step: '02',
    title: 'Diagnostic Gap Analysis',
    desc: 'Academicians review cohort performance signals and diagnose specific gaps to recommend personalized training.'
  },
  {
    step: '03',
    title: 'Targeted Remediation',
    desc: 'Students engage with recommended learning pathways, videos, and practical projects to close detected gaps.'
  },
  {
    step: '04',
    title: 'Industry Match & Placement',
    desc: 'Verified candidate profiles match seamlessly with corporate hiring demands for accelerated, confident hiring.'
  }
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(roles[0].id);

  const currentRoleData = roles.find((r) => r.id === activeRole) ?? roles[0];

  return (
    <div className="relative min-h-screen bg-[#f8f8f5] text-[#1c2927] selection:bg-[#ef6d52] selection:text-white">
      {/* Background Ambience / Mesh Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[15%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#ef6d52]/10 via-[#ef6d52]/5 to-transparent blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-sky-400/10 via-indigo-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-[5%] left-[20%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-400/10 via-teal-500/5 to-transparent blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f8f8f5]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#ef6d52] to-[#d95b42] text-white shadow-md shadow-[#ef6d52]/25 transition duration-300 group-hover:scale-105">
              <Sparkles size={20} />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-[#1a2927]">
              skill<span className="text-[#ef6d52]">connect</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#60706a] md:flex">
            <a href="#ecosystem" className="transition hover:text-[#1a2927]">
              Ecosystem
            </a>
            <a href="#how-it-works" className="transition hover:text-[#1a2927]">
              How It Works
            </a>
            <a href="#features" className="transition hover:text-[#1a2927]">
              Capabilities
            </a>
            <div className="h-4 w-px bg-black/10" />
            <Link href="/login" className="transition hover:text-[#1a2927]">
              Sign In
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl bg-[#ef6d52] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#ef6d52]/25 transition duration-200 hover:bg-[#d95b42] hover:shadow-xl hover:shadow-[#ef6d52]/30 active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ArrowRight size={15} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-black/10 bg-white p-2 text-slate-700 shadow-xs md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-black/[0.06] bg-white/95 px-5 py-4 backdrop-blur-lg md:hidden">
            <div className="space-y-3">
              <a
                href="#ecosystem"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Ecosystem
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                How It Works
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Capabilities
              </a>
              <div className="pt-2">
                <Link
                  href="/login"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ef6d52] py-2.5 text-sm font-semibold text-white shadow-md shadow-[#ef6d52]/20"
                >
                  <span>Sign In / Register</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-5 pt-12 pb-20 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ef6d52]/20 bg-[#ef6d52]/8 px-3.5 py-1.5 text-xs font-semibold text-[#ef6d52]">
              <Sparkles size={14} className="animate-pulse" />
              <span>Standardized Skills & Opportunity Architecture</span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#1a2927] sm:text-6xl sm:leading-[1.05] lg:text-[4.15rem]">
              Where Verified Skills Meet{' '}
              <span className="bg-gradient-to-r from-[#ef6d52] via-[#e2583e] to-amber-500 bg-clip-text text-transparent">
                High-Impact
              </span>{' '}
              Industry Careers.
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#60706a] sm:text-lg">
              SkillConnect closes the employability divide with centralized assessment governance, mentor-guided skill gap analytics, and authenticated talent pipelines for industry recruiters.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/login"
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#ef6d52] to-[#d95b42] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#ef6d52]/25 transition duration-200 hover:shadow-2xl hover:shadow-[#ef6d52]/30 active:scale-[0.98]"
              >
                <span>Launch SkillConnect</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-xs transition hover:bg-slate-50"
              >
                <span>Explore Ecosystem</span>
                <ChevronRight size={16} className="text-slate-400" />
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#60706a]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Standardized Benchmarking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Educator Gap Diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Zero Credential Inflation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Bento Card & Live Visual */}
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-[#1a2927] to-[#121c1a] p-6 text-white shadow-2xl shadow-black/20 sm:p-7">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Live Readiness Pulse
                  </span>
                </div>
                <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                  Standardized Hub
                </span>
              </div>

              {/* Central Signal Card */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Standardized Evaluation
                    </span>
                    <h3 className="mt-0.5 text-lg font-bold">Full-Stack Cloud Core</h3>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ef6d52] text-white font-bold text-sm">
                    94%
                  </span>
                </div>

                <div className="mt-3.5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Python & Algorithms</span>
                    <span className="font-semibold text-emerald-300">92% · Mastered</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-1.5 rounded-full bg-emerald-400" style={{ width: '92%' }} />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <span>AWS Cloud Architecture</span>
                    <span className="font-semibold text-sky-300">86% · Proficient</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-1.5 rounded-full bg-sky-400" style={{ width: '86%' }} />
                  </div>
                </div>
              </div>

              {/* Metric Counters Grid */}
              <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">Admin Calibrated</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xl font-bold text-emerald-400">0%</div>
                  <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">Grading Bias</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xl font-bold text-[#ef6d52]">18</div>
                  <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">Active Matches</div>
                </div>
              </div>

              {/* Matched Opportunity Snippet */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold">
                    R
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="truncate text-sm font-semibold text-white">Razorpay · Backend Fellow</div>
                    <div className="text-xs text-slate-400">96% Skill Alignment · Verified Standard</div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#ef6d52] shrink-0" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-black/10 bg-white p-3.5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold">
                  <Check size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Standardized Verification</div>
                  <div className="text-[11px] text-slate-500">Benchmark recognized by 120+ employers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ECOSYSTEM EXPLORER */}
      <section id="ecosystem" className="border-t border-black/[0.06] bg-white/70 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ef6d52]">
              Connected Ecosystem
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1a2927] sm:text-4xl">
              One Unified Platform for Every Stakeholder.
            </h2>
            <p className="mt-3 text-base text-[#60706a]">
              Discover how SkillConnect harmonizes testing, mentoring, governance, and hiring across four purpose-built portals.
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-black/[0.06] pb-3">
            {roles.map((r) => {
              const Icon = r.icon;
              const isActive = activeRole === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setActiveRole(r.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#1a2927] text-white shadow-md'
                      : 'border border-black/[0.08] bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon size={16} />
                  <span>{r.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Role Content Card */}
          <div className="mt-6 rounded-3xl border border-black/10 bg-[#fbfbf9] p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${currentRoleData.tagColor}`}>
                  {currentRoleData.badge}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-[#1a2927] sm:text-3xl">
                  {currentRoleData.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#60706a]">
                  {currentRoleData.description}
                </p>

                <div className="mt-6 space-y-3">
                  {currentRoleData.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href={currentRoleData.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1a2927] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-black"
                  >
                    <span>{currentRoleData.cta}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Portal Visual Preview */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Console Architecture
                    </span>
                    <span className="text-xs font-semibold text-[#ef6d52]">Verified Route</span>
                  </div>

                  <div className="mt-4 space-y-3 text-xs">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <div className="font-semibold text-slate-800">Primary Module</div>
                      <div className="text-slate-500 mt-0.5">{currentRoleData.highlights[0]}</div>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <div className="font-semibold text-slate-800">Key Diagnostic Benefit</div>
                      <div className="text-slate-500 mt-0.5">{currentRoleData.highlights[1]}</div>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <div className="font-semibold text-slate-800">Outcome Delivery</div>
                      <div className="text-slate-500 mt-0.5">{currentRoleData.highlights[2]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - WORKFLOW SECTION */}
      <section id="how-it-works" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ef6d52]">
              Closed-Loop Workflow
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1a2927] sm:text-4xl">
              From Standardized Testing to Career Placement.
            </h2>
            <p className="mt-3 text-base text-[#60706a]">
              A continuous, evidence-backed loop connecting testing, diagnostic mentoring, learning interventions, and corporate recruitment.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-display text-3xl font-bold text-[#ef6d52]">
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-bold text-[#1a2927]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#60706a]">
                  {step.desc}
                </p>

                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-[#f8f8f5] text-slate-400">
                      <ChevronRight size={14} />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES / FEATURES GRID */}
      <section id="features" className="border-t border-black/[0.06] bg-white/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ef6d52]">
                Platform Capabilities
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1a2927] sm:text-4xl">
                Engineering Integrity into Employability.
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#60706a]">
              Built with precision, eliminating credential friction between education and industry.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="group rounded-2xl border border-black/10 bg-white p-6 shadow-xs transition duration-200 hover:border-black/20 hover:shadow-md"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition duration-300 group-hover:scale-105 ${feat.accent}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#1a2927]">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#60706a]">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2927] via-[#223834] to-[#121c1a] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-72 w-72 rounded-full bg-[#ef6d52]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#ef6d52]">
              <Sparkles size={13} />
              <span>Transform Your Campus Employability</span>
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-tight">
              Ready to standardise skill benchmarks and unlock authentic talent?
            </h2>

            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Experience the power of centralized evaluation governance, actionable mentor insights, and real-time hiring connections.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-[#ef6d52] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ef6d52]/30 transition hover:bg-[#d95b42] active:scale-[0.98]"
              >
                <span>Get Started Now</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <span>Admin Evaluation Console</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/[0.06] bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-10">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#ef6d52] text-white">
              <Sparkles size={16} />
            </span>
            <span className="font-display text-lg font-bold text-[#1a2927]">
              skill<span className="text-[#ef6d52]">connect</span>
            </span>
          </div>

          <p className="text-xs text-[#60706a]">
            Standardized Skills Architecture · Centralized Assessments & Diagnostic Mentoring
          </p>

          <div className="flex items-center gap-5 text-xs font-semibold text-[#60706a]">
            <Link href="/login" className="transition hover:text-[#1a2927]">
              Sign In
            </Link>
            <Link href="/academician/assessments" className="transition hover:text-[#1a2927]">
              Mentor Assessments
            </Link>
            <Link href="/admin/assessments" className="transition hover:text-[#1a2927]">
              Admin Creation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
