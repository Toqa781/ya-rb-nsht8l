import { useState } from "react";

import Button from "../Components/UI/Button";

import TaskCard from "../features/tasks/TaskCard";
import TaskForm from "../features/tasks/TaskForm";
import TaskSummary from "../features/tasks/TaskSummary";

import { taskGroup } from "../features/tasks/taskUtils";

import type { Task } from "../features/tasks/types";

// Local storage key
const STORAGE_KEY = "trackora-tasks-v1";

// Load previously saved tasks
function loadTasks(): Task[] {
  try {
    const storedTasks = localStorage.getItem(STORAGE_KEY);

    const data = JSON.parse(storedTasks ?? "[]");

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default function TasksPage() {

  // All tasks
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  // Control form visibility
  const [showForm, setShowForm] = useState(false);

  // Control completed tasks visibility
  const [showCompleted, setShowCompleted] = useState(false);

  // Save tasks to state and localStorage
  function updateTasks(updatedTasks: Task[]) {
    setTasks(updatedTasks);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedTasks)
    );
  }

  // Add a new task
  function addTask(task: Task) {
    updateTasks([task, ...tasks]);

    setShowForm(false);
  }

  // Toggle completion
  function toggleTask(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    updateTasks(updatedTasks);
  }

  // Delete a task
  function deleteTask(id: string) {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    updateTasks(updatedTasks);
  }

  // Separate active and completed tasks
  const activeTasks = tasks.filter(
    (task) => !task.completed
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  // Task categories
  const groups = [
    "Overdue",
    "Today",
    "Upcoming",
  ] as const;

  return (
    <div className="mx-auto max-w-6xl space-y-6">

      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-ink">
            Tasks & Follow-ups
          </h1>

          <p className="mt-1 text-sm text-muted">
            Stay on top of every application and next step.
          </p>
        </div>

        <Button
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "+ Add Task"}
        </Button>

      </div>

      {/* Summary Cards */}
      <TaskSummary tasks={tasks} />

      {/* Add Task Form */}
      {showForm && (
        <TaskForm
          onAdd={addTask}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Task Groups */}
      {groups.map((group) => {

        const groupTasks = activeTasks
          .filter((task) => taskGroup(task) === group)
          .sort((a, b) =>
            a.dueDate.localeCompare(b.dueDate)
          );

        return (
          <section
            key={group}
            className="space-y-3"
          >

            {/* Section Heading */}
            <h2 className="text-lg font-semibold text-ink">
              {group}

              <span className="ml-2 text-sm font-normal text-muted">
                ({groupTasks.length})
              </span>
            </h2>

            {/* Tasks */}
            {groupTasks.length > 0 ? (

              groupTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))

            ) : (

              <p className="rounded-card border border-dashed border-line p-5 text-sm text-muted">
                No {group.toLowerCase()} tasks.
              </p>

            )}

          </section>
        );
      })}

      {/* Completed Tasks */}
      <section className="space-y-3">

        <Button
          variant="secondary"
          onClick={() =>
            setShowCompleted(!showCompleted)
          }
        >
          {showCompleted ? "Hide" : "Show"} Completed
          ({completedTasks.length})
        </Button>

        {showCompleted &&
          completedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        }

      </section>

    </div>
  );
}