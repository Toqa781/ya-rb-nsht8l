import { Link, useNavigate } from "react-router-dom";
import ApplicationForm from "../features/applications/ApplicationForm";
import type{ ApplicationFormValues } from "../features/applications/type";
import ApplicationTips from "../features/applications/ApplicationTips";

const emptyValues: ApplicationFormValues={
    companyName:"",
    jobTitle:"",
    location:"",
    salaryRange:"",
    appliedOn: new Date().toISOString().slice(0,10),
    status:"Saved",
    listingUrl:"",
    notes:""
};
function AddApplicationPage() {
    const navigate=useNavigate();

    function handleSubmit(values:ApplicationFormValues){
        console.log("Saving:", values)//temp
        navigate("/applications");
    }
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

                <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-subtle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>

                <span aria-current="page" className="text-muted">
                    New application
                </span>
                </nav>
            <div>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Add application</h1>
                <p className="mt-2 text-sm text-gray-500">Found something promising? Give it a home here.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
                <ApplicationForm
                    initialValues={emptyValues}
                    onSubmit={handleSubmit}
                    onCancel={() => navigate("/applications")}
                />
                <ApplicationTips />
            </div>
        </div>
    )
}

export default AddApplicationPage;