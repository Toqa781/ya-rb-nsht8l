export type TaskType =
  | "Follow-up"
  | "Interview"
  | "Assessment"
  | "Other";

export interface Task {
  id: string;
  title: string;
  company: string;
  jobTitle: string;
  dueDate: string;
  type: TaskType;
  completed: boolean;
}