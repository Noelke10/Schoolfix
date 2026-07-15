import { useState, type FormEvent } from "react";

import RequestTypeStep, {
  type RequestType,
} from "../components/requestWizard/RequestTypeStep";

function ReportIssue() {
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState<RequestType | null>(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function chooseRequestType(type: RequestType) {
    setRequestType(type);
    setStep(2);
  }

  function submitRequest(event: FormEvent) {
    event.preventDefault();
    setStep(4);
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      {step === 1 && <RequestTypeStep onSelect={chooseRequestType} />}

      {step === 2 && (
        <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-blue-700">Step 2 of 3</p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Where is it?
          </h1>

          <p className="mt-2 text-slate-600">
            Enter the building, room, or area where help is needed.
          </p>

          <label
            htmlFor="location"
            className="mt-6 block text-sm font-medium text-slate-700"
          >
            Location
          </label>

          <input
            id="location"
            type="text"
            placeholder="Classroom 204, Parish Hall, Gym..."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              Back
            </button>

            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!location.trim()}
              className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-blue-700">Step 3 of 3</p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Tell us more
          </h1>

          <p className="mt-2 text-slate-600">
            Include enough detail for Facilities to understand what you need.
          </p>

          <form onSubmit={submitRequest}>
            <label
              htmlFor="description"
              className="mt-6 block text-sm font-medium text-slate-700"
            >
              Description
            </label>

            <textarea
              id="description"
              placeholder="For example: The projector powers on, but no image appears."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={6}
              className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={!description.trim()}
                className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </section>
      )}

      {step === 4 && (
        <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
            ✓
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Request received
          </h1>

          <p className="mt-2 text-slate-600">
            Thanks! Facilities has received your request and will keep you
            updated.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Request type
                </dt>
                <dd className="mt-1 text-slate-900">{requestType}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">Location</dt>
                <dd className="mt-1 text-slate-900">{location}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Description
                </dt>
                <dd className="mt-1 text-slate-900">{description}</dd>
              </div>
            </dl>
          </div>

          <button
            type="button"
            onClick={() => {
              setStep(1);
              setRequestType(null);
              setLocation("");
              setDescription("");
            }}
            className="mt-6 rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800"
          >
            Submit Another Request
          </button>
        </section>
      )}
    </main>
  );
}

export default ReportIssue;
