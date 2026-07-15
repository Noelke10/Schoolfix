import type { ReactNode } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

type AppLayoutProps = {
  children: ReactNode;
  currentPage: "dashboard" | "reportIssue" | "myRequests";
  onNavigate: (page: "dashboard" | "reportIssue" | "myRequests") => void;
};

function AppLayout({ children, currentPage, onNavigate }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />

      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
