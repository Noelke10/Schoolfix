import { useState } from "react";
import OptionCard from "../components/requestWizard/OptionCard";

type RequestType =
  | "Something is broken"
  | "Event setup"
  | "Cleaning"
  | "Technology"
  | "Safety";

function ReportIssue() {
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState<RequestType | null>(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function chooseRequestType(type: RequestType) {
    setRequestType(type);
    setStep(2);
  }

  function submitRequest(event: React.FormEvent) {
    event.preventDefault();
    setStep(4);
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      {step === 1 && (
        <section className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-slate-900">
            How can Facilities help?
          </h1>

          <p className="mt-2 text-slate-600">
            Choose the option that best matches your request.
          </p>

          <div className="mt-6 grid gap-4">
            <OptionCard
              icon="🛠️"
              title="Something is broken"
              description="Report a maintenance or repair issue"
              onClick={() => chooseRequestType("Something is broken")}
            />

            <OptionCard
              icon="🪑"
              title="Event setup"
              description="Request tables, chairs, or event support"
              onClick={() => chooseRequestType("Event setup")}
            />

            <OptionCard
              icon="🧹"
              title="Cleaning"
              description="Report spills, trash, or restroom supply needs"
              onClick={() => chooseRequestType("Cleaning")}
            />

            <OptionCard
              icon="💻"
              title="Technology"
              description="Report a projector, device, or technology issue"
              onClick={() => chooseRequestType("Technology")}
            />

            <OptionCard
              icon="⚠️"
              title="Safety"
              description="Report a safety or security concern"
              onClick={() => chooseRequestType("Safety")}
            />
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <h1>Where is it?</h1>

          <input
            type="text"
            placeholder="Classroom 204, Parish Hall, Gym..."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />

          <button onClick={() => setStep(3)}>Continue</button>
        </section>
      )}

      {step === 3 && (
        <section>
          <h1>Tell us more</h1>

          <form onSubmit={submitRequest}>
            <textarea
              placeholder="Briefly describe what you need..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

            <button type="submit">Submit Request</button>
          </form>
        </section>
      )}

      {step === 4 && (
        <section>
          <h1>Request received</h1>
          <p>Thanks! Facilities has received your request.</p>

          <p>Type: {requestType}</p>
          <p>Location: {location}</p>
          <p>Description: {description}</p>
        </section>
      )}
    </main>
  );
}

export default ReportIssue;
