export type StudentStatus = "Active" | "Inactive" | "Suspended";
export type AcademicianStatus = "Active" | "Inactive" | "Suspended";
export type IndustryVerification = "Verified" | "Pending" | "Rejected";
export type IndustryAccountStatus = "Active" | "Disabled";
export type RoleAccessLevel = "Full Admin" | "Faculty" | "Department Coordinator";

export interface Student {
  id: string;
  name: string;
  email: string;
  department: string;
  semester: string;
  readiness: number;
  applications: number;
  status: StudentStatus;
  phone: string;
  resumeUploaded: boolean;
  linkedIn: string;
  github: string;
  topSkills: string[];
  skillGaps: string[];
  assessmentCompletion: number;
  placementStatus: string;
  avatar: string;
}

export interface Academician {
  id: string;
  name: string;
  department: string;
  email: string;
  studentsMentored: number;
  assessmentsCreated: number;
  status: AcademicianStatus;
  accessLevel: RoleAccessLevel;
  phone: string;
  avatar: string;
}

export interface Industry {
  id: string;
  name: string;
  domain: string;
  opportunitiesPosted: number;
  verificationStatus: IndustryVerification;
  accountStatus: IndustryAccountStatus;
  logo: string;
  description: string;
  contactPerson: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  verificationHistory: string[];
  activeInternships: number;
  applicationsReceived: number;
}

