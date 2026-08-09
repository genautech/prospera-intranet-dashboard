interface SectionCardProps {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}

export function SectionCard({ id, number, title, children }: SectionCardProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-[var(--radius-md)] border border-divider bg-surface p-6 shadow-[0_1px_3px_rgba(46,43,37,0.10)] md:p-8"
    >
      <h2 className="mb-5 flex items-baseline gap-3 text-2xl md:text-[28px]">
        <span className="text-accent">{number}.</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
