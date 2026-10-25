import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-page">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main workspace */}
      <div className="min-w-0 min-h-screen lg:ml-64">
        <Header />

        <main className="min-w-0 px-4 pt-6 pb-24 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <MobileNavigation />
    </div>
  );
}