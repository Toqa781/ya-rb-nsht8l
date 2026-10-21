import { NavLink } from "react-router-dom";

// Navigation items
const navItems = [
  { name: "Display", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
  { name: "Applications", path: "/applications" },
  { name: "Tasks", path: "/tasks" },
  { name: "Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 flex h-screen w-64 flex-col border-r border-line bg-surface">

      {/* Logo */}
      <div className="flex h-20 items-center gap-3 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white">
          T
        </div>

        <span className="text-xl font-bold tracking-tight text-ink">
          Trackora
        </span>
      </div>

      {/* Workspace Label */}
      <div className="mt-6 px-6">
        <p className="text-xs font-semibold tracking-widest text-subtle">
          YOUR WORKSPACE
        </p>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className="mt-4 flex flex-col gap-1 px-3"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-button px-4 py-3 text-left text-sm font-medium transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus
              ${
                isActive
                  ? "bg-primary-light text-primary"
                  : "text-muted hover:bg-page"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">

        {/* Promotional Card */}
        <div className="mx-4 mb-6 rounded-card bg-primary-light p-5">

          <h3 className="text-sm font-semibold text-ink">
            Your next chapter starts here.
          </h3>

          <p className="mt-2 text-xs leading-5 text-muted">
            One application at a time. You've got this.
          </p>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-t border-line p-5">

          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
            AC
          </div>

          {/* User Information */}
          <div>
            <p className="text-sm font-semibold text-ink">
              Alex Chen
            </p>

            <p className="text-xs text-muted">
              Class of 2027
            </p>
          </div>

        </div>
      </div>
    </aside>
  );
}

export default Sidebar;