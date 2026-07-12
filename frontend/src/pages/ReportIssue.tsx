import { useState } from "react";

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
        <section>
          <h1>How can Facilities help?</h1>

          <button onClick={() => chooseRequestType("Something is broken")}>
            Something is broken
          </button>

          <button onClick={() => chooseRequestType("Event setup")}>
            Event setup
          </button>

          <button onClick={() => chooseRequestType("Cleaning")}>
            Cleaning
          </button>

          <button onClick={() => chooseRequestType("Technology")}>
            Technology
          </button>

          <button onClick={() => chooseRequestType("Safety")}>Safety</button>
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
