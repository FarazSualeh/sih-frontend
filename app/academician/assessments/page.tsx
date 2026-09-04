'use client';

import React, { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Search, 
  ShieldCheck, 
  SlidersHorizontal, 
  TrendingUp, 
  Users, 
  AlertCircle,
  ArrowUpRight,
  BookOpen,
  Award
} from 'lucide-react';
import LayoutAcademician from '@/components/academician/layout-academician';
import { ASSESSMENTS_STORAGE_KEY, getStoredValue } from '@/lib/mock-data/academician';

type Question = {
  id: string;
  prompt: string;
  options: string[];
  answer: string;
  marks: number;
};

type Assessment = {
  id: string;
  title: string;
  description: string;
  skill: string;
  duration: number;
  status: 'Draft' | 'Published' | 'Completed';
  questions: Question[];
  submissions: Array<{ student: string; score: number; total: number; submittedAt: string }>;
};

const initialAssessments: Assessment[] = [
  {
    id: 'a1',
    title: 'Python Fundamentals Quiz',
    description: 'Standardized assessment covering syntax, control flow, functions, and data structures aligned with industry junior developer benchmarks.',
    skill: 'Python',
    duration: 30,
    status: 'Published',
    questions: [
      {
        id: 'q1',
        prompt: 'Which keyword is used to define a function in Python?',
        options: ['func', 'def', 'function', 'lambda'],
        answer: 'def',
        marks: 5
      },
      {
        id: 'q2',
        prompt: 'Which of the following is a Python list method to add an item at the end?',
        options: ['append()', 'insert()', 'extend()', 'add()'],
        answer: 'append()',
        marks: 5
      },
      {
        id: 'q3',
        prompt: 'What is the time complexity of dictionary lookup in average cases?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        answer: 'O(1)',
        marks: 5
      },
      {
        id: 'q4',
        prompt: 'How do you create an immutable sequence in Python?',
        options: ['list()', 'tuple()', 'dict()', 'set()'],
        answer: 'tuple()',
        marks: 5
      }
    ],
    submissions: [
      { student: 'Shahbaz Anjum', score: 8, total: 10, submittedAt: '2026-08-22' },
      { student: 'Ayesha Kadri', score: 10, total: 10, submittedAt: '2026-08-24' },
      { student: 'Tanvi Deshmukh', score: 6, total: 10, submittedAt: '2026-08-26' },
      { student: 'Rohan Mehta', score: 9, total: 10, submittedAt: '2026-08-28' }
    ]
  },
  {
    id: 'a2',
    title: 'AWS Cloud Basics & Architecture',
    description: 'Assesses foundational knowledge of cloud services, compute elasticity, security groups, and storage tiering.',
    skill: 'AWS',
    duration: 45,
    status: 'Published',
    questions: [
      {
        id: 'q5',
        prompt: 'Which AWS service is mainly used for scalable on-demand compute capacity?',
        options: ['S3', 'EC2', 'Route53', 'CloudFront'],
        answer: 'EC2',
        marks: 5
      },
      {
        id: 'q6',
        prompt: 'Which service offers durable object storage with 99.999999999% durability?',
        options: ['EBS', 'EFS', 'S3', 'Storage Gateway'],
        answer: 'S3',
        marks: 5
      },
      {
        id: 'q7',
        prompt: 'What tool allows infrastructure provisioning as declarative code on AWS?',
        options: ['AWS CloudFormation', 'CloudWatch', 'SNS', 'IAM'],
        answer: 'AWS CloudFormation',
        marks: 5
      }
    ],
    submissions: [
      { student: 'Shahbaz Anjum', score: 11, total: 15, submittedAt: '2026-08-29' },
      { student: 'Pooja Verma', score: 8, total: 15, submittedAt: '2026-08-30' },
      { student: 'Kabir Shinde', score: 14, total: 15, submittedAt: '2026-09-01' }
    ]
  },
  {
    id: 'a3',
    title: 'React & State Architecture Examination',
    description: 'Evaluates component lifecycle, hooks composition, performance re-renders, and contextual state management.',
    skill: 'React',
    duration: 40,
    status: 'Published',
    questions: [
      {
        id: 'q8',
        prompt: 'What does the useCallback hook cache between component re-renders?',
        options: ['Calculation result', 'A function definition', 'DOM node reference', 'State setter'],
        answer: 'A function definition',
        marks: 5
      },
      {
        id: 'q9',
        prompt: 'Which hook should be used for imperative mutations that must run synchronously after DOM mutations?',
        options: ['useEffect', 'useLayoutEffect', 'useInsertionEffect', 'useId'],
        answer: 'useLayoutEffect',
        marks: 5
      }
    ],
    submissions: [
      { student: 'Ayesha Kadri', score: 10, total: 10, submittedAt: '2026-08-25' },
      { student: 'Tanvi Deshmukh', score: 7, total: 10, submittedAt: '2026-08-27' }
    ]
  }
];

