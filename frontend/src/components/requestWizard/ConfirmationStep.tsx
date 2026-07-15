import type { RequestType } from "./RequestTypeStep";

type ConfirmationStepProps = {
  requestType: RequestType | null;
  location: string;
  description: string;
  onReset: () => void;
};

function ConfirmationStep({
  requestType,
  location,
  description,
  onReset,
}: ConfirmationStepProps) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
        ✓
      </div>

      <h1 className="mt-5 text-3xl font-bold text-slate-900">
        Request received
      </h1>

      <p className="mt-2 text-slate-600">
        Thanks! Facilities has received your request and will keep you updated.
      </p>

      <div className="mt-6 rounded-xl bg-slate-50 p-5">
        <dl className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-slate-500">Request type</dt>
            <dd className="mt-1 text-slate-900">{requestType}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-slate-500">Location</dt>
            <dd className="mt-1 text-slate-900">{location}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-slate-500">Description</dt>
            <dd className="mt-1 text-slate-900">{description}</dd>
          </div>
        </dl>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800"
      >
        Submit Another Request
      </button>
    </section>
  );
}

export default ConfirmationStep;
