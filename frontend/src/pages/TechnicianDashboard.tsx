const urgentItems = [
  {
    id: 1,
    title: "Church A/C not cooling",
    location: "Church Sanctuary",
    priority: "High",
  },
  {
    id: 2,
    title: "Water leaking under sink",
    location: "Elementary Building — Room 112",
    priority: "Emergency",
  },
];

const todaysAssignments = [
  {
    id: 1,
    title: "Replace classroom lights",
    location: "Room 204",
  },
  {
    id: 2,
    title: "Restock restroom supplies",
    location: "School Hallway Restrooms",
  },
];

const eventSetups = [
  {
    id: 1,
    time: "10:00 AM",
    title: "Funeral reception setup",
    location: "Parish Hall",
  },
  {
    id: 2,
    time: "4:30 PM",
    title: "Youth ministry meeting",
    location: "Cafeteria",
  },
];

const preventiveMaintenance = [
  {
    id: 1,
    title: "Monthly generator inspection",
    due: "Due today",
  },
  {
    id: 2,
    title: "Replace HVAC filters",
    due: "Due tomorrow",
  },
];

function TechnicianDashboard() {
  return (
    <main className="p-8">
      <section className="mx-auto max-w-6xl">
        <div>
          <p className="text-sm font-medium text-blue-700">
            Technician Workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Good morning, Aaron
          </h1>

          <p className="mt-2 text-slate-600">
            Here is what needs your attention today.
          </p>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Needs Attention
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {urgentItems.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-red-200 bg-white p-5 shadow-sm"
              >
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                  {item.priority}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600">{item.location}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Today’s Assignments
            </h2>

            <div className="mt-4 space-y-4">
              {todaysAssignments.map((assignment) => (
                <div key={assignment.id}>
                  <p className="font-medium text-slate-900">
                    {assignment.title}
                  </p>
                  <p className="text-sm text-slate-600">
                    {assignment.location}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Event Setups
            </h2>

            <div className="mt-4 space-y-4">
              {eventSetups.map((event) => (
                <div key={event.id}>
                  <p className="text-sm font-medium text-blue-700">
                    {event.time}
                  </p>
                  <p className="font-medium text-slate-900">{event.title}</p>
                  <p className="text-sm text-slate-600">{event.location}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Preventive Maintenance
            </h2>

            <div className="mt-4 space-y-4">
              {preventiveMaintenance.map((task) => (
                <div key={task.id}>
                  <p className="font-medium text-slate-900">{task.title}</p>
                  <p className="text-sm text-slate-600">{task.due}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default TechnicianDashboard;
