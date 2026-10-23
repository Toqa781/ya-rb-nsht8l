import type { Application } from "./type";

export const mockApplications: Application[] = [
  {
    id: 1,
    companyName: "Orbit",
    jobTitle: "Product Design Intern",
    location: "San Francisco, CA",
    appliedOn: "2026-10-16",
    salaryRange: "$32–40 / hr",
    status: "Applied",
  },
  {
    id: 2,
    companyName: "Forma",
    jobTitle: "Junior UX Designer",
    location: "New York, NY",
    appliedOn: "2026-10-15",
    salaryRange: "$75–90K / yr",
    status: "Interview",
  },
  {
    id: 3,
    companyName: "Lumen",
    jobTitle: "Software Engineer I",
    location: "Remote, US",
    appliedOn: "2026-10-14",
    salaryRange: "$90–110K / yr",
    status: "Assessment",
  },
  {
    id: 4,
    companyName: "Juniper",
    jobTitle: "Marketing Associate",
    location: "Austin, TX",
    appliedOn: "2026-10-12",
    salaryRange: "$55–65K / yr",
    status: "Offer",
  },
  {
    id: 5,
    companyName: "Google",
    jobTitle: "Junior SWE",
    location: "Austin, TX",
    appliedOn: "2026-2-12",
    salaryRange: "$55–65K / yr",
    status: "No Response",
  },
];