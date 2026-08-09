import { PlaybookGroup } from '@/lib/dashboardData';

export function Playbooks({ groups }: { groups: PlaybookGroup[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((g, i) => (
        <div key={i} className="rounded-xl border border-divider bg-bg p-4">
          <h3 className="mb-3 text-base">{g.title.replace(/:$/, '')}</h3>
          <ul className="space-y-1.5 text-sm">
            {g.items.map((item, j) => (
              <li key={j} className="flex gap-2">
                <span aria-hidden className="text-accent">
                  ›
                </span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
