type WizardProgressProps = {
  currentStep: number;
  totalSteps: number;
};

function WizardProgress({ currentStep, totalSteps }: WizardProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-blue-700">
          Step {currentStep} of {totalSteps}
        </span>

        <span className="text-slate-500">
          {Math.round(progressPercentage)}%
        </span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-700 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}

export default WizardProgress;
