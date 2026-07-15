import { useState } from "react";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";

type Page = "dashboard" | "reportIssue";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  return (
    <AppLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "reportIssue" && <ReportIssue />}
    </AppLayout>
  );
}

export default App;
