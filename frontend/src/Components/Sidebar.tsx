import { NavLink } from "react-router-dom";

// Navigation items
const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Applications", path: "/applications" },
  { name: "Tasks", path: "/tasks" },
  { name: "Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 flex h-screen w-64 flex-col border-r border-gray-200 bg-white">

      <div className="flex h-20 items-center gap-3 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
          T
        </div>

        <span className="text-xl font-bold tracking-tight text-gray-900">
          Trackora
        </span>
      </div>

      
      <div className="mt-6 px-6">
        <p className="text-xs font-semibold tracking-widest text-gray-400">
          YOUR WORKSPACE
        </p>
      </div>

      
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
              `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A5B4FC]
              ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <span className="text-lg" aria-hidden="true">  
            </span>

            {item.name}
          </NavLink>
        ))}
      </nav>

      
      <div className="mt-auto">

        
        <div className="mx-4 mb-6 rounded-xl bg-indigo-50 p-5">
          <div className="mb-3 text-2xl" aria-hidden="true">
            
          </div>

          <h3 className="text-sm font-semibold text-gray-900">
            Your next chapter starts here.
          </h3>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            One application at a time. You've got this.
          </p>
        </div>

       
        <div className="flex items-center gap-3 border-t border-gray-200 p-5">

          
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
            AC
          </div>

          
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Alex Chen
            </p>

            <p className="text-xs text-gray-500">
              Class of 2027
            </p>
          </div>

        </div>
      </div>
    </aside>
  );
}

export default Sidebar;