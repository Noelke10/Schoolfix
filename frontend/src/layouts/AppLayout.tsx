import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Sidebar />

      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
