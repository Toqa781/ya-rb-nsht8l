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
    id:number,
    companyName: string;
    jobTitle: string;
    location:string;
    appliedOn: string;
    salaryRange?: string;
    status: ApplicationStatus;
}