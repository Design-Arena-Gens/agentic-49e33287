import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={`section` + (className ? ` ${className}` : "")}>
      <div className="panel ambient-borders">
        <header>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
