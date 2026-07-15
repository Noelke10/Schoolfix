import RequestCard from "../components/requests/RequestCard";
import { sampleRequests } from "../data/requests";

function MyRequests() {
  return (
    <main className="p-8">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900">My Requests</h1>

        <p className="mt-2 text-slate-600">
          Track the status of requests submitted to Facilities.
        </p>

        <div className="mt-6 grid gap-4">
          {sampleRequests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default MyRequests;
