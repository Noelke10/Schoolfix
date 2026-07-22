import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import MyRequests from "./pages/MyRequests";
import ReportIssue from "./pages/ReportIssue";
import TechnicianDashboard from "./pages/TechnicianDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-issue" element={<ReportIssue />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/technician" element={<TechnicianDashboard />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
