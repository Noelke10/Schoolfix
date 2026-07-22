import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function Layout() {
  return (
    <div>
      <Sidebar />

      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
