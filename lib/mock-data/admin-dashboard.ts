import {
  BriefcaseBusiness,
  GraduationCap,
  LayoutDashboard,
  ShieldCheck,
  Users,
  BookOpenCheck,
  Sparkles,
  BarChart3,
  FileText,
  Settings,
  ClipboardCheck,
  Building2,
  CircleDashed,
  Activity,
  Sparkle,
} from "lucide-react";

export type RoleKey = "student" | "academician" | "industry" | "admin";

export type SidebarItem = {
  title: string;
  href: string;
  icon: typeof LayoutDashboard;
  badge?: string;
};

export type KpiCardItem = {
  title: string;
  value: string;
  trend: string;
  icon: typeof Users;
  accent: string;
};

export type PendingAction = {
  title: string;
  count: number;
  description: string;
  tone: "warning" | "info" | "success";
};

export type PlatformActivityRow = {
  time: string;
  event: string;
  status: "Pending Approval" | "Completed" | "Verified" | "Active";
};

export type QuickAction = {
  label: string;
};

export const roleOptions: Array<{ value: RoleKey; label: string; route: string }> = [
  { value: "student", label: "Student", route: "/" },
  { value: "academician", label: "Academician", route: "/academician" },
  { value: "industry", label: "Industry", route: "/industry" },
  { value: "admin", label: "Admin", route: "/admin" },
];

export const sidebarItems: SidebarItem[] = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Skills", href: "/admin/skills", icon: Sparkles },
  { title: "Assessments", href: "/admin/assessments", icon: ClipboardCheck },
  { title: "Opportunities", href: "/admin/opportunities", icon: BriefcaseBusiness },
  { title: "Applications", href: "/admin/applications", icon: FileText },
  { title: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { title: "Reports", href: "/admin/reports", icon: FileText },
  { title: "Settings", href: "/admin/settings", icon: Settings },
];

export const kpiCards: KpiCardItem[] = [
  { title: "Total Students", value: "12,584", trend: "+8.5% vs last month", icon: GraduationCap, accent: "bg-coral" },
  { title: "Academicians", value: "684", trend: "+4.2% this quarter", icon: BookOpenCheck, accent: "bg-olive" },
  { title: "Registered Industries", value: "328", trend: "+12 new this week", icon: Building2, accent: "bg-sky" },
  { title: "Active Opportunities", value: "94", trend: "+9 live roles", icon: BriefcaseBusiness, accent: "bg-gold" },
  { title: "Total Applications", value: "8,942", trend: "+18.7% growth", icon: Activity, accent: "bg-rose" },
  { title: "Placement Rate", value: "72%", trend: "+3.1% uplift", icon: ShieldCheck, accent: "bg-olive" },
  { title: "Average Skill Readiness", value: "78%", trend: "+5.4% improvement", icon: Sparkle, accent: "bg-sky" },
  { title: "Students with Skill Gaps", value: "1,248", trend: "-6.2% from prior cycle", icon: CircleDashed, accent: "bg-gold" },
];

export const pendingActions: PendingAction[] = [
  { title: "Pending Industry Verification", count: 8, description: "Profiles awaiting admin approval", tone: "warning" },
  { title: "Pending Opportunity Approvals", count: 5, description: "Roles queued for review", tone: "info" },
  { title: "Assessments Running", count: 24, description: "Live evaluation cycles", tone: "success" },
];

export const platformActivity: PlatformActivityRow[] = [
  { time: "10 mins ago", event: "Infosys posted Frontend Internship", status: "Pending Approval" },
  { time: "35 mins ago", event: "152 students completed Python Assessment", status: "Completed" },
  { time: "1 hour ago", event: "TCS verified successfully", status: "Verified" },
  { time: "2 hours ago", event: "New AI & ML skill added", status: "Active" },
];

export const quickActions: QuickAction[] = [
  { label: "Verify Industries" },
  { label: "Review Opportunities" },
  { label: "Add New Skill" },
  { label: "Create Assessment" },
  { label: "Generate Report" },
];

export const adminSummary = {
  greeting: "Welcome back, Admin",
  subtitle: "Monitor SkillConnect platform performance across students, academicians, industries and placements.",
};
