export function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="card p-6">
      <div className="text-xs font-semibold text-neutral-600">{label}</div>
      <div className="mt-2 text-2xl font-extrabold">{value}</div>
      <div className="mt-2 text-sm text-neutral-700">{note}</div>
    </div>
  );
}
