import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/UI/Button";
import ApplicationTable from "../features/applications/ApplicationTable";
import { loadApplications } from "../features/applications/applicationStorage";
import type { ApplicationStatus } from "../features/applications/type";
import {
  BriefcaseIcon,
  ChatIcon,
  MinusCircleIcon,
  SparkIcon,
} from "../features/dashboard/DashboardIcons";
import StatCard from "../features/dashboard/StatCard";


function DashboardPage(){
  const navigate=useNavigate();
  const [applications]=useState(loadApplications);

  function countByStatus(status:ApplicationStatus):number{
    return applications.filter((application)=>application.status===status).length;
  }
  const stats = [
    { label: "Total applications", value: applications.length, caption: "Your search, in one place", icon: <BriefcaseIcon /> },
    { label: "Interviews", value: countByStatus("Interview"), caption: "One step closer", icon: <ChatIcon /> },
    { label: "Offers", value: countByStatus("Offer"), caption: "A reason to celebrate", icon: <SparkIcon /> },
    { label: "Rejections", value: countByStatus("Rejected"), caption: "Part of the process", icon: <MinusCircleIcon /> },
  ];

  // Copy first: .sort() changes the array it's called on, and we must not reorder `applications`.
  // Valid ISO dates ("2026-10-16") sort correctly as plain text.
  const recentApplications = [...applications]
    .sort((first, second) => second.appliedOn.localeCompare(first.appliedOn))
    .slice(0, 4);



  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Your making moves, Name.
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Here's where your next chapter stand. Let's keep it going.
          </p>
        </div>

        <Button className="cursor-pointer" onClick={() => navigate("/applications/add")}>
          + Add application
        </Button>
      </div>

      <section aria-label="Application summary" className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat)=>(
          <StatCard key={stat.label}{...stat}/>
        ))}
      </section>
      
      <section
        aria-labelledby="recent-application-heading"
        className="overflow-hidden rounded-card border border-line bg-surface"
        >
          <div className="flex items-center justify-between gap-4 p-6">
            <h2 id="recent-applications-heading" className="text-xl font-semibold text-ink">
              Recent applications
            </h2>
             <Link
            to="/applications"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all <span aria-hidden="true">→</span>
          </Link>
          </div>

          <div className="border-t border-line">
            <ApplicationTable applications={recentApplications}/>
          </div>
      </section>

      <p className="flex items-center justify-center gap-2 pb-2 text-xs text-muted">
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Your job search. Your space.
      </p>



    </div>

  );
}

export default DashboardPage;