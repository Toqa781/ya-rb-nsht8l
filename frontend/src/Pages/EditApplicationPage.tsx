import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ApplicationForm from "../features/applications/ApplicationForm";
import ApplicationTips from "../features/applications/ApplicationTips";
import { applicationToFormValues, formValuesToApplication } from "../features/applications/applicationMappers";
import { loadApplications, saveApplications } from "../features/applications/applicationStorage";
import type { ApplicationFormValues } from "../features/applications/type";



function EditApplicationPage() {
  const {id} = useParams();
  const navigate= useNavigate();
  const [applications]=useState(loadApplications);

  const application =applications.find((item)=>item.id===id);

  if(!application){
    return(
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-ink">Application not found</h1>
        <p className="text-sm text-muted">We couldn't find that application. It may have been removed.</p>
        <Link to="/applications" className="text-sm font-medium text-primary hover:underline">
          Back to applications
        </Link>
      </div>
    );
  }
  function handleSubmit(values:ApplicationFormValues){
    const updated=formValuesToApplication(values,application!.id);
    saveApplications(
        applications.map((item)=> (item.id==updated.id?updated:item)),
    );
    navigate(`/applications/${application!.id}/details`);
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
                    Edit application
                </span>
                </nav>

        <div>
            <h1 className="text-3xl font-semibold tracking-tight text-ink">Edit application</h1>
            <p className="mt-2 text-sm text-muted">Update the details as your search moves forward.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <ApplicationForm
                key={application.id}
                initialValues={applicationToFormValues(application)}
                onSubmit={handleSubmit}
                onCancel={()=>navigate(`/applications/${application.id}/details`)}
                submitLabel="Save Changes"
            />
            <ApplicationTips/>
        </div>
    </div>
  );
}


export default EditApplicationPage;