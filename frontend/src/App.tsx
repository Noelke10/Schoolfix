import { useState } from "react";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import MyRequests from "./pages/MyRequests";

type Page = "dashboard" | "reportIssue" | "myRequests";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  return (
    <AppLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "reportIssue" && <ReportIssue />}
      {currentPage === "myRequests" && <MyRequests />}
    </AppLayout>
  );
}

export default App;
