import {
  ClipboardList,
  LayoutDashboard,
  PlusCircle,
  Wrench,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Report an Issue",
    path: "/report-issue",
    icon: PlusCircle,
  },
  {
    label: "My Requests",
    path: "/my-requests",
    icon: ClipboardList,
  },
  {
    label: "Technician Workspace",
    path: "/technician",
    icon: Wrench,
  },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white md:block">
      <div className="flex h-20 items-center border-b border-slate-200 px-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">SchoolFix</h1>

          <p className="text-sm text-slate-500">Facilities Operations</p>
        </div>
      </div>

      <nav className="space-y-2 p-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                ].join(" ")
              }
            >
              <Icon size={20} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
