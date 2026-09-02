export type SkillStatus = "Active" | "Emerging" | "In Demand" | "Deprecated";
export type SkillCategory = "Technical" | "Soft Skills" | "Domain" | "Emerging";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  demandScore: number;
  proficiencyScore: number;
  studentsTagged: number;
  companiesDemanding: number;
  status: SkillStatus;
  description: string;
  emerging: boolean;
  inDemand: boolean;
  active: boolean;
  growth: number;
  relatedAssessments: string[];
  relatedOpportunities: string[];
  topCompanies: string[];
  lastUpdated: string;
}

const descriptions: Record<string, string> = {
  Python: "A versatile language used across web development, automation, data science, and artificial intelligence.",
  React: "A component-based library for building responsive, high-performance web interfaces.",
  "Generative AI": "Techniques and tools for building systems that create text, images, code, and other content.",
  Communication: "The ability to express ideas clearly, listen actively, and collaborate across teams.",
};

const skillSeeds: Array<[string, SkillCategory, number, number, number, number, SkillStatus, boolean]> = [
  ["Python", "Technical", 96, 74, 1840, 142, "In Demand", false],
  ["Java", "Technical", 82, 68, 1320, 108, "Active", false],
  ["React", "Technical", 91, 78, 1650, 126, "In Demand", false],
  ["Next.js", "Technical", 86, 66, 920, 88, "Active", false],
  ["SQL", "Technical", 94, 81, 2040, 151, "In Demand", false],
  ["MongoDB", "Technical", 76, 63, 980, 74, "Active", false],
  ["Docker", "Technical", 88, 61, 1180, 104, "In Demand", false],
  ["Kubernetes", "Technical", 84, 49, 640, 93, "Emerging", true],
  ["AWS", "Domain", 95, 57, 1270, 139, "In Demand", false],
  ["Azure", "Domain", 79, 54, 740, 82, "Active", false],
  ["Git", "Technical", 93, 86, 2260, 164, "Active", false],
  ["Node.js", "Technical", 87, 71, 1410, 112, "Active", false],
  ["Machine Learning", "Technical", 89, 52, 890, 121, "In Demand", false],
  ["Generative AI", "Emerging", 97, 43, 560, 134, "Emerging", true],
  ["Prompt Engineering", "Emerging", 92, 38, 420, 108, "Emerging", true],
  ["Cybersecurity", "Domain", 90, 58, 780, 116, "In Demand", false],
  ["UI/UX", "Domain", 78, 73, 1120, 90, "Active", false],
  ["Communication", "Soft Skills", 96, 88, 2380, 178, "Active", false],
  ["Leadership", "Soft Skills", 79, 70, 1560, 102, "Active", false],
  ["Teamwork", "Soft Skills", 84, 91, 2420, 170, "Active", false],
  ["Data Analysis", "Domain", 88, 67, 1290, 115, "In Demand", false],
  ["Tableau", "Domain", 75, 59, 760, 68, "Active", false],
  ["Power BI", "Domain", 83, 62, 840, 76, "Active", false],
  ["DevOps", "Technical", 91, 55, 720, 128, "In Demand", false],
  ["Blockchain", "Emerging", 62, 31, 280, 42, "Deprecated", true],
  ["Flutter", "Technical", 73, 57, 590, 61, "Active", false],
  ["Android", "Technical", 77, 64, 880, 73, "Active", false],
  ["JavaScript", "Technical", 94, 84, 2180, 159, "In Demand", false],
  ["TypeScript", "Technical", 90, 76, 1510, 121, "In Demand", false],
  ["C++", "Technical", 70, 60, 630, 64, "Active", false],
];

export const skills: Skill[] = skillSeeds.map(([name, category, demandScore, proficiencyScore, studentsTagged, companiesDemanding, status, emerging], index) => ({
  id: `skill-${index + 1}`,
  name,
  category,
  demandScore,
  proficiencyScore,
  studentsTagged,
  companiesDemanding,
  status,
  description: descriptions[name] ?? `${name} is a practical capability mapped to student readiness and industry opportunities on SkillConnect.`,
  emerging,
  inDemand: demandScore >= 85,
  active: status !== "Deprecated",
  growth: emerging ? 18 + index : 4 + (index % 9),
  relatedAssessments: [`${name} fundamentals`, `${name} readiness check`],
  relatedOpportunities: [`Junior ${name} Developer`, `${name} project placement`],
  topCompanies: ["Microsoft", "Deloitte", "Accenture", "Razorpay", "Amazon"].slice(0, Math.max(3, Math.min(5, Math.round(companiesDemanding / 35)))),
  lastUpdated: `Aug ${String(8 + (index % 20)).padStart(2, "0")}, 2026`,
}));

export const emergingSkills = [
  { name: "Prompt Engineering", demandScore: 92, companiesDemanding: 108, growth: 42 },
  { name: "Generative AI", demandScore: 97, companiesDemanding: 134, growth: 38 },
  { name: "AI Agents", demandScore: 88, companiesDemanding: 76, growth: 51 },
  { name: "Edge AI", demandScore: 81, companiesDemanding: 58, growth: 29 },
  { name: "Cloud Security", demandScore: 86, companiesDemanding: 97, growth: 24 },
  { name: "MLOps", demandScore: 84, companiesDemanding: 83, growth: 33 },
];

export const skillKpis = [
  { title: "Total Skills", value: "248", trend: "12 added this quarter", icon: "layers", accent: "bg-indigo-600" },
  { title: "Emerging Skills", value: "36", trend: "+18% from last quarter", icon: "sparkles", accent: "bg-sky-500" },
  { title: "In-Demand Skills", value: "82", trend: "33% of catalogue", icon: "trending", accent: "bg-emerald-600" },
  { title: "Obsolete Skills", value: "12", trend: "4 flagged for review", icon: "archive", accent: "bg-amber-500" },
];

export const skillCategories = [
  { title: "Technical Skills", count: 112, popular: "Python", coverage: 78 },
  { title: "Soft Skills", count: 54, popular: "Communication", coverage: 91 },
  { title: "Domain Skills", count: 61, popular: "Data Analysis", coverage: 64 },
  { title: "Emerging Skills", count: 21, popular: "Generative AI", coverage: 38 },
];

export const mostUsedSkills = [
  { name: "Python", usage: 92 }, { name: "JavaScript", usage: 88 }, { name: "React", usage: 83 }, { name: "SQL", usage: 79 }, { name: "Communication", usage: 96 },
];

export const industryDemand = [
  { skill: "AWS", companies: 139, demandScore: 95, studentScore: 57, gap: "High Gap" as const },
  { skill: "React", companies: 126, demandScore: 91, studentScore: 78, gap: "Medium Gap" as const },
  { skill: "Communication", companies: 178, demandScore: 96, studentScore: 88, gap: "Low Gap" as const },
  { skill: "Machine Learning", companies: 121, demandScore: 89, studentScore: 52, gap: "High Gap" as const },
  { skill: "TypeScript", companies: 121, demandScore: 90, studentScore: 76, gap: "Medium Gap" as const },
];