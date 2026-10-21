import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function MainLayout() {
  return (
    <div className="min-h-screen bg-page">

      
      <Sidebar />

      
      <div className="ml-64 min-h-screen">

       
        <Header />

        
        <main className="min-h-[calc(100vh-5rem)] p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default MainLayout;