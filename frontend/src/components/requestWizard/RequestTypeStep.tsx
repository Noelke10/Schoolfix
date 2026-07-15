import OptionCard from "./OptionCard";
import WizardProgress from "./WizardProgress";
import {
  BrushCleaning,
  CircleAlert,
  Hammer,
  Monitor,
  PartyPopper,
} from "lucide-react";

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
      <WizardProgress currentStep={1} totalSteps={3} />

      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        How can Facilities help?
      </h1>

      <p className="mt-2 text-slate-600">
        Choose the option that best matches your request.
      </p>

      <div className="mt-6 grid gap-4">
        <OptionCard
          icon={Hammer}
          title="Something is broken"
          description="Report a maintenance or repair issue"
          onClick={() => onSelect("Something is broken")}
        />

        <OptionCard
          icon={PartyPopper}
          title="Event setup"
          description="Request tables, chairs, or event support"
          onClick={() => onSelect("Event setup")}
        />

        <OptionCard
          icon={BrushCleaning}
          title="Cleaning"
          description="Report spills, trash, or restroom supply needs"
          onClick={() => onSelect("Cleaning")}
        />

        <OptionCard
          icon={Monitor}
          title="Technology"
          description="Report a projector, device, or technology issue"
          onClick={() => onSelect("Technology")}
        />

        <OptionCard
          icon={CircleAlert}
          title="Safety"
          description="Report a safety or security concern"
          onClick={() => onSelect("Safety")}
        />
      </div>
    </section>
  );
}

export default RequestTypeStep;
