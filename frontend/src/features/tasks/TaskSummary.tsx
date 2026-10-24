import Card from "../../Components/UI/Card";
import type { Task } from "./types";
import { taskGroup } from "./taskUtils";

interface TaskSummaryProps {
  tasks: Task[];
}

export default function TaskSummary({
  tasks,
}: TaskSummaryProps) {

  const openTasks = tasks.filter(
    (task) => !task.completed
  );

  const stats = [
    {
      label: "Total Tasks",
      value: openTasks.length,
    },
    {
      label: "Overdue",
      value: openTasks.filter(
        (task) => taskGroup(task) === "Overdue"
      ).length,
    },
    {
      label: "Due Today",
      value: openTasks.filter(
        (task) => taskGroup(task) === "Today"
      ).length,
    },
    {
      label: "Upcoming",
      value: openTasks.filter(
        (task) => taskGroup(task) === "Upcoming"
      ).length,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <p className="text-sm text-muted">
            {stat.label}
          </p>

          <p className="mt-2 text-3xl font-bold text-ink">
            {stat.value}
          </p>
        </Card>
      ))}
    </div>
  );
}