export const students: Student[] = [
  { id: "STU-001", name: "Aarav Sharma", email: "aarav.sharma@skillconnect.edu", department: "Computer Science", semester: "7th", readiness: 88, applications: 14, status: "Active", phone: "+91 98765 12345", resumeUploaded: true, linkedIn: "linkedin.com/in/aaravsharma", github: "github.com/aaravsharma", topSkills: ["React", "Node.js", "DSA"], skillGaps: ["System Design", "Cloud Security"], assessmentCompletion: 92, placementStatus: "Placed", avatar: "AS" },
  { id: "STU-002", name: "Meera Iyer", email: "meera.iyer@skillconnect.edu", department: "Information Technology", semester: "6th", readiness: 81, applications: 11, status: "Active", phone: "+91 99887 66554", resumeUploaded: true, linkedIn: "linkedin.com/in/meeraiyer", github: "github.com/meeraiyer", topSkills: ["Python", "SQL", "Tableau"], skillGaps: ["Machine Learning", "System Design"], assessmentCompletion: 88, placementStatus: "Interviewing", avatar: "MI" },
  { id: "STU-003", name: "Rohit Nair", email: "rohit.nair@skillconnect.edu", department: "Electronics", semester: "8th", readiness: 76, applications: 9, status: "Inactive", phone: "+91 97454 88921", resumeUploaded: false, linkedIn: "linkedin.com/in/rohitnair", github: "github.com/rohitnair", topSkills: ["C++", "Embedded C", "IoT"], skillGaps: ["Communication", "Product Design"], assessmentCompletion: 73, placementStatus: "Open to work", avatar: "RN" },
  { id: "STU-004", name: "Sana Khan", email: "sana.khan@skillconnect.edu", department: "Mechanical", semester: "5th", readiness: 73, applications: 8, status: "Active", phone: "+91 96541 73421", resumeUploaded: true, linkedIn: "linkedin.com/in/sanakhan", github: "github.com/sanakhan", topSkills: ["SolidWorks", "CAD", "AutoCAD"], skillGaps: ["Data Analysis", "Lean Manufacturing"], assessmentCompletion: 70, placementStatus: "Open to work", avatar: "SK" },
  { id: "STU-005", name: "Karan Patel", email: "karan.patel@skillconnect.edu", department: "Computer Science", semester: "4th", readiness: 69, applications: 6, status: "Suspended", phone: "+91 97321 11882", resumeUploaded: true, linkedIn: "linkedin.com/in/karanpatel", github: "github.com/karanpatel", topSkills: ["Java", "Spring Boot", "Git"], skillGaps: ["DSA", "API Design"], assessmentCompletion: 65, placementStatus: "Active search", avatar: "KP" },
  { id: "STU-006", name: "Priya Desai", email: "priya.desai@skillconnect.edu", department: "Data Science", semester: "7th", readiness: 90, applications: 16, status: "Active", phone: "+91 98905 21413", resumeUploaded: true, linkedIn: "linkedin.com/in/priyadesai", github: "github.com/priyadesai", topSkills: ["Python", "ML", "SQL"], skillGaps: ["Deep Learning", "MLOps"], assessmentCompletion: 95, placementStatus: "Placed", avatar: "PD" },
  { id: "STU-007", name: "Arjun Menon", email: "arjun.menon@skillconnect.edu", department: "Electrical", semester: "6th", readiness: 74, applications: 7, status: "Active", phone: "+91 97123 77661", resumeUploaded: true, linkedIn: "linkedin.com/in/arjunmenon", github: "github.com/arjunmenon", topSkills: ["MATLAB", "Power Systems", "PLC"], skillGaps: ["Embedded Systems", "Signal Processing"], assessmentCompletion: 79, placementStatus: "Interviewing", avatar: "AM" },
  { id: "STU-008", name: "Divya Rao", email: "divya.rao@skillconnect.edu", department: "Information Technology", semester: "8th", readiness: 86, applications: 13, status: "Active", phone: "+91 98452 33241", resumeUploaded: true, linkedIn: "linkedin.com/in/divyarao", github: "github.com/divyarao", topSkills: ["JavaScript", "React", "UI Design"], skillGaps: ["Algorithms", "Backend APIs"], assessmentCompletion: 90, placementStatus: "Placed", avatar: "DR" },
  { id: "STU-009", name: "Nikhil Verma", email: "nikhil.verma@skillconnect.edu", department: "Computer Science", semester: "5th", readiness: 71, applications: 5, status: "Inactive", phone: "+91 97642 10644", resumeUploaded: false, linkedIn: "linkedin.com/in/nikhilverma", github: "github.com/nikhilverma", topSkills: ["C++", "Web Dev", "Git"], skillGaps: ["Testing", "DevOps"], assessmentCompletion: 68, placementStatus: "Open to work", avatar: "NV" },
  { id: "STU-010", name: "Tanvi Shah", email: "tanvi.shah@skillconnect.edu", department: "Civil", semester: "6th", readiness: 66, applications: 4, status: "Active", phone: "+91 98712 66594", resumeUploaded: true, linkedIn: "linkedin.com/in/tanishah", github: "github.com/tanishah", topSkills: ["AutoCAD", "Surveying", "Project Planning"], skillGaps: ["Structural Design", "Estimation"], assessmentCompletion: 63, placementStatus: "Open to work", avatar: "TS" },
  { id: "STU-011", name: "Harsh Gupta", email: "harsh.gupta@skillconnect.edu", department: "Computer Science", semester: "7th", readiness: 84, applications: 12, status: "Active", phone: "+91 98210 40391", resumeUploaded: true, linkedIn: "linkedin.com/in/harshgupta", github: "github.com/harshgupta", topSkills: ["React", "TypeScript", "Node.js"], skillGaps: ["Databases", "UI Systems"], assessmentCompletion: 86, placementStatus: "Interviewing", avatar: "HG" },
  { id: "STU-012", name: "Ishita Malhotra", email: "ishita.malhotra@skillconnect.edu", department: "Electronics", semester: "5th", readiness: 75, applications: 8, status: "Active", phone: "+91 99345 88273", resumeUploaded: true, linkedIn: "linkedin.com/in/ishitamalhotra", github: "github.com/ishitamalhotra", topSkills: ["VLSI", "Verilog", "Embedded"], skillGaps: ["PCB Design", "Testing"], assessmentCompletion: 78, placementStatus: "Interviewing", avatar: "IM" },
  { id: "STU-013", name: "Shivam Singh", email: "shivam.singh@skillconnect.edu", department: "Mechanical", semester: "8th", readiness: 82, applications: 10, status: "Active", phone: "+91 98190 00988", resumeUploaded: true, linkedIn: "linkedin.com/in/shivamsingh", github: "github.com/shivamsingh", topSkills: ["CAD", "3D Modeling", "Manufacturing"], skillGaps: ["Robotics", "Optimization"], assessmentCompletion: 85, placementStatus: "Placed", avatar: "SS" },
  { id: "STU-014", name: "Nisha Patel", email: "nisha.patel@skillconnect.edu", department: "Data Science", semester: "6th", readiness: 79, applications: 9, status: "Active", phone: "+91 98766 44618", resumeUploaded: true, linkedIn: "linkedin.com/in/nishapatel", github: "github.com/nishapatel", topSkills: ["Python", "Data Visualization", "Statistics"], skillGaps: ["Deep Learning", "Python Deployment"], assessmentCompletion: 81, placementStatus: "Open to work", avatar: "NP" },
  { id: "STU-015", name: "Yash Chawla", email: "yash.chawla@skillconnect.edu", department: "Computer Science", semester: "8th", readiness: 92, applications: 18, status: "Active", phone: "+91 98221 65431", resumeUploaded: true, linkedIn: "linkedin.com/in/yashchawla", github: "github.com/yashchawla", topSkills: ["Full Stack", "DevOps", "System Design"], skillGaps: ["AI/ML", "Security"], assessmentCompletion: 96, placementStatus: "Placed", avatar: "YC" },
  { id: "STU-016", name: "Ananya Bose", email: "ananya.bose@skillconnect.edu", department: "Information Technology", semester: "5th", readiness: 70, applications: 5, status: "Inactive", phone: "+91 97224 31992", resumeUploaded: false, linkedIn: "linkedin.com/in/ananyabose", github: "github.com/ananyabose", topSkills: ["HTML", "CSS", "SQL"], skillGaps: ["React", "Testing"], assessmentCompletion: 66, placementStatus: "Open to work", avatar: "AB" },
  { id: "STU-017", name: "Rishabh Jain", email: "rishabh.jain@skillconnect.edu", department: "Electrical", semester: "7th", readiness: 77, applications: 7, status: "Active", phone: "+91 98660 77411", resumeUploaded: true, linkedIn: "linkedin.com/in/rishabhjain", github: "github.com/rishabhjain", topSkills: ["Power Electronics", "MATLAB", "AutoCAD"], skillGaps: ["Embedded Systems", "Control Systems"], assessmentCompletion: 80, placementStatus: "Interviewing", avatar: "RJ" },
  { id: "STU-018", name: "Aksha Choudhary", email: "aksha.choudhary@skillconnect.edu", department: "Civil", semester: "8th", readiness: 83, applications: 10, status: "Active", phone: "+91 98789 43211", resumeUploaded: true, linkedIn: "linkedin.com/in/akshachoudhary", github: "github.com/akshachoudhary", topSkills: ["Surveying", "Construction Planning", "AutoCAD"], skillGaps: ["Project Finance", "GIS"], assessmentCompletion: 84, placementStatus: "Placed", avatar: "AC" },
  { id: "STU-019", name: "Neha Joshi", email: "neha.joshi@skillconnect.edu", department: "Data Science", semester: "5th", readiness: 68, applications: 4, status: "Suspended", phone: "+91 98967 88744", resumeUploaded: true, linkedIn: "linkedin.com/in/nehajoshi", github: "github.com/nehajoshi", topSkills: ["SQL", "Python", "Statistics"], skillGaps: ["Model Deployment", "Cloud ML"], assessmentCompletion: 64, placementStatus: "Open to work", avatar: "NJ" },
  { id: "STU-020", name: "Dev Kapoor", email: "dev.kapoor@skillconnect.edu", department: "Computer Science", semester: "6th", readiness: 85, applications: 12, status: "Active", phone: "+91 98111 24579", resumeUploaded: true, linkedIn: "linkedin.com/in/devkapoor", github: "github.com/devkapoor", topSkills: ["Java", "Spring Boot", "API Design"], skillGaps: ["System Design", "Testing"], assessmentCompletion: 89, placementStatus: "Interviewing", avatar: "DK" },
];

