// Hero background: grid with crosshairs, drifting sea-surface lines, a top-down
// catamaran inside a heading ring, its wake, and a traced waypoint path.

const W = 1440;
const H = 900;
const PERIOD = 240;

function wave(y: number, amp: number, phase: number) {
  // Sine-like wave spanning one extra period so it can translate by PERIOD and loop.
  const half = PERIOD / 2;
  let d = `M ${-PERIOD + phase} ${y}`;
  for (let x = -PERIOD + phase; x < W + PERIOD; x += PERIOD) {
    d += ` C ${x + half * 0.36} ${y - amp}, ${x + half * 0.64} ${y - amp}, ${x + half} ${y}`;
    d += ` S ${x + PERIOD * 0.82} ${y + amp}, ${x + PERIOD} ${y}`;
  }
  return d;
}

const rows = Array.from({ length: 11 }, (_, i) => ({
  y: 470 + i * 40,
  amp: 3 + i * 0.9,
  phase: (i * 53) % PERIOD,
  opacity: 0.06 + i * 0.012,
}));

const waypoints: [number, number][] = [
  [560, 760],
  [760, 690],
  [900, 560],
  [1040, 470],
  [1180, 330],
];

export function HeroField() {
  const cx = 1060;
  const cy = 430;
  const path = waypoints.map(([x, y], i) => `${i ? "L" : "M"} ${x} ${y}`).join(" ");

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute inset-0 h-full w-full text-paper"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
        <pattern id="hero-cross" width="240" height="240" patternUnits="userSpaceOnUse">
          <path d="M 234 240 H 246 M 240 234 V 246 M -6 0 H 6 M 0 -6 V 6" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1" />
        </pattern>
        <linearGradient id="hero-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0A0A0A" stopOpacity="0.92" />
          <stop offset="0.45" stopColor="#0A0A0A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0A0A0A" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width={W} height={H} fill="url(#hero-grid)" />
      <rect width={W} height={H} fill="url(#hero-cross)" />

      <g fill="none" stroke="currentColor" strokeWidth="1">
        {rows.map((r, i) => (
          <g key={r.y} className={i % 2 ? "anim-drift-slow" : "anim-drift"}>
            <path d={wave(r.y, r.amp, r.phase)} strokeOpacity={r.opacity} />
          </g>
        ))}
      </g>

      <g fill="none" stroke="currentColor">
        <path d={path} strokeOpacity="0.18" strokeDasharray="2 6" strokeWidth="1" />
        <path
          d={path}
          className="anim-trace"
          style={{ ["--len" as string]: 900 }}
          strokeDasharray="900"
          strokeOpacity="0.7"
          strokeWidth="1.25"
        />
        {waypoints.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="currentColor" fillOpacity="0.8" stroke="none" />
            <circle cx={x} cy={y} r="9" strokeOpacity="0.3" />
            <text
              x={x + 14}
              y={y + 4}
              fill="currentColor"
              fillOpacity="0.45"
              stroke="none"
              fontFamily="var(--font-mono)"
              fontSize="11"
              letterSpacing="1.5"
            >
              {`WP${String(i + 1).padStart(2, "0")}`}
            </text>
          </g>
        ))}
      </g>

      <g fill="none" stroke="currentColor">
        <circle cx={cx} cy={cy} r="220" strokeOpacity="0.14" />
        <circle cx={cx} cy={cy} r="150" strokeOpacity="0.1" strokeDasharray="3 7" />
        <circle cx={cx} cy={cy} r="80" strokeOpacity="0.1" />
        <g className="anim-spin-slow" style={{ transformOrigin: `${cx}px ${cy}px` }}>
          {Array.from({ length: 72 }, (_, i) => {
            const a = (i * 5 * Math.PI) / 180;
            const long = i % 6 === 0;
            const r1 = long ? 206 : 213;
            return (
              <line
                key={i}
                x1={(cx + Math.sin(a) * r1).toFixed(2)}
                y1={(cy - Math.cos(a) * r1).toFixed(2)}
                x2={(cx + Math.sin(a) * 220).toFixed(2)}
                y2={(cy - Math.cos(a) * 220).toFixed(2)}
                strokeOpacity={long ? 0.45 : 0.2}
              />
            );
          })}
        </g>
        <g className="anim-spin" style={{ transformOrigin: `${cx}px ${cy}px` }}>
          <line x1={cx} y1={cy} x2={cx} y2={cy - 220} strokeOpacity="0.35" />
        </g>
        <path d={`M ${cx - 240} ${cy} H ${cx + 240} M ${cx} ${cy - 240} V ${cy + 240}`} strokeOpacity="0.08" />
      </g>

      <g transform={`translate(${cx} ${cy}) rotate(38)`} fill="none" stroke="currentColor">
        <g strokeWidth="1">
          {[0, 1, 2, 3].map((k) => (
            <g key={k} strokeOpacity={0.5 - k * 0.1}>
              <path className="anim-dash" d={`M -14 40 L ${-40 - k * 26} ${150 + k * 70}`} strokeDasharray="10 6" />
              <path className="anim-dash" d={`M 14 40 L ${40 + k * 26} ${150 + k * 70}`} strokeDasharray="10 6" />
            </g>
          ))}
        </g>
        <g strokeOpacity="0.9" strokeWidth="1.25">
          <path d="M -14 -46 C -6 -36 -6 -28 -6 -18 L -6 40 L -22 40 L -22 -18 C -22 -28 -22 -36 -14 -46 Z" />
          <path d="M 14 -46 C 22 -36 22 -28 22 -18 L 22 40 L 6 40 L 6 -18 C 6 -28 6 -36 14 -46 Z" />
          <path d="M -6 -12 H 6 M -6 24 H 6" />
          <rect x="-5" y="-6" width="10" height="22" />
        </g>
      </g>

      <rect width={W} height={H} fill="url(#hero-fade)" />
    </svg>
  );
}
