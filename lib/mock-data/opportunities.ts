export type OpportunityStatus = "Pending Approval" | "Live" | "Expired" | "Rejected" | "Draft";
export type OpportunityType = "Internship" | "Full-Time" | "Apprenticeship";

export interface Company {
  id: string;
  name: string;
  industry: string;
  logo: string;
}

export interface Opportunity {
  id: string;
  title: string;
  company: Company;
  type: OpportunityType;
  department: string;
  skills: string[];
  applications: number;
  deadline: string;
  status: OpportunityStatus;
  description: string;
  eligibility: string[];
  location: string;
  salary: string;
  openings: number;
  topSkills: string[];
  approvalHistory: string[];
}

export const companies: Company[] = [
  { id: "tcs", name: "TCS", industry: "Technology Services", logo: "TCS" },
  { id: "infosys", name: "Infosys", industry: "IT Consulting", logo: "INF" },
  { id: "accenture", name: "Accenture", industry: "Technology Consulting", logo: "ACN" },
  { id: "wipro", name: "Wipro", industry: "IT Services", logo: "WIP" },
  { id: "google", name: "Google", industry: "Internet & Software", logo: "GOO" },
  { id: "microsoft", name: "Microsoft", industry: "Cloud Software", logo: "MS" },
  { id: "amazon", name: "Amazon", industry: "E-commerce & Cloud", logo: "AMZ" },
  { id: "jio", name: "Jio", industry: "Telecommunications", logo: "JIO" },
  { id: "lnt", name: "L&T", industry: "Engineering & Construction", logo: "L&T" },
  { id: "capgemini", name: "Capgemini", industry: "Digital Services", logo: "CAP" },
];

