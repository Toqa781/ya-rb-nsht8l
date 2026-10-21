import MainLayout from "./Components/MainLayout";
import DashboardPage from "./Pages/DashboardPage";
import ApplicationsPage from "./Pages/ApplicationsPage";
import TasksPage from "./Pages/TasksPage";
import SettingsPage from "./Pages/SettingsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;