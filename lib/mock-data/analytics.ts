export interface AnalyticsMetric {
  title: string;
  value: string;
  trend: string;
  description: string;
  icon: string;
  accent: string;
}

export interface DemandProficiencyPoint { skill: string; industryDemand: number; studentProficiency: number; }
export interface DepartmentPerformancePoint { department: string; placement: number; }
export interface SkillGapInsight { skill: string; studentsAffected: number; demandScore: number; }
export interface IndustryInsight { company: string; opportunities: number; applications: number; selectionRate: string; internshipConversion: string; }

export const dashboardMetrics: AnalyticsMetric[] = [
  { title: "Average Student Readiness", value: "78%", trend: "+4.8%", description: "compared with last quarter", icon: "gauge", accent: "bg-indigo-600" },
  { title: "Placement Rate", value: "72%", trend: "+6.2%", description: "of eligible students placed", icon: "briefcase", accent: "bg-emerald-600" },
  { title: "Assessment Completion", value: "84%", trend: "+3.1%", description: "completion across active assessments", icon: "clipboard", accent: "bg-sky-500" },
  { title: "Internship Conversion", value: "65%", trend: "+8.4%", description: "internships converting to offers", icon: "arrow", accent: "bg-orange-500" },
  { title: "Industry Skill Match", value: "81%", trend: "+5.7%", description: "average match to open roles", icon: "target", accent: "bg-violet-600" },
  { title: "Students With Major Skill Gaps", value: "1,248", trend: "-9.6%", description: "students needing targeted support", icon: "users", accent: "bg-rose-500" },
];

export const readinessDistribution = { labels: ["0-20", "21-40", "41-60", "61-80", "81-100"], values: [120, 560, 1890, 5200, 4814] };
export const demandVsProficiency: DemandProficiencyPoint[] = [
  { skill: "Python", industryDemand: 96, studentProficiency: 74 }, { skill: "React", industryDemand: 91, studentProficiency: 78 }, { skill: "SQL", industryDemand: 94, studentProficiency: 81 }, { skill: "AWS", industryDemand: 95, studentProficiency: 57 }, { skill: "Machine Learning", industryDemand: 89, studentProficiency: 52 }, { skill: "Communication", industryDemand: 96, studentProficiency: 88 }, { skill: "Docker", industryDemand: 88, studentProficiency: 61 }, { skill: "Power BI", industryDemand: 83, studentProficiency: 62 },
];
export const assessmentCompletion = { labels: ["Completed", "Ongoing", "Not Started"], values: [8760, 2150, 1674] };
export const placementFunnel = { labels: ["Applications", "Shortlisted", "Interviews", "Selected", "Placed"], values: [8942, 4250, 2315, 1388, 1098], conversions: ["100%", "47.5%", "25.9%", "15.5%", "12.3%"] };
export const departmentPerformance: DepartmentPerformancePoint[] = [
  { department: "AI & DS", placement: 88 }, { department: "Computer Engineering", placement: 82 }, { department: "IT", placement: 76 }, { department: "Electronics", placement: 69 }, { department: "Mechanical", placement: 61 }, { department: "Civil", placement: 54 },
];
export const monthlyApplications = { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"], values: [650, 780, 920, 1100, 1260, 1480, 1710, 1860] };
export const skillGapInsights: SkillGapInsight[] = [
  { skill: "Cloud Computing", studentsAffected: 584, demandScore: 94 }, { skill: "Machine Learning", studentsAffected: 472, demandScore: 89 }, { skill: "Docker & Kubernetes", studentsAffected: 391, demandScore: 88 },
];
export const topInDemandSkills = [
  { rank: 1, skill: "Python", demandScore: 96, companies: 142, coverage: 74, gap: 22 }, { rank: 2, skill: "React", demandScore: 91, companies: 126, coverage: 78, gap: 13 }, { rank: 3, skill: "AWS", demandScore: 95, companies: 139, coverage: 57, gap: 38 }, { rank: 4, skill: "SQL", demandScore: 94, companies: 151, coverage: 81, gap: 13 }, { rank: 5, skill: "Generative AI", demandScore: 97, companies: 134, coverage: 43, gap: 54 }, { rank: 6, skill: "Communication", demandScore: 96, companies: 178, coverage: 88, gap: 8 },
];
export const industryInsights: IndustryInsight[] = [
  { company: "TCS", opportunities: 18, applications: 1840, selectionRate: "11.8%", internshipConversion: "62%" }, { company: "Infosys", opportunities: 14, applications: 1420, selectionRate: "12.9%", internshipConversion: "68%" }, { company: "Accenture", opportunities: 12, applications: 1180, selectionRate: "13.7%", internshipConversion: "64%" }, { company: "Google", opportunities: 6, applications: 486, selectionRate: "7.8%", internshipConversion: "71%" }, { company: "Amazon", opportunities: 9, applications: 762, selectionRate: "12.6%", internshipConversion: "69%" },
];
export const aiRecommendations = [
  { title: "Increase Cloud Computing assessments", detail: "Cloud demand is 37 points ahead of average student proficiency.", tag: "Priority" }, { title: "AI & DS students have highest readiness", detail: "The department leads placement performance at 88% readiness.", tag: "Positive signal" }, { title: "Mechanical needs communication training", detail: "Communication is the most common readiness gap in Mechanical cohorts.", tag: "Action suggested" }, { title: "Prompt Engineering demand increased 32%", detail: "Add a short assessment pathway before the next hiring cycle.", tag: "Market signal" },
];