const seeds: Array<[string, number, OpportunityType, string, string[], number, string, OpportunityStatus, string, string, number]> = [
  ["Graduate Software Engineer", 0, "Full-Time", "Engineering", ["Java", "SQL", "Git"], 486, "Sep 28, 2026", "Live", "₹8.5 LPA", "Bengaluru", 12],
  ["Cloud Engineering Intern", 1, "Internship", "Cloud & DevOps", ["AWS", "Docker", "Python"], 214, "Sep 14, 2026", "Pending Approval", "₹35,000/mo", "Hyderabad", 8],
  ["Associate Data Analyst", 2, "Full-Time", "Data & Analytics", ["Python", "SQL", "Power BI"], 352, "Oct 04, 2026", "Live", "₹7.2 LPA", "Mumbai", 10],
  ["Frontend Developer Intern", 3, "Internship", "Product Engineering", ["React", "JavaScript", "TypeScript"], 198, "Sep 20, 2026", "Live", "₹28,000/mo", "Pune", 6],
  ["UX Research Apprentice", 4, "Apprenticeship", "Design", ["UI/UX", "Communication", "Data Analysis"], 91, "Sep 18, 2026", "Pending Approval", "₹42,000/mo", "Bengaluru", 4],
  ["Software Development Engineer", 5, "Full-Time", "Engineering", ["C++", "Azure", "Git"], 622, "Oct 12, 2026", "Live", "₹18.5 LPA", "Noida", 15],
  ["Machine Learning Intern", 6, "Internship", "Applied Science", ["Python", "Machine Learning", "SQL"], 407, "Sep 30, 2026", "Live", "₹55,000/mo", "Bengaluru", 7],
  ["Product Operations Trainee", 7, "Apprenticeship", "Operations", ["Communication", "Teamwork", "Tableau"], 128, "Sep 10, 2026", "Expired", "₹30,000/mo", "Mumbai", 5],
  ["Embedded Systems Engineer", 8, "Full-Time", "Engineering", ["C++", "Android", "Git"], 74, "Oct 20, 2026", "Draft", "₹9.8 LPA", "Chennai", 5],
  ["DevOps Platform Engineer", 9, "Full-Time", "Cloud & DevOps", ["Kubernetes", "Docker", "AWS"], 289, "Sep 25, 2026", "Pending Approval", "₹12.5 LPA", "Pune", 8],
  ["Security Analyst Intern", 0, "Internship", "Cybersecurity", ["Cybersecurity", "Python", "Communication"], 166, "Oct 01, 2026", "Live", "₹32,000/mo", "Chennai", 5],
  ["Full Stack Developer", 1, "Full-Time", "Engineering", ["Node.js", "React", "MongoDB"], 315, "Nov 02, 2026", "Live", "₹10.5 LPA", "Bengaluru", 9],
  ["Business Intelligence Analyst", 2, "Full-Time", "Data & Analytics", ["Tableau", "SQL", "Data Analysis"], 231, "Sep 22, 2026", "Rejected", "₹8.1 LPA", "Gurugram", 4],
  ["Mobile App Developer", 3, "Full-Time", "Mobile Engineering", ["Flutter", "Android", "Java"], 184, "Oct 15, 2026", "Live", "₹9.2 LPA", "Hyderabad", 6],
  ["AI Product Intern", 4, "Internship", "Artificial Intelligence", ["Generative AI", "Python", "Prompt Engineering"], 380, "Sep 26, 2026", "Pending Approval", "₹60,000/mo", "Bengaluru", 5],
  ["Technical Program Associate", 5, "Full-Time", "Program Management", ["Leadership", "Communication", "Azure"], 143, "Oct 08, 2026", "Live", "₹11.0 LPA", "Noida", 3],
  ["Cloud Support Apprentice", 6, "Apprenticeship", "Cloud Operations", ["AWS", "Linux", "Communication"], 117, "Sep 29, 2026", "Draft", "₹27,000/mo", "Hyderabad", 10],
  ["Product Designer", 7, "Full-Time", "Design", ["UI/UX", "Figma", "Teamwork"], 205, "Oct 25, 2026", "Live", "₹13.5 LPA", "Mumbai", 3],
  ["Site Reliability Engineer", 8, "Full-Time", "Platform Engineering", ["DevOps", "Kubernetes", "Python"], 159, "Sep 19, 2026", "Live", "₹14.8 LPA", "Chennai", 4],
  ["Digital Transformation Associate", 9, "Apprenticeship", "Consulting", ["Communication", "Data Analysis", "Leadership"], 88, "Sep 16, 2026", "Pending Approval", "₹38,000/mo", "Pune", 6],
];

export const opportunities: Opportunity[] = seeds.map(([title, companyIndex, type, department, skills, applications, deadline, status, salary, location, openings], index) => ({
  id: `opportunity-${index + 1}`,
  title,
  company: companies[companyIndex],
  type,
  department,
  skills,
  applications,
  deadline,
  status,
  description: `Join ${companies[companyIndex].name} to work on high-impact ${department.toLowerCase()} projects with experienced cross-functional teams.`,
  eligibility: ["Final-year students or graduates", "Minimum 60% academic score", "Strong communication and collaboration"],
  location,
  salary,
  openings,
  topSkills: skills.slice(0, 3),
  approvalHistory: status === "Pending Approval" ? ["Submitted by industry partner · 2 days ago", "Awaiting admin review"] : ["Reviewed by SkillConnect admin · Aug 24, 2026", status === "Rejected" ? "Changes requested from industry partner" : "Published to students"],
}));

export const opportunityKpis = [
  { title: "Active Opportunities", value: "94", trend: "+8 this month", icon: "briefcase", accent: "bg-indigo-600" },
  { title: "Pending Approval", value: "5", trend: "2 submitted today", icon: "clock", accent: "bg-amber-500" },
  { title: "Expired Opportunities", value: "12", trend: "3 require archive", icon: "archive", accent: "bg-slate-500" },
  { title: "Applications Received", value: "8,942", trend: "+14.6% this quarter", icon: "users", accent: "bg-emerald-600" },
];