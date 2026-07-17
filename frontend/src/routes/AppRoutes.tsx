import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import UploadLogsPage from "../pages/UploadLogs/UploadLogsPage";
import ReportsPage from "../pages/Reports/ReportsPage";
import InvestigationsDetailsPage from "../pages/Investigations/InvestigationsDetailsPage";
import InvestigationsPage from "../pages/Investigations/InvestigationsPage";
import AIAssistantPage from "../pages/AIAssistant/AIAssistantPage";
import LoginPage from "../pages/Login/LoginPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/upload-logs" element={<UploadLogsPage />} />
        <Route path="/investigations/:id" element={<InvestigationsDetailsPage />} />
        <Route path="/investigations" element={<InvestigationsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/ai-assistant" element={<AIAssistantPage />} />
      </Routes>
    </BrowserRouter>
  );
}
