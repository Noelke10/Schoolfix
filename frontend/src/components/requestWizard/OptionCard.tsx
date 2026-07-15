import type { LucideIcon } from "lucide-react";

type OptionCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
};

function OptionCard({
  icon: Icon,
  title,
  description,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
          <Icon size={26} aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </button>
  );
}

export default OptionCard;
