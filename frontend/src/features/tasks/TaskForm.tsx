import { useState, type FormEvent } from "react";

import Button from "../../Components/UI/Button";

import type { Task, TaskType } from "./types";

interface TaskFormProps {
  onAdd: (task: Task) => void;
  onCancel: () => void;
}

export default function TaskForm({
  onAdd,
  onCancel,
}: TaskFormProps) {

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [type, setType] = useState<TaskType>(
    "Follow-up"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim() || !dueDate) {
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      company: company.trim(),
      jobTitle: jobTitle.trim(),
      dueDate,
      type,
      completed: false,
    };

    onAdd(newTask);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-line bg-surface p-5"
    >

      <h2 className="mb-4 text-lg font-semibold">
        New Task
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">

        {/* Task title */}
        <label className="text-sm font-medium">
          Task Title *

          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Follow up on application"
            className="mt-1 w-full rounded-lg border border-line-strong p-3"
          />
        </label>

        {/* Company */}
        <label className="text-sm font-medium">
          Company

          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Vodafone"
            className="mt-1 w-full rounded-lg border border-line-strong p-3"
          />
        </label>

        {/* Job title */}
        <label className="text-sm font-medium">
          Job Title

          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Backend Developer"
            className="mt-1 w-full rounded-lg border border-line-strong p-3"
          />
        </label>

        {/* Due date */}
        <label className="text-sm font-medium">
          Due Date *

          <input
            required
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 w-full rounded-lg border border-line-strong p-3"
          />
        </label>

        {/* Task type */}
        <label className="text-sm font-medium">
          Task Type

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value as TaskType)
            }
            className="mt-1 w-full rounded-lg border border-line-strong p-3"
          >
            <option value="Follow-up">
              Follow-up
            </option>

            <option value="Interview">
              Interview
            </option>

            <option value="Assessment">
              Assessment
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </label>

      </div>

      {/* Form buttons */}
      <div className="mt-5 flex gap-2">

        <Button type="submit">
          Save Task
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>

      </div>

    </form>
  );
}