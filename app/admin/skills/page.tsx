"use client";

import { Archive, ChevronLeft, ChevronRight, Layers3, Plus, Search, Sparkles, TrendingUp, X } from "lucide-react";
import { useMemo, useState } from "react";

import { CategoryCard } from "@/components/admin/skills/category-card";
import { DemandBadge } from "@/components/admin/skills/demand-badge";
import { SkillCard } from "@/components/admin/skills/skill-card";
import { SkillDialog } from "@/components/admin/skills/skill-dialog";
import { SkillsTable } from "@/components/admin/skills/skills-table";
import { ProficiencyBar } from "@/components/admin/skills/proficiency-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { industryDemand, mostUsedSkills, emergingSkills, skillCategories, skillKpis, skills, type Skill } from "@/lib/mock-data/skills";

export default function AdminSkillsPage() {
  const [catalogue, setCatalogue] = useState(skills);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [status, setStatus] = useState("All statuses");
  const [demand, setDemand] = useState("All demand levels");
  const [sort, setSort] = useState("Demand");
  const [page, setPage] = useState(1);
  const [dialog, setDialog] = useState<"details" | "form" | null>(null);
  const [selected, setSelected] = useState<Skill | undefined>();

  const filtered = useMemo(() => [...catalogue].filter((skill) => skill.name.toLowerCase().includes(search.toLowerCase()) && (category === "All categories" || skill.category === category) && (status === "All statuses" || skill.status === status) && (demand === "All demand levels" || (demand === "High" ? skill.demandScore >= 85 : demand === "Medium" ? skill.demandScore >= 65 && skill.demandScore < 85 : skill.demandScore < 65))).sort((a, b) => sort === "Name" ? a.name.localeCompare(b.name) : sort === "Usage" ? b.studentsTagged - a.studentsTagged : b.demandScore - a.demandScore), [catalogue, search, category, status, demand, sort]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / 10));
  const visibleSkills = filtered.slice((page - 1) * 10, page * 10);
  const openDialog = (kind: "details" | "form", skill?: Skill) => { setSelected(skill); setDialog(kind); };
  const resetFilters = () => { setSearch(""); setCategory("All categories"); setStatus("All statuses"); setDemand("All demand levels"); setSort("Demand"); setPage(1); };
  const saveSkill = (skill: Skill) => setCatalogue((current) => current.some((item) => item.id === skill.id) ? current.map((item) => item.id === skill.id ? skill : item) : [skill, ...current]);
  const action = (skill: Skill, selectedAction: string) => { if (selectedAction === "Disable Skill") setCatalogue((current) => current.map((item) => item.id === skill.id ? { ...item, active: false, status: "Deprecated" } : item)); if (selectedAction === "Mark In Demand") setCatalogue((current) => current.map((item) => item.id === skill.id ? { ...item, inDemand: true, status: "In Demand" } : item)); if (selectedAction === "Mark Emerging") setCatalogue((current) => current.map((item) => item.id === skill.id ? { ...item, emerging: true, status: "Emerging" } : item)); };
  const iconMap = { layers: Layers3, sparkles: Sparkles, trending: TrendingUp, archive: Archive };

  return (
    <div className="mx-auto max-w-7xl space-y-8 pb-10">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-indigo-600">Administration / Catalogue</p><h1 className="mt-2 font-display text-4xl font-semibold tracking-[-0.06em] text-ink">Skills Management</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Manage platform skills, monitor demand, identify skill gaps, and maintain the SkillConnect skill catalogue.</p></div><Button onClick={() => openDialog("form")}><Plus className="h-4 w-4" />Add Skill</Button></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{skillKpis.map((kpi) => { const Icon = iconMap[kpi.icon as keyof typeof iconMap]; return <Card key={kpi.title} className="p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{kpi.title}</p><p className="mt-3 text-3xl font-semibold tracking-tight text-ink">{kpi.value}</p><p className="mt-2 text-xs font-medium text-emerald-600">{kpi.trend}</p></div><div className={`rounded-xl p-3 text-white ${kpi.accent}`}><Icon className="h-5 w-5" /></div></div></Card>; })}</div>
      <Card><CardHeader className="border-b border-line"><div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center"><div><CardTitle>Skill catalogue</CardTitle><p className="mt-1 text-sm text-muted">{filtered.length} skills matching your filters</p></div><div className="relative w-full lg:w-72"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" /><Input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Search skills..." className="pl-9" /></div></div><div className="flex flex-wrap gap-2 pt-4"><FilterSelect value={category} onChange={setCategory} options={["All categories", "Technical", "Soft Skills", "Domain", "Emerging"]} /><FilterSelect value={status} onChange={setStatus} options={["All statuses", "Active", "Emerging", "In Demand", "Deprecated"]} /><FilterSelect value={demand} onChange={setDemand} options={["All demand levels", "High", "Medium", "Low"]} /><FilterSelect value={sort} onChange={setSort} options={["Demand", "Usage", "Name"]} /><Button variant="ghost" size="sm" onClick={resetFilters}><X className="h-3.5 w-3.5" />Reset Filters</Button></div></CardHeader><CardContent className="p-0"><SkillsTable skills={visibleSkills} onView={(skill) => openDialog("details", skill)} onEdit={(skill) => openDialog("form", skill)} onAction={action} /><div className="flex items-center justify-between border-t border-line px-5 py-4"><p className="text-xs text-muted">Showing {filtered.length ? (page - 1) * 10 + 1 : 0}-{Math.min(page * 10, filtered.length)} of {filtered.length}</p><div className="flex items-center gap-2"><Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage((current) => current - 1)} aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button><span className="text-xs font-semibold text-muted">Page {page} of {pageCount}</span><Button variant="outline" size="icon" disabled={page === pageCount} onClick={() => setPage((current) => current + 1)} aria-label="Next page"><ChevronRight className="h-4 w-4" /></Button></div></div></CardContent></Card>
      <section><SectionTitle eyebrow="Catalogue structure" title="Skill categories" /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{skillCategories.map((item) => <CategoryCard key={item.title} {...item} />)}</div></section>
      <section><SectionTitle eyebrow="Student readiness" title="Most used skills" /><Card className="p-5"><div className="grid gap-5 md:grid-cols-5">{mostUsedSkills.map((item) => <div key={item.name}><div className="flex justify-between text-sm"><span className="font-semibold text-ink">{item.name}</span><span className="font-semibold text-indigo-700">{item.usage}%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${item.usage}%` }} /></div></div>)}</div></Card></section>
      <section><SectionTitle eyebrow="Market intelligence" title="Industry skill demand" /><Card className="p-0"><div className="overflow-x-auto"><table className="w-full text-sm"><thead className="border-b border-line bg-slate-50"><tr>{["Skill", "Companies demanding", "Demand score", "Average student score", "Gap indicator"].map((heading) => <th key={heading} className="px-5 py-3 text-left text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">{heading}</th>)}</tr></thead><tbody>{industryDemand.map((item) => <tr key={item.skill} className="border-b border-line last:border-0"><td className="px-5 py-4 font-semibold text-ink">{item.skill}</td><td className="px-5 py-4 text-muted">{item.companies}</td><td className="px-5 py-4 font-semibold text-indigo-700">{item.demandScore}</td><td className="px-5 py-4"><ProficiencyBar value={item.studentScore} /></td><td className="px-5 py-4"><DemandBadge label={item.gap} /></td></tr>)}</tbody></table></div></Card></section>
      <section><SectionTitle eyebrow="Watchlist" title="Emerging skills spotlight" /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{emergingSkills.map((item) => <SkillCard key={item.name} {...item} />)}</div></section>
      {dialog && <SkillDialog key={`${dialog}-${selected?.id ?? "new"}`} mode={dialog} skill={selected} open={Boolean(dialog)} onOpenChange={(open) => !open && setDialog(null)} onSave={saveSkill} />}
    </div>
  );
}

function FilterSelect({ value, onChange, options }: { value: string; onChange: (value: string) => void; options: string[] }) { return <select value={value} onChange={(e) => { onChange(e.target.value); }} className="h-9 rounded-xl border border-line bg-white px-3 text-xs font-medium text-ink outline-none focus:ring-2 focus:ring-indigo-300">{options.map((option) => <option key={option}>{option}</option>)}</select>; }
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="mb-4"><p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-indigo-600">{eyebrow}</p><h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">{title}</h2></div>; }
