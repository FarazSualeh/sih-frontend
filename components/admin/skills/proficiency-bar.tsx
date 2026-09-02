export function ProficiencyBar({ value }: { value: number }) {
  return (
    <div className="flex min-w-[125px] items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#e9edf5]">
        <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${value}%` }} />
      </div>
      <span className="w-8 text-right text-xs font-semibold text-ink">{value}%</span>
    </div>
  );
}