import { NavLink, useLocation } from "react-router-dom";
import { workspaceNavigation } from "./Navigation";

const pageNames: Record<string, string> = {
  "/": "Home",
  "/display": "Display",
  "/dashboard": "Dashboard",
  "/applications": "Applications",
  "/applications/add": "Add Application",
  "/tasks": "Tasks",
  "/settings": "Settings",
};

export default function Header() {
  const location = useLocation();

  const currentPage =
    pageNames[location.pathname] ??
    (location.pathname.startsWith("/applications/")
      ? "Applications"
      : "Workspace");

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface">
      {/* Desktop */}
      <div className="hidden h-20 items-center justify-between px-8 lg:flex">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-3 text-sm"
        >
          <span className="text-muted">Workspace</span>
          <span aria-hidden="true" className="text-subtle">
            &gt;
          </span>
          <span aria-current="page" className="font-semibold text-ink">
            {currentPage}
          </span>
        </nav>

        <div className="flex items-center gap-5">
          <span className="text-sm text-muted">
            {formattedDate}
          </span>

          <NotificationButton />
        </div>
      </div>

      {/* Tablet and mobile */}
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:hidden">
        <NavLink
          to="/dashboard"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-bold text-white">
            T
          </span>

          <span className="text-lg font-bold text-ink">
            Trackora
          </span>
        </NavLink>

        {/* Tablet navigation */}
        <nav
          aria-label="Tablet navigation"
          className="hidden items-center gap-1 sm:flex"
        >
          {workspaceNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-light text-primary"
                    : "text-muted hover:bg-page"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div
            aria-label="Alex Chen"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-xs font-semibold text-primary"
          >
            AC
          </div>
        </div>
      </div>
    </header>
  );
}

function NotificationButton() {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="rounded-lg p-2 text-muted transition-colors hover:bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
    >
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </svg>
    </button>
  );
}