import type { FacilityRequest } from "../../types/request";

type RequestCardProps = {
  request: FacilityRequest;
};

function RequestCard({ request }: RequestCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-700">
            Request #{request.id}
          </p>

          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            {request.title}
          </h2>

          <p className="mt-1 text-sm text-slate-600">{request.location}</p>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
          {request.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 pt-4 text-sm">
        <p className="text-slate-600">
          Reported by:{" "}
          <span className="font-medium text-slate-900">
            {request.reportedBy}
          </span>
        </p>

        <p className="text-slate-600">
          Priority:{" "}
          <span className="font-medium text-slate-900">{request.priority}</span>
        </p>
      </div>
    </article>
  );
}

export default RequestCard;
