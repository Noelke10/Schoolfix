type OptionCardProps = {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
};

function OptionCard({ icon, title, description, onClick }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">{icon}</span>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </button>
  );
}

export default OptionCard;
