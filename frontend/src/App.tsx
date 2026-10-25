import MainLayout from "./Components/MainLayout";
import Display from "./Pages/Display";
import DashboardPage from "./Pages/DashboardPage";
import ApplicationsPage from "./Pages/ApplicationsPage";
import TasksPage from "./Pages/TasksPage";
import SettingsPage from "./Pages/SettingsPage";
import AddApplicationPage from "./Pages/AddApplicationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import EditApplicationPage from "./Pages/EditApplicationPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Display />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/applications/:id/edit" element={<EditApplicationPage/>}/>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/applications/add" element={<AddApplicationPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
