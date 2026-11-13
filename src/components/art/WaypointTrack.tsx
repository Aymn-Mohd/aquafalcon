// Horizontal waypoint track with a path that traces itself between dots.

const pts: [number, number][] = [
  [20, 70],
  [180, 40],
  [340, 92],
  [520, 50],
  [700, 100],
  [880, 36],
  [1060, 84],
  [1240, 54],
  [1400, 76],
];

export function WaypointTrack({ className = "" }: { className?: string }) {
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"} ${x} ${y}`).join(" ");
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 1420 130"
      fill="none"
      stroke="currentColor"
    >
      <path d="M 0 120 H 1420" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" />
      {Array.from({ length: 72 }, (_, i) => (
        <path key={i} d={`M ${i * 20} 120 V ${i % 5 === 0 ? 108 : 114}`} strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
      ))}
      <path d={d} strokeOpacity="0.2" strokeDasharray="2 6" vectorEffect="non-scaling-stroke" />
      <path
        d={d}
        className="anim-trace"
        style={{ ["--len" as string]: 1700 }}
        strokeDasharray="1700"
        strokeOpacity="0.8"
        strokeWidth="1.25"
      />
      {pts.map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3.5" fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}
