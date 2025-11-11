interface TimelineEntry {
  time: string;
  title: string;
  body: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="timeline">
      {entries.map((entry) => (
        <article key={entry.title} className="timeline-item">
          <div className="timeline-time">{entry.time}</div>
          <h3 className="timeline-title">{entry.title}</h3>
          <p className="timeline-body">{entry.body}</p>
        </article>
      ))}
    </div>
  );
}
