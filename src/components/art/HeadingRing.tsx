// Radar / heading ring used as a quiet ornament on dark sections.

export function HeadingRing({ className = "" }: { className?: string }) {
  const c = 200;
  return (
    <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 400 400" fill="none" stroke="currentColor">
      <circle cx={c} cy={c} r="190" strokeOpacity="0.25" />
      <circle cx={c} cy={c} r="140" strokeOpacity="0.12" strokeDasharray="2 6" />
      <circle cx={c} cy={c} r="80" strokeOpacity="0.12" />
      <path d={`M ${c} 0 V 400 M 0 ${c} H 400`} strokeOpacity="0.1" />
      <g className="anim-spin-slow" style={{ transformOrigin: `${c}px ${c}px` }}>
        {Array.from({ length: 120 }, (_, i) => {
          const a = (i * 3 * Math.PI) / 180;
          const long = i % 10 === 0;
          const r1 = long ? 172 : 182;
          return (
            <line
              key={i}
              x1={(c + Math.sin(a) * r1).toFixed(2)}
              y1={(c - Math.cos(a) * r1).toFixed(2)}
              x2={(c + Math.sin(a) * 190).toFixed(2)}
              y2={(c - Math.cos(a) * 190).toFixed(2)}
              strokeOpacity={long ? 0.6 : 0.25}
            />
          );
        })}
      </g>
      <g className="anim-spin" style={{ transformOrigin: `${c}px ${c}px` }}>
        <line x1={c} y1={c} x2={c} y2={c - 190} strokeOpacity="0.55" />
        <circle cx={c} cy={c - 120} r="3" fill="currentColor" fillOpacity="0.8" stroke="none" />
      </g>
      <circle cx={c} cy={c} r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
