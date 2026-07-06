import type { FacilityRequest } from "../../types/request";

type RequestCardProps = {
  request: FacilityRequest;
};

function RequestCard({ request }: RequestCardProps) {
  return (
    <article>
      <h3>{request.title}</h3>
      <p>{request.location}</p>
      <p>Reported by: {request.reportedBy}</p>
      <p>Status: {request.status}</p>
      <p>Priority: {request.priority}</p>
    </article>
  );
}

export default RequestCard;