function AssessmentsPageInner() {
  const searchParams = useSearchParams();
  const skillParam = searchParams.get('skill') ?? '';
  
  const [assessments] = useState<Assessment[]>(() => 
    getStoredValue<Assessment[]>(ASSESSMENTS_STORAGE_KEY, initialAssessments)
  );
  
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | Assessment['status']>('All');
  const [skillFilter, setSkillFilter] = useState<string>(skillParam || 'All');
  const [selectedId, setSelectedId] = useState<string>(() => {
    const list = getStoredValue<Assessment[]>(ASSESSMENTS_STORAGE_KEY, initialAssessments);
    if (skillParam) {
      const match = list.find((a) => a.skill.toLowerCase() === skillParam.toLowerCase());
      if (match) return match.id;
    }
    return list[0]?.id ?? '';
  });

  const availableSkills = useMemo(() => {
    return Array.from(new Set(assessments.map((a) => a.skill)));
  }, [assessments]);

  const filteredAssessments = useMemo(() => {
    return assessments.filter((assessment) => {
      const matchesText = `${assessment.title} ${assessment.skill} ${assessment.description}`.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || assessment.status === statusFilter;
      const matchesSkill = skillFilter === 'All' || assessment.skill.toLowerCase() === skillFilter.toLowerCase();
      return matchesText && matchesStatus && matchesSkill;
    });
  }, [assessments, search, statusFilter, skillFilter]);

  const selectedAssessment = assessments.find((item) => item.id === selectedId) ?? filteredAssessments[0] ?? assessments[0];

  // Aggregate stats
  const totalSubmissions = useMemo(() => {
    return assessments.reduce((sum, a) => sum + a.submissions.length, 0);
  }, [assessments]);

  const overallAvgScore = useMemo(() => {
    const allSubs = assessments.flatMap((a) => a.submissions);
    if (allSubs.length === 0) return 0;
    const totalPct = allSubs.reduce((sum, s) => sum + (s.score / s.total) * 100, 0);
    return Math.round(totalPct / allSubs.length);
  }, [assessments]);

  const selectedAvgScore = useMemo(() => {
    if (!selectedAssessment || selectedAssessment.submissions.length === 0) return null;
    const totalPct = selectedAssessment.submissions.reduce((sum, s) => sum + (s.score / s.total) * 100, 0);
    return Math.round(totalPct / selectedAssessment.submissions.length);
  }, [selectedAssessment]);

  return (
    <LayoutAcademician>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
                <ShieldCheck size={13} className="text-sky-600" />
                Standardized Evaluation Hub
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--charcoal)]">
              Assessment Insights & Student Benchmarks
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
              Review standardized evaluations and diagnose cohort skill performance to identify learner gaps and recommend targeted training.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link 
              href="/academician/skill-gaps" 
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <AlertCircle size={14} className="text-amber-600" />
              Skill Gaps Analysis
            </Link>
            <Link 
              href="/academician/students" 
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--charcoal)] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
            >
              <Users size={14} />
              View Student Profiles
            </Link>
          </div>
        </div>

        {/* Centralized Assessment Governance Notice */}
        <div className="relative overflow-hidden rounded-2xl border border-sky-200/80 bg-gradient-to-r from-sky-50/90 via-indigo-50/50 to-emerald-50/40 p-4 sm:p-5">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm">
              <Award size={20} />
            </div>
            <div className="flex-1 text-sm">
              <h4 className="font-semibold text-slate-900">
                Centralized Assessment Governance & Standardized Skill Benchmarking
              </h4>
              <p className="mt-1 leading-relaxed text-slate-600">
                To guarantee objective, industry-aligned hiring readiness across all academic departments, assessments are centrally configured and standardized by SkillConnect Administrators. As an academician, you have comprehensive diagnostic access to examine question rubrics, evaluate cohort score distributions, and proactively identify student skill gaps for personalized coaching.
              </p>
            </div>
          </div>
        </div>

        {/* KPI Metrics */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Standardized Tests</span>
              <BookOpen size={16} className="text-sky-600" />
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{assessments.length}</div>
            <p className="mt-1 text-xs text-slate-500">Verified institutional tests</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Evaluated Cohorts</span>
              <Users size={16} className="text-emerald-600" />
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{totalSubmissions}</div>
            <p className="mt-1 text-xs text-slate-500">Total student submissions</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Average Proficiency</span>
              <TrendingUp size={16} className="text-indigo-600" />
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{overallAvgScore}%</div>
            <p className="mt-1 text-xs text-emerald-600 font-medium">Above 65% benchmark</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Active Coverage</span>
              <CheckCircle2 size={16} className="text-teal-600" />
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{availableSkills.length} Skills</div>
            <p className="mt-1 text-xs text-slate-500">High-demand industry domains</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
          <div className="relative min-w-[260px] flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search assessment title or skill..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2 pl-9 pr-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <SlidersHorizontal size={14} />
              <span>Filters:</span>
            </div>

            <select
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              <option value="All">All Skills</option>
              {availableSkills.map((sk) => (
                <option key={sk} value={sk}>{sk}</option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'All' | Assessment['status'])}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              <option value="All">All Statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Main Content Layout: Assessment Catalog + Detailed Diagnostic Insights */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.3fr]">
          {/* Assessment List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-semibold text-slate-800">
                Standardized Assessments ({filteredAssessments.length})
              </h3>
              <span className="text-xs text-slate-500">Select to inspect insights</span>
            </div>

            {filteredAssessments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
                No assessments found matching your filter criteria.
              </div>
            ) : (
              filteredAssessments.map((item) => {
                const isSelected = selectedAssessment?.id === item.id;
                const subsCount = item.submissions.length;
                const avg = subsCount > 0
                  ? Math.round(item.submissions.reduce((sum, s) => sum + (s.score / s.total) * 100, 0) / subsCount)
                  : null;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 ${
                      isSelected
                        ? 'border-sky-400 bg-sky-50/70 shadow-sm ring-2 ring-sky-200/50'
                        : 'border-[var(--border)] bg-white hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800">
                            {item.skill}
                          </span>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                            {item.status}
                          </span>
                        </div>
                        <h4 className="mt-2 text-base font-semibold text-slate-900">
                          {item.title}
                        </h4>
                      </div>

                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <Clock size={13} />
                          {item.duration} mins
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 line-clamp-2 text-xs text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-3.5 flex flex-wrap items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                      <span>{item.questions.length} Standardized Questions</span>
                      <div className="flex items-center gap-2">
                        {avg !== null ? (
                          <span className="font-semibold text-slate-800">
                            Avg Score: <strong className="text-emerald-700">{avg}%</strong> ({subsCount} students)
                          </span>
                        ) : (
                          <span className="text-slate-400">No submissions yet</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Detailed Diagnostic Panel */}
          {selectedAssessment && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-800">
                        {selectedAssessment.skill} Standard
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                        {selectedAssessment.status}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {selectedAssessment.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {selectedAssessment.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2">
                    <Link
                      href={`/academician/students?skill=${encodeURIComponent(selectedAssessment.skill)}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700 transition hover:bg-sky-100"
                    >
                      <span>Cohort Learners</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      href={`/academician/skill-gaps`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800 transition hover:bg-amber-100"
                    >
                      <span>Skill Gaps</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Performance Diagnostic Signal */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3.5">
                    <span className="text-xs font-medium text-slate-500">Benchmark Duration</span>
                    <div className="mt-1 text-lg font-bold text-slate-800">{selectedAssessment.duration} mins</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3.5">
                    <span className="text-xs font-medium text-slate-500">Total Questions</span>
                    <div className="mt-1 text-lg font-bold text-slate-800">{selectedAssessment.questions.length} items</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3.5">
                    <span className="text-xs font-medium text-slate-500">Cohort Average</span>
                    <div className="mt-1 text-lg font-bold text-emerald-600">
                      {selectedAvgScore !== null ? `${selectedAvgScore}%` : 'N/A'}
                    </div>
                  </div>
                </div>

                {selectedAvgScore !== null && (
                  <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-xs text-indigo-900">
                    <div className="flex items-center gap-1.5 font-semibold text-indigo-950">
                      <TrendingUp size={15} />
                      Diagnostic Gap Insight
                    </div>
                    <p className="mt-1 text-indigo-800 leading-relaxed">
                      Learners average {selectedAvgScore}% on standardized {selectedAssessment.skill} tests. Students scoring below 70% should be assigned remediation modules in the Skill Gap tracker to satisfy upcoming placement qualification criteria.
                    </p>
                  </div>
                )}

                {/* Question Bank Preview */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-slate-900 flex items-center gap-2 text-sm">
                      <HelpCircle size={16} className="text-sky-600" />
                      Standardized Question Structure & Criteria
                    </h4>
                    <span className="text-xs text-slate-400">Admin Curated</span>
                  </div>

                  <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                    {selectedAssessment.questions.map((question, idx) => (
                      <div key={question.id} className="rounded-xl border border-slate-200 bg-slate-50/40 p-3.5">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-slate-900">
                            {idx + 1}. {question.prompt}
                          </p>
                          <span className="shrink-0 rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-600 shadow-2xs">
                            {question.marks} marks
                          </span>
                        </div>

                        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {question.options.map((opt) => {
                            const isCorrect = opt === question.answer;
                            return (
                              <div
                                key={opt}
                                className={`rounded-lg border px-2.5 py-1.5 ${
                                  isCorrect 
                                    ? 'border-emerald-200 bg-emerald-50 font-medium text-emerald-800' 
                                    : 'border-slate-200 bg-white text-slate-600'
                                }`}
                              >
                                <span>{opt}</span>
                                {isCorrect && <span className="ml-1.5 text-[10px] font-bold text-emerald-600">(Benchmark Answer)</span>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Submissions & Performance Analysis */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-slate-900 flex items-center gap-2 text-sm">
                      <Users size={16} className="text-emerald-600" />
                      Student Cohort Results & Diagnostics
                    </h4>
                    <span className="text-xs text-slate-500">
                      {selectedAssessment.submissions.length} Submissions
                    </span>
                  </div>

                  {selectedAssessment.submissions.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs text-slate-500">
                      No student submissions recorded yet for this evaluation.
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {selectedAssessment.submissions.map((sub, idx) => {
                        const pct = Math.round((sub.score / sub.total) * 100);
                        const isProficient = pct >= 70;

                        return (
                          <div
                            key={`${sub.student}-${idx}`}
                            className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-sm text-slate-900">{sub.student}</span>
                                <span
                                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                    isProficient 
                                      ? 'bg-emerald-100 text-emerald-800' 
                                      : 'bg-amber-100 text-amber-800'
                                  }`}
                                >
                                  {isProficient ? 'Proficient' : 'Needs Support'}
                                </span>
                              </div>
                              <span className="text-xs text-slate-400">Completed on {sub.submittedAt}</span>
                            </div>

                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <div className="text-sm font-bold text-slate-900">
                                  {sub.score} / {sub.total} <span className="text-xs font-normal text-slate-500">({pct}%)</span>
                                </div>
                                <div className="mt-1 h-1.5 w-28 rounded-full bg-slate-100">
                                  <div
                                    className={`h-1.5 rounded-full ${isProficient ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                              </div>

                              <Link
                                href={`/academician/students?search=${encodeURIComponent(sub.student)}`}
                                className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50"
                              >
                                Profile
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </LayoutAcademician>
  );
}

export default function AssessmentsPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-slate-500">Loading assessments...</div>}>
      <AssessmentsPageInner />
    </Suspense>
  );
}
