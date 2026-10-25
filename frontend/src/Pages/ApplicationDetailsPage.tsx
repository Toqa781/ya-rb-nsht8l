import { useState, type ReactNode } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Badge from "../Components/UI/Badge";
import Button from "../Components/UI/Button";
import Card from "../Components/UI/Card";
import { loadApplications } from "../features/applications/applicationStorage";

function ApplicationDetailsPage(){
    const {id}=useParams();
    const navigate=useNavigate();
    const [applications]=useState(loadApplications);

    const application=applications.find((item)=> item.id===id);

    if(!application){
        return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-ink">Application not found</h1>
            <p className="text-sm text-muted">We couldn't find that application. It may have been removed.</p>
            <Link to="/applications" className="text-sm font-medium text-primary hover:underline">
            Back to applications
            </Link>
        </div>
        );
    }
    // Only turn http(s) addresses into clickable links (see the note below)
    const listingUrl = application.listingUrl ?? "";
    const isWebLink = /^https?:\/\//i.test(listingUrl);
    
    return(
        <div className="space-y-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-sm">
                <Link
                    to="/applications"
                    className="flex items-center gap-3 rounded font-medium text-ink hover:text-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus"
                >
                    <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Applications
                </Link>

            </nav>

            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-ink">Application details</h1>
                    <p className="mt-2 text-sm text-muted">Every detail and next step, in one place.</p>
                </div>
                <Button onClick={()=>navigate(`/applications/${application.id}/edit`)}>
                    Edit application
                </Button>
            </div>

            {/* summary */}
            <Card>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 font-semibold text-indigo-600"
                        >
                            {application.companyName.charAt(0).toUpperCase()}
                        </span>
                        <span className="text-sm font-medium text-ink">{application.companyName}</span>
                    </div>
                    {/* <Badge tone=""></Badge> */}
                </div>

                <h2 className="mt-4 text-lg font-semibold text-ink">{application.jobTitle}</h2>
                <p className="mt-1 text-sm text-muted">{application.location || "No location added"}</p>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
                    <span>{application.salaryRange || "No salary range added"}</span>
                    <span>{application.appliedOn}</span>
                </div>
            </Card>
        </div>
    );
}
export default ApplicationDetailsPage;