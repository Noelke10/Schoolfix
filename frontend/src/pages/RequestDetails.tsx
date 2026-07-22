import { Link, useParams } from "react-router-dom";

export default function RequestDetails() {
  const { requestId } = useParams();

  return (
    <div>
      <Link to="/my-requests">← Back to My Requests</Link>

      <h1 className="mt-4 text-2xl font-bold">Request Details</h1>

      <p className="mt-2">Request ID: {requestId}</p>
    </div>
  );
}
