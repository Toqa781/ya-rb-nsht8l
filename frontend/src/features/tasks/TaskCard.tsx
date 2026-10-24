import Badge from "../../Components/UI/Badge";
import Button from "../../Components/UI/Button";
import Card from "../../Components/UI/Card";

import type { Task } from "./types";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({
  task,
  onToggle,
  onDelete,
}: TaskCardProps) {

  const tone =
    task.type === "Interview"
      ? "purple"
      : task.type === "Assessment"
      ? "amber"
      : task.type === "Follow-up"
      ? "blue"
      : "gray";

  return (
    <Card className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

      {/* Task information */}
      <div className="flex min-w-0 items-start gap-3">

        {/* Complete task checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Complete ${task.title}`}
          className="mt-1 h-4 w-4 accent-indigo-600"
        />

        <div className="min-w-0">

          {/* Task title */}
          <h3
            className={`font-semibold text-ink ${
              task.completed
                ? "line-through opacity-60"
                : ""
            }`}
          >
            {task.title}
          </h3>

          {/* Company and position */}
          <p className="mt-1 text-sm text-muted">
            {[task.company, task.jobTitle]
              .filter(Boolean)
              .join(" · ")}
          </p>

          {/* Deadline */}
          <p className="mt-1 text-xs text-muted">
            Due: {task.dueDate}
          </p>

        </div>
      </div>

      {/* Task actions */}
      <div className="flex items-center gap-2 self-end sm:self-auto">

        <Badge tone={tone}>
          {task.type}
        </Badge>

        <Button
          size="sm"
          variant="secondary"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
        >
          Delete
        </Button>

      </div>
    </Card>
  );
}