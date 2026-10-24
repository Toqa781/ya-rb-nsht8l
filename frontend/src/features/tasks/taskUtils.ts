import type { Task } from "./types";

export function localToday(): string {
  const now = new Date();

  return `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

export function taskGroup(
  task: Task,
  today = localToday()
): "Overdue" | "Today" | "Upcoming" {

  if (task.dueDate < today) {
    return "Overdue";
  }

  if (task.dueDate === today) {
    return "Today";
  }

  return "Upcoming";
}