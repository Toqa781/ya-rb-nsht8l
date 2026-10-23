//Owns state, filters data, and sorts results

import { mockApplications } from "../features/applications/mockData";
import ApplicationTable from "../features/applications/ApplicationTable";
import React, { useState } from "react"; //Stores values that change as the user interacts with the page.
import type { Application, ApplicationTab } from "../features/applications/type";
import ApplicationFilters from "../features/applications/ApplicationFilters"; //Displays the tabs and counts.

const archivedStatuses = new Set(["Rejected", "Withdrawn", "No Response"]);

function isArchived(application: Application): boolean {
  return archivedStatuses.has(application.status);
}

function ApplicationsPage(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<ApplicationTab>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const counts: Record<ApplicationTab, number> = {
    All: mockApplications.length,
    Active: mockApplications.filter((application) => !isArchived(application)).length,
    Archived: mockApplications.filter(isArchived).length,
  };
  
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleApplications = mockApplications.filter((application) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Active" && !isArchived(application)) ||
      (activeTab === "Archived" && isArchived(application));
    const matchesSearch =
      normalizedQuery.length === 0 ||
      [application.companyName, application.jobTitle].some(
        (value) => value.toLowerCase().includes(normalizedQuery),
      );
    const matchesStatus =
      statusFilter === "All statuses" || application.status === statusFilter;

    return matchesTab && matchesSearch && matchesStatus;
  }).sort((first, second) => {
    const dateDifference =
      new Date(second.appliedOn).getTime() - new Date(first.appliedOn).getTime();
    return sortOrder === "newest" ? dateDifference : -dateDifference;
  });
  const statuses = [...new Set(mockApplications.map((application) => application.status))].sort();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Your next chapter, organized.
        </h1>

        <p className="mt-1.5 text-sm text-gray-500">
          Every opportunity, every next step. No spreadsheet required.
        </p>
      </div>


      <section className="space-y-5" aria-label="Your applications">
        <ApplicationFilters
          activeTab={activeTab}
          counts={counts}
          onTabChange={setActiveTab}
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative min-w-0 flex-1">
            <label className="sr-only" htmlFor="application-search">
              Search applications
            </label>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-4-4" />
            </svg>
            <input
              id="application-search"
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search company or job title"
              type="search"
              value={searchQuery}
            />
          </div>
          <label className="sr-only" htmlFor="application-status-filter">
            Filter by status
          </label>
          <select
            id="application-status-filter"
            className="min-w-44 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            onChange={(event) => setStatusFilter(event.target.value)}
            value={statusFilter}
          >
            <option>All statuses</option>
            {statuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="application-sort-order">
            Sort applications
          </label>
          <select
            id="application-sort-order"
            className="min-w-44 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            onChange={(event) => setSortOrder(event.target.value as "newest" | "oldest")}
            value={sortOrder}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
        <ApplicationTable applications={visibleApplications} />
      </section>

    </div>
  )
}

export default ApplicationsPage;
