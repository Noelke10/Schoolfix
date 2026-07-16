import { useState } from "react";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import MyRequests from "./pages/MyRequests";
import TechnicianDashboard from "./pages/TechnicianDashboard";

type Page = "dashboard" | "reportIssue" | "myRequests" | "technician";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  return (
    <AppLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "reportIssue" && <ReportIssue />}
      {currentPage === "myRequests" && <MyRequests />}
      {currentPage === "technician" && <TechnicianDashboard />}
    </AppLayout>
  );
}

export default App;
