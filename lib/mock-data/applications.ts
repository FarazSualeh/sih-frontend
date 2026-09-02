export type ApplicationStage = "Applied" | "Under Review" | "Shortlisted" | "Interview Scheduled" | "Selected" | "Placed" | "Rejected";
export type PlacementStatus = "Seeking" | "In Process" | "Placed" | "Not Selected";

export interface Application {
  id: string;
  studentName: string;
  studentInitials: string;
  department: string;
  opportunity: string;
  company: string;
  readinessScore: number;
  appliedDate: string;
  stage: ApplicationStage;
  placementStatus: PlacementStatus;
  resumeStatus: string;
  topSkills: string[];
  skillGaps: string[];
  assessmentScores: { name: string; score: number }[];
  timeline: string[];
  interviewFeedback: string;
  recommendationScore: number;
}

const names = ["Aarav Sharma", "Ishita Patel", "Rohan Mehta", "Ananya Singh", "Kabir Rao", "Meera Nair", "Arjun Menon", "Diya Kapoor", "Vivaan Shah", "Sara Thomas", "Aditya Iyer", "Nisha Verma", "Reyansh Das", "Kavya Joshi", "Ayaan Khan", "Tara Bhat", "Neil Fernandes", "Maya Reddy", "Dev Malhotra", "Kiara Bose", "Atharv Gupta", "Riya Kulkarni", "Sahil Jain", "Zoya Ali", "Manav Sethi", "Pihu Roy", "Yash Agarwal", "Ira Deshmukh", "Vihaan Sen", "Aditi Rao"];
const stages: ApplicationStage[] = ["Applied", "Under Review", "Shortlisted", "Interview Scheduled", "Selected", "Placed", "Rejected"];
const departments = ["Computer Science", "Information Technology", "Data Science", "Electronics", "Business Analytics"];
const opportunitiesByStage = ["Graduate Software Engineer", "Cloud Engineering Intern", "Associate Data Analyst", "Frontend Developer Intern", "Machine Learning Intern"];

export const applications: Application[] = names.map((studentName, index) => {
  const stage = stages[index % stages.length];
  const readinessScore = 62 + ((index * 7) % 35);
  return {
    id: `application-${index + 1}`,
    studentName,
    studentInitials: studentName.split(" ").map((part) => part[0]).join(""),
    department: departments[index % departments.length],
    opportunity: opportunitiesByStage[index % opportunitiesByStage.length],
    company: ["TCS", "Infosys", "Accenture", "Google", "Amazon"][index % 5],
    readinessScore,
    appliedDate: `Aug ${String(3 + (index % 25)).padStart(2, "0")}, 2026`,
    stage,
    placementStatus: stage === "Placed" ? "Placed" : stage === "Rejected" ? "Not Selected" : stage === "Selected" ? "In Process" : "Seeking",
    resumeStatus: index % 5 === 0 ? "Needs review" : "Verified",
    topSkills: [["Python", "SQL", "Communication"], ["React", "TypeScript", "Git"], ["AWS", "Docker", "Java"], ["Machine Learning", "Python", "Tableau"]][index % 4],
    skillGaps: [["System design", "Kubernetes"], ["Public speaking"], ["Data storytelling", "Power BI"], ["Cloud architecture"]][index % 4],
    assessmentScores: [{ name: "Technical readiness", score: readinessScore }, { name: "Communication", score: 70 + (index % 25) }, { name: "Problem solving", score: 68 + ((index * 3) % 28) }],
    timeline: [`Applied · Aug ${String(3 + (index % 25)).padStart(2, "0")}`, index > 1 ? "Profile reviewed · Aug 22" : "Awaiting first review", stage === "Applied" ? "Next: recruiter review" : `${stage} · Aug 28`],
    interviewFeedback: stage === "Interview Scheduled" || stage === "Selected" || stage === "Placed" ? "Strong problem framing and clear project ownership." : "Interview feedback will appear after the next stage.",
    recommendationScore: Math.min(99, readinessScore + 4),
  };
});

export const applicationFunnel = [
  { label: "Applications", value: "8,942", conversion: "100%", icon: "inbox" },
  { label: "Shortlisted", value: "4,250", conversion: "47.5%", icon: "list" },
  { label: "Interviews", value: "2,315", conversion: "25.9%", icon: "calendar" },
  { label: "Selected", value: "1,388", conversion: "15.5%", icon: "check" },
  { label: "Placed", value: "1,098", conversion: "12.3%", icon: "award" },
];

export const companyInsights = [
  { company: "TCS", received: 1840, shortlisted: 820, interviews: 446, offers: 218, acceptance: "78%" },
  { company: "Infosys", received: 1420, shortlisted: 690, interviews: 382, offers: 184, acceptance: "81%" },
  { company: "Accenture", received: 1180, shortlisted: 560, interviews: 314, offers: 162, acceptance: "76%" },
  { company: "Google", received: 486, shortlisted: 164, interviews: 82, offers: 38, acceptance: "92%" },
  { company: "Amazon", received: 762, shortlisted: 312, interviews: 174, offers: 96, acceptance: "84%" },
];