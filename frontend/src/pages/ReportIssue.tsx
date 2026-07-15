import { useState, type FormEvent } from "react";

import DescriptionStep from "../components/requestWizard/DescriptionStep";
import ConfirmationStep from "../components/requestWizard/ConfirmationStep";
import LocationStep from "../components/requestWizard/LocationStep";
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
        <LocationStep
          location={location}
          onLocationChange={setLocation}
          onBack={() => setStep(1)}
          onContinue={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <DescriptionStep
          description={description}
          onDescriptionChange={setDescription}
          onBack={() => setStep(2)}
          onSubmit={submitRequest}
        />
      )}

      {step === 4 && (
        <ConfirmationStep
          requestType={requestType}
          location={location}
          description={description}
          onReset={() => {
            setStep(1);
            setRequestType(null);
            setLocation("");
            setDescription("");
          }}
        />
      )}
    </main>
  );
}

export default ReportIssue;
