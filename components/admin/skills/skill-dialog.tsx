"use client";

import { useState } from "react";
import { Pencil, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import type { Skill, SkillCategory } from "@/lib/mock-data/skills";

type SkillDialogProps = { mode: "details" | "form"; skill?: Skill; open: boolean; onOpenChange: (open: boolean) => void; onSave?: (skill: Skill) => void };

const emptySkill: Skill = { id: "new-skill", name: "", category: "Technical", demandScore: 50, proficiencyScore: 50, studentsTagged: 0, companiesDemanding: 0, status: "Active", description: "", emerging: false, inDemand: false, active: true, growth: 0, relatedAssessments: [], relatedOpportunities: [], topCompanies: [], lastUpdated: "Today" };

export function SkillDialog({ mode, skill, open, onOpenChange, onSave }: SkillDialogProps) {
  const [draft, setDraft] = useState<Skill | null>(skill ?? (mode === "form" ? emptySkill : null));
  if (mode === "details" && skill) return <DetailsDialog skill={skill} open={open} onOpenChange={onOpenChange} />;
  if (mode !== "form") return null;

  const current = draft ?? emptySkill;
  const update = (patch: Partial<Skill>) => setDraft({ ...current, ...patch });
  const submit = (event: React.FormEvent) => { event.preventDefault(); onSave?.({ ...current, status: current.active ? (current.emerging ? "Emerging" : current.inDemand ? "In Demand" : "Active") : "Deprecated" }); onOpenChange(false); };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl"><DialogHeader><DialogTitle>{skill ? "Edit skill" : "Add skill"}</DialogTitle><DialogDescription>Maintain catalogue metadata and readiness signals.</DialogDescription></DialogHeader>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2"><label className="space-y-1.5 text-sm font-medium">Skill name<Input required value={current.name} onChange={(e) => update({ name: e.target.value })} placeholder="e.g. Python" /></label><label className="space-y-1.5 text-sm font-medium">Category<select className="h-10 w-full rounded-xl border border-line bg-white px-3 text-sm" value={current.category} onChange={(e) => update({ category: e.target.value as SkillCategory })}><option>Technical</option><option>Soft Skills</option><option>Domain</option><option>Emerging</option></select></label></div>
        <label className="block space-y-1.5 text-sm font-medium">Description<textarea className="min-h-24 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300" value={current.description} onChange={(e) => update({ description: e.target.value })} placeholder="Describe where this skill is used." /></label>
        <label className="block space-y-1.5 text-sm font-medium">Demand level<select className="h-10 w-full rounded-xl border border-line bg-white px-3 text-sm" value={current.demandScore >= 85 ? "High" : current.demandScore >= 65 ? "Medium" : "Low"} onChange={(e) => update({ demandScore: e.target.value === "High" ? 90 : e.target.value === "Medium" ? 70 : 45 })}><option>High</option><option>Medium</option><option>Low</option></select></label>
        <div className="grid gap-3 sm:grid-cols-3">{([["emerging", "Emerging"], ["inDemand", "In Demand"], ["active", "Active"]] as const).map(([key, label]) => <label key={key} className="flex items-center gap-2 rounded-xl border border-line p-3 text-sm"><input type="checkbox" checked={current[key]} onChange={(e) => update({ [key]: e.target.checked })} className="h-4 w-4 accent-indigo-600" />{label}</label>)}</div>
        <DialogFooter><Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button><Button type="submit"><Pencil className="h-4 w-4" />Save skill</Button></DialogFooter>
      </form>
    </DialogContent></Dialog>
  );
}

function DetailsDialog({ skill, open, onOpenChange }: { skill: Skill; open: boolean; onOpenChange: (open: boolean) => void }) {
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl"><DialogHeader><div className="flex items-start justify-between gap-4"><div><DialogTitle>{skill.name}</DialogTitle><DialogDescription className="mt-1">{skill.category} skill profile</DialogDescription></div><Badge variant={skill.status === "Deprecated" ? "danger" : skill.emerging ? "info" : "success"}>{skill.status}</Badge></div></DialogHeader>
    <p className="text-sm leading-6 text-muted">{skill.description}</p><div className="grid gap-3 sm:grid-cols-4">{[["Demand score", `${skill.demandScore}%`], ["Student score", `${skill.proficiencyScore}%`], ["Students", skill.studentsTagged.toLocaleString()], ["Companies", skill.companiesDemanding.toString()]].map(([label, value]) => <div key={label} className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-muted">{label}</p><p className="mt-1 text-lg font-semibold text-ink">{value}</p></div>)}</div><div className="grid gap-5 border-t border-line pt-5 sm:grid-cols-2"><DetailList title="Related assessments" items={skill.relatedAssessments} /><DetailList title="Related opportunities" items={skill.relatedOpportunities} /><DetailList title="Growth trend" items={[`+${skill.growth}% this quarter`, skill.growth > 20 ? "Accelerating demand" : "Steady demand"]} /><DetailList title="Last updated" items={[skill.lastUpdated, "Catalogue metadata verified"]} /></div><div className="border-t border-line pt-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Top companies requesting this skill</p><div className="mt-3 flex flex-wrap gap-2">{skill.topCompanies.map((company) => <span key={company} className="rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink">{company}</span>)}</div></div><Button variant="outline" className="sm:hidden" onClick={() => onOpenChange(false)}><X className="h-4 w-4" />Close</Button>
  </DialogContent></Dialog>;
}

function DetailList({ title, items }: { title: string; items: string[] }) { return <div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{title}</p><ul className="mt-2 space-y-1 text-sm text-ink">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>; }