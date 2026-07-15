type SidebarProps = {
  currentPage: "dashboard" | "reportIssue" | "myRequests";
  onNavigate: (page: "dashboard" | "reportIssue" | "myRequests") => void;
};

function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const baseButton =
    "w-full rounded-lg px-3 py-2 text-left font-medium transition";

  const activeButton = "bg-blue-100 text-blue-800";
  const inactiveButton = "text-slate-700 hover:bg-slate-100";

  return (
    <aside className="min-h-screen w-64 border-r border-slate-200 bg-white p-5">
      <h2 className="text-2xl font-bold text-blue-800">SchoolFix</h2>

      <p className="mt-1 text-sm text-slate-500">Facilities Operations</p>

      <nav className="mt-8 space-y-2">
        <button
          type="button"
          onClick={() => onNavigate("dashboard")}
          className={`${baseButton} ${
            currentPage === "dashboard" ? activeButton : inactiveButton
          }`}
        >
          Dashboard
        </button>

        <button
          type="button"
          onClick={() => onNavigate("reportIssue")}
          className={`${baseButton} ${
            currentPage === "reportIssue" ? activeButton : inactiveButton
          }`}
        >
          Report an Issue
        </button>

        <button
          type="button"
          onClick={() => onNavigate("myRequests")}
          className={`${baseButton} ${
            currentPage === "myRequests" ? activeButton : inactiveButton
          }`}
        >
          My Requests
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
