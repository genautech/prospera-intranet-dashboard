import { LogEntry } from '@/lib/dashboardData';

interface ExecutionLogProps {
  entries: LogEntry[];
  note?: string;
}

export function ExecutionLog({ entries, note }: ExecutionLogProps) {
  return (
    <div>
      <ol className="relative space-y-4 border-l border-divider pl-6">
        {entries.map((e, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-accent" />
            {e.when && (
              <div className="text-[11px] font-semibold uppercase tracking-wide opacity-60">{e.when}</div>
            )}
            <p className="mt-0.5 text-sm leading-relaxed">{e.what}</p>
            {e.links.length > 0 && (
              <ul className="mt-1 space-y-0.5 text-xs">
                {e.links.map((l, j) => (
                  <li key={j}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      {l.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
      {note && (
        <p className="mt-6 rounded-xl border border-accent/40 bg-bg p-4 text-sm leading-relaxed">
          <strong className="text-accent">Atenção:</strong> {note}
        </p>
      )}
    </div>
  );
}
