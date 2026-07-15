import type { FormEvent } from "react";

type DescriptionStepProps = {
  description: string;
  onDescriptionChange: (description: string) => void;
  onBack: () => void;
  onSubmit: (event: FormEvent) => void;
};

function DescriptionStep({
  description,
  onDescriptionChange,
  onBack,
  onSubmit,
}: DescriptionStepProps) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm font-medium text-blue-700">Step 3 of 3</p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">Tell us more</h1>

      <p className="mt-2 text-slate-600">
        Include enough detail for Facilities to understand what you need.
      </p>

      <form onSubmit={onSubmit}>
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
          onChange={(event) => onDescriptionChange(event.target.value)}
          rows={6}
          className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
            type="submit"
            disabled={!description.trim()}
            className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Submit Request
          </button>
        </div>
      </form>
    </section>
  );
}

export default DescriptionStep;
