import type { BadgeTone } from "../../Components/UI/Badge";
import type { ApplicationStatus } from "./type";

export const statusTones:Record<ApplicationStatus,BadgeTone>={
    Saved: "gray",
  Applied: "blue",
  Assessment: "amber",
  Interview: "purple",
  Offer: "green",
  Rejected: "red",
  Withdrawn: "gray",
  "No Response": "gray",
};