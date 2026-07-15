import OptionCard from "./OptionCard";

export type RequestType =
  | "Something is broken"
  | "Event setup"
  | "Cleaning"
  | "Technology"
  | "Safety";

type RequestTypeStepProps = {
  onSelect: (type: RequestType) => void;
};

function RequestTypeStep({ onSelect }: RequestTypeStepProps) {
  return (
    <section className="mx-auto max-w-2xl">
      <p className="text-sm font-medium text-blue-700">Step 1 of 3</p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">
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
          onClick={() => onSelect("Something is broken")}
        />

        <OptionCard
          icon="🪑"
          title="Event setup"
          description="Request tables, chairs, or event support"
          onClick={() => onSelect("Event setup")}
        />

        <OptionCard
          icon="🧹"
          title="Cleaning"
          description="Report spills, trash, or restroom supply needs"
          onClick={() => onSelect("Cleaning")}
        />

        <OptionCard
          icon="💻"
          title="Technology"
          description="Report a projector, device, or technology issue"
          onClick={() => onSelect("Technology")}
        />

        <OptionCard
          icon="⚠️"
          title="Safety"
          description="Report a safety or security concern"
          onClick={() => onSelect("Safety")}
        />
      </div>
    </section>
  );
}

export default RequestTypeStep;
