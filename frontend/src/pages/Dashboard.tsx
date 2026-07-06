import DashboardCard from "../components/dashboard/DashboardCard";
import RequestCard from "../components/requests/RequestCard";
import type { FacilityRequest } from "../types/request";

function Dashboard() {
  const recentRequests: FacilityRequest[] = [
    {
      id: 1,
      title: "Projector not working",
      location: "Classroom 204",
      reportedBy: "Mrs. Smith",
      status: "Awaiting Review",
      priority: "High",
    },
    {
      id: 2,
      title: "Tables needed for youth night",
      location: "Parish Hall",
      reportedBy: "Youth Ministry",
      status: "Approved",
      priority: "Medium",
    },
  ];

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

      <section>
        <h2>Recent Requests</h2>

        {recentRequests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </section>
    </main>
  );
}

export default Dashboard;
