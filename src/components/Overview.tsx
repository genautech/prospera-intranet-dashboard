import { OverviewItem } from '@/lib/dashboardData';

export function Overview({ items }: { items: OverviewItem[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {items.map((it, i) => (
        <div key={i} className="rounded-xl border border-divider bg-bg p-4">
          {it.label && (
            <dt className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-accent">{it.label}</dt>
          )}
          <dd className="text-sm leading-relaxed">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