export const academicians: Academician[] = [
  { id: "FAC-001", name: "Dr. Ananya Gupta", department: "Computer Science", email: "ananya.gupta@skillconnect.edu", studentsMentored: 72, assessmentsCreated: 18, status: "Active", accessLevel: "Full Admin", phone: "+91 98450 11100", avatar: "AG" },
  { id: "FAC-002", name: "Prof. Nitin Sethi", department: "Electronics", email: "nitin.sethi@skillconnect.edu", studentsMentored: 48, assessmentsCreated: 11, status: "Active", accessLevel: "Faculty", phone: "+91 98450 11101", avatar: "NS" },
  { id: "FAC-003", name: "Dr. Kavya Roy", department: "Data Science", email: "kavya.roy@skillconnect.edu", studentsMentored: 58, assessmentsCreated: 16, status: "Active", accessLevel: "Department Coordinator", phone: "+91 98450 11102", avatar: "KR" },
  { id: "FAC-004", name: "Prof. Rohan Khatri", department: "Mechanical", email: "rohan.khatri@skillconnect.edu", studentsMentored: 41, assessmentsCreated: 9, status: "Inactive", accessLevel: "Faculty", phone: "+91 98450 11103", avatar: "RK" },
  { id: "FAC-005", name: "Dr. Mehul Jain", department: "Civil", email: "mehul.jain@skillconnect.edu", studentsMentored: 36, assessmentsCreated: 7, status: "Active", accessLevel: "Department Coordinator", phone: "+91 98450 11104", avatar: "MJ" },
  { id: "FAC-006", name: "Prof. Sneha Iyer", department: "Information Technology", email: "sneha.iyer@skillconnect.edu", studentsMentored: 65, assessmentsCreated: 17, status: "Active", accessLevel: "Faculty", phone: "+91 98450 11105", avatar: "SI" },
  { id: "FAC-007", name: "Dr. Sandeep Naik", department: "Electrical", email: "sandeep.naik@skillconnect.edu", studentsMentored: 39, assessmentsCreated: 10, status: "Suspended", accessLevel: "Faculty", phone: "+91 98450 11106", avatar: "SN" },
  { id: "FAC-008", name: "Prof. Aditi Vora", department: "Computer Science", email: "aditi.vora@skillconnect.edu", studentsMentored: 51, assessmentsCreated: 13, status: "Active", accessLevel: "Full Admin", phone: "+91 98450 11107", avatar: "AV" },
];

