import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <main>
      <h1>SchoolFix</h1>
      <p>Keeping schools and churches operating seamlessly.</p>

      <section>
        <DashboardCard title="Open Work Orders" value={8} />
        <DashboardCard title="PM Tasks" value={6} />
        <DashboardCard title="Events" value={2} />
        <DashboardCard title="Emergencies" value={1} />
      </section>
    </main>
  );
}

export default Dashboard;
