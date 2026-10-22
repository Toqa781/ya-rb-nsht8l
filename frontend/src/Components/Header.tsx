import { useLocation } from "react-router-dom";

// Map URLs to page names
const pageNames: Record<string, string> = {
  "/": "Display",
  "/dashboard": "Dashboard",
  "/applications": "Applications",
  "/tasks": "Tasks",
  "/settings": "Settings",
};

function Header() {

  // Get current URL
  const location = useLocation();

  // Find the corresponding page name
  const currentPage =
    pageNames[location.pathname] ?? "Workspace";

  // Get current date
  const today = new Date();

  // Format date: Monday, October 19, 2026
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">

      
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-3 text-sm"
      >
        <span className="text-gray-400">
          Workspace
        </span>

        <span className="text-gray-300" aria-hidden="true">
          &gt;
        </span>

        <span
          className="font-semibold text-gray-900"
          aria-current="page"
        >
          {currentPage}
        </span>
      </nav>

      
      <div className="flex items-center gap-6">

        
        <span className="text-sm text-gray-500">
          {formattedDate}
        </span>

        
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(165,180,252)]"
        >
          {/* Bell Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>

          
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-500" />
        </button>

      </div>
    </header>
  );
}

export default Header;