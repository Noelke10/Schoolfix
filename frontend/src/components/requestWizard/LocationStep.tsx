type LocationStepProps = {
  location: string;
  onLocationChange: (location: string) => void;
  onBack: () => void;
  onContinue: () => void;
};

function LocationStep({
  location,
  onLocationChange,
  onBack,
  onContinue,
}: LocationStepProps) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm font-medium text-blue-700">Step 2 of 3</p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">Where is it?</h1>

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
        onChange={(event) => onLocationChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
        >
          Back
        </button>

        <button
          type="button"
          onClick={onContinue}
          disabled={!location.trim()}
          className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Continue
        </button>
      </div>
    </section>
  );
}

export default LocationStep;
