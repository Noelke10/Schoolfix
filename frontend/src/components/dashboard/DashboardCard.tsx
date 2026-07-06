type DashboardCardProps = {
  title: string;
  value: number;
};

function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="dashboard-card">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;
