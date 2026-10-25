export type ApplicationStatus= 
    | "Applied" 
    | "Interview" 
    | "Rejected"
    |"Offer" 
    |"Withdrawn"
    |"Assessment"
    |"Saved"
    |"No Response"

export type ApplicationTab = "All" | "Active" | "Archived";

export interface Application {
    id:string,
    companyName: string;
    jobTitle: string;
    location:string;
    appliedOn: string;
    salaryRange?: string;
    status: ApplicationStatus;
    listingUrl?: string;
    jobDescription?: string;
    notes?: string;
}

// seperate form type -> no need of id, optional fields
export type ApplicationFormValues={
    companyName: string;
    jobTitle: string;
    location: string;
    salaryRange: string;
    appliedOn: string;
    status: ApplicationStatus;
    listingUrl: string;
    jobDescription: string;
    notes: string;
}

export const statusOptions: ApplicationStatus[] = [
  "Saved",
  "Applied",
  "Assessment",
  "Interview",
  "Offer",
  "Rejected",
  "Withdrawn",
  "No Response",
];
