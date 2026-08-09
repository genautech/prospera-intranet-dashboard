import { Cell, TableData } from '@/lib/dashboardData';

function statusClass(text: string) {
  const t = text.toLowerCase();
  if (t.includes('conclu')) return 'bg-olive text-bg';
  if (t.includes('progresso') || t.includes('andamento')) return 'bg-accent text-bg';
  if (t.includes('pendente') || t.includes('aguard')) return 'border border-divider bg-bg text-ink';
  if (t.includes('pausad') || t.includes('bloque')) return 'border border-divider bg-bg text-ink opacity-70';
  return '';
}

function CellContent({ cell, kind }: { cell: Cell; kind: 'status' | 'percent' | 'text' }) {
  if (kind === 'status') {
    const cls = statusClass(cell.text);
    return cls ? (
      <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}`}>
        {cell.text}
      </span>
    ) : (
      <>{cell.text}</>
    );
  }

  if (kind === 'percent') {
    const pct = parseInt(cell.text, 10);
    return (
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-divider">
          <div className="h-full rounded-full bg-olive" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-xs font-semibold tabular-nums">{cell.text}</span>
      </div>
    );
  }

  if (cell.links.length > 0) {
    return (
      <span className="space-x-2">
        {cell.links.map((l, i) => (
          <a
            key={i}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-2 hover:underline"
          >
            {l.title}
          </a>
        ))}
      </span>
    );
  }

  return <>{cell.text}</>;
}

export function DataTable({ data }: { data: TableData }) {
  const statusCol = data.heads.findIndex((h) => h.toLowerCase().includes('status'));
  const pctCol = data.heads.findIndex((h) => h.includes('%'));

  return (
    <div className="-mx-2 overflow-x-auto px-2">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-divider text-left">
            {data.heads.map((h, i) => (
              <th key={i} className="px-3 py-2 font-semibold uppercase tracking-wide opacity-60 text-[11px]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr key={ri} className="border-b border-divider/60 align-top last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-3 py-3 ${ci === 0 ? 'font-semibold whitespace-nowrap' : ''}`}>
                  <CellContent
                    cell={cell}
                    kind={
                      ci === statusCol ? 'status' : ci === pctCol && /^\d+\s*%$/.test(cell.text) ? 'percent' : 'text'
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