export const industries: Industry[] = [
  { id: "IND-001", name: "Infosys", domain: "IT Services", opportunitiesPosted: 18, verificationStatus: "Verified", accountStatus: "Active", logo: "I", description: "Global digital services leader helping enterprises navigate digital transformation with AI and cloud engineering solutions.", contactPerson: "Amit Sharma", email: "amit.sharma@infosys.com", phone: "+91 99000 12345", website: "www.infosys.com", location: "Bengaluru, India", verificationHistory: ["Verified on 10 Feb 2026", "Profile reviewed by admin on 28 Mar 2026"], activeInternships: 7, applicationsReceived: 640 },
  { id: "IND-002", name: "TCS", domain: "Consulting & Software", opportunitiesPosted: 22, verificationStatus: "Verified", accountStatus: "Active", logo: "T", description: "Technology and consulting company focused on business transformation through digital and AI-powered services.", contactPerson: "Ritika Bansal", email: "ritika.bansal@tcs.com", phone: "+91 98877 22331", website: "www.tcs.com", location: "Pune, India", verificationHistory: ["Verified on 02 Jan 2026", "Vendor review passed on 14 Apr 2026"], activeInternships: 9, applicationsReceived: 820 },
  { id: "IND-003", name: "Google", domain: "Software & Product", opportunitiesPosted: 12, verificationStatus: "Pending", accountStatus: "Active", logo: "G", description: "Product company building AI and cloud platforms for global users and enterprises.", contactPerson: "Sarah Lee", email: "sarah.lee@google.com", phone: "+1 415 555 0111", website: "about.google", location: "Bengaluru, India", verificationHistory: ["Submitted on 26 Apr 2026", "Awaiting compliance review"], activeInternships: 5, applicationsReceived: 510 },
  { id: "IND-004", name: "Amazon", domain: "E-commerce & Cloud", opportunitiesPosted: 16, verificationStatus: "Verified", accountStatus: "Active", logo: "A", description: "Global technology company with a broad footprint in cloud, retail, and logistics innovation.", contactPerson: "Kunal Menon", email: "kunal.menon@amazon.in", phone: "+91 99123 45678", website: "www.amazon.jobs", location: "Hyderabad, India", verificationHistory: ["Verified on 09 Mar 2026", "Reviewed by admin on 20 Apr 2026"], activeInternships: 8, applicationsReceived: 690 },
  { id: "IND-005", name: "Zomato", domain: "Consumer Tech", opportunitiesPosted: 9, verificationStatus: "Rejected", accountStatus: "Disabled", logo: "Z", description: "Food-tech and delivery platform transforming local commerce and customer experience at scale.", contactPerson: "Nisha Arora", email: "nisha.arora@zomato.com", phone: "+91 99764 33211", website: "www.zomato.com", location: "Delhi, India", verificationHistory: ["Rejected on 07 Apr 2026", "Insufficient company verification"], activeInternships: 2, applicationsReceived: 210 },
  { id: "IND-006", name: "Accenture", domain: "Consulting", opportunitiesPosted: 15, verificationStatus: "Verified", accountStatus: "Active", logo: "A", description: "Global professional services firm delivering digital transformation and strategy consulting across sectors.", contactPerson: "Haritha Nair", email: "haritha.nair@accenture.com", phone: "+91 98122 56001", website: "www.accenture.com", location: "Mumbai, India", verificationHistory: ["Verified on 18 Feb 2026", "Updated records on 02 May 2026"], activeInternships: 6, applicationsReceived: 560 },
  { id: "IND-007", name: "Cognizant", domain: "IT Services", opportunitiesPosted: 12, verificationStatus: "Pending", accountStatus: "Active", logo: "C", description: "Digital transformation company delivering business and technology services across multiple industries.", contactPerson: "Pooja Kapoor", email: "pooja.kapoor@cognizant.com", phone: "+91 98345 89125", website: "www.cognizant.com", location: "Chennai, India", verificationHistory: ["Submitted on 11 Apr 2026", "Awaiting profile review"], activeInternships: 4, applicationsReceived: 480 },
  { id: "IND-008", name: "Mahindra", domain: "Manufacturing", opportunitiesPosted: 14, verificationStatus: "Verified", accountStatus: "Active", logo: "M", description: "Industrial conglomerate with operations spanning automotive, technology, and engineering-driven innovation.", contactPerson: "Vikram Sinha", email: "vikram.sinha@mahindra.com", phone: "+91 98710 44113", website: "www.mahindra.com", location: "Mumbai, India", verificationHistory: ["Verified on 12 Feb 2026", "Employment review cleared"], activeInternships: 6, applicationsReceived: 430 },
];
