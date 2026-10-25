import type {Application, ApplicationFormValues  } from "./type";

export function formValuesToApplication(values: ApplicationFormValues, id: string): Application {
  return {
    id,
    companyName: values.companyName,
    jobTitle: values.jobTitle,
    location: values.location,
    appliedOn: values.appliedOn,
    status: values.status,
    salaryRange: values.salaryRange || undefined,
    listingUrl: values.listingUrl || undefined,
    jobDescription: values.jobDescription || undefined,
    notes: values.notes || undefined,
  };
}

export function applicationToFormValues(application: Application): ApplicationFormValues {
  return {
    companyName: application.companyName,
    jobTitle: application.jobTitle,
    location: application.location,
    salaryRange: application.salaryRange ?? "",
    appliedOn: application.appliedOn,
    status: application.status,
    listingUrl: application.listingUrl ?? "",
    jobDescription: application.jobDescription ?? "",
    notes: application.notes ?? "",
  };
}