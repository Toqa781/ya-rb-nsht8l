import Button from "../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
    </div>

  );
}

export default DashboardPage;