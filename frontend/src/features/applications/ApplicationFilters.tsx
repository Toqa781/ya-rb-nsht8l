//displays the tabs and tells the parent when someone clicks a tab

import type { ApplicationTab } from "./type";

type ApplicationFiltersProps = {
  activeTab: ApplicationTab;
  counts: Record<ApplicationTab, number>;
  onTabChange: (tab: ApplicationTab) => void;
};

const tabs: ApplicationTab[] = ["All", "Active", "Archived",]; //The array gives us the items we want to display.

function ApplicationFilters({
  activeTab,
  counts,
  onTabChange,
}: ApplicationFiltersProps) {
  return (
    <div
      aria-label="Filter applications"
      className="flex w-full gap-4 overflow-x-auto border-b border-gray-200"
      role="tablist"
    >
      {tabs.map((tab) => {
        const selected = activeTab === tab;

        return (
          <button
            key={tab}
            aria-selected={selected}
            className={`-mb-px inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-3 pt-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm ${
              selected
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"
            }`}
            onClick={() => onTabChange(tab)}
            role="tab"
            type="button"
          >
            {tab === "All" ? "All applications" : tab}
            <span
              className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs ${
                selected
                  ? "bg-indigo-50 text-indigo-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {counts[tab]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ApplicationFilters;
