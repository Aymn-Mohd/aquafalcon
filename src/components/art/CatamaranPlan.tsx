// Top-down line drawing of the twin-pontoon hull. Callout numbers match the
// systems grid (01 navigation, 02 detection, 03 extraction, 04 hull).

const HULL_HALF = 32;
const BOW = 70;
const SHOULDER = 210;
const STERN = 600;

function hull(cx: number) {
  const l = cx - HULL_HALF;
  const r = cx + HULL_HALF;
  return `M ${cx} ${BOW} C ${r - 4} ${BOW + 50} ${r} ${BOW + 90} ${r} ${SHOULDER} L ${r} ${STERN} L ${l} ${STERN} L ${l} ${SHOULDER} C ${l} ${BOW + 90} ${l + 4} ${BOW + 50} ${cx} ${BOW} Z`;
}

const callouts = [
  { n: "04", from: [332, 520], y: 520 },
  { n: "01", from: [240, 430], y: 430 },
  { n: "03", from: [244, 330], y: 330 },
  { n: "02", from: [236, 270], y: 230 },
] as const;

export function CatamaranPlan({ className = "" }: { className?: string }) {
  const A = 140;
  const B = 300;
  const mid = (A + B) / 2;

  return (
    <svg
      role="img"
      aria-label="Top-down line drawing of the AquaFalcon twin-pontoon catamaran hull"
      className={className}
      viewBox="0 0 480 760"
      fill="none"
      stroke="currentColor"
    >
      <defs>
        <pattern id="plan-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" stroke="#E6E6E6" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="480" height="760" fill="url(#plan-grid)" stroke="none" />
      <path d={`M ${mid} 20 V 740`} stroke="#8A8A8A" strokeDasharray="2 6" strokeWidth="1" />

      {/* Camera field of view */}
      <path d={`M ${mid} 262 L ${mid - 70} 40 M ${mid} 262 L ${mid + 70} 40`} stroke="#8A8A8A" strokeDasharray="4 5" strokeWidth="1" />
      <path d={`M ${mid - 70} 40 Q ${mid} 22 ${mid + 70} 40`} stroke="#8A8A8A" strokeWidth="1" />

      {/* Hulls */}
      <g strokeWidth="1.5">
        <path d={hull(A)} fill="#FFFFFF" />
        <path d={hull(B)} fill="#FFFFFF" />
      </g>
      <g strokeWidth="1" stroke="#8A8A8A">
        <path d={`M ${A} ${BOW + 20} V ${STERN - 10} M ${B} ${BOW + 20} V ${STERN - 10}`} strokeDasharray="3 5" />
        {[260, 340, 420, 500].map((y) => (
          <path key={y} d={`M ${A - HULL_HALF} ${y} H ${A + HULL_HALF} M ${B - HULL_HALF} ${y} H ${B + HULL_HALF}`} />
        ))}
      </g>

      {/* Adjustable divider funnel */}
      <g strokeWidth="1.5">
        <path d={`M ${A + HULL_HALF} 140 L ${mid - 10} 222 M ${B - HULL_HALF} 140 L ${mid + 10} 222`} />
        <circle cx={A + HULL_HALF} cy="140" r="4" fill="#FFFFFF" />
        <circle cx={B - HULL_HALF} cy="140" r="4" fill="#FFFFFF" />
      </g>

      {/* Crossbeams + deck */}
      <g strokeWidth="1.5" fill="#FFFFFF">
        <rect x={A + HULL_HALF} y="230" width={B - A - HULL_HALF * 2} height="20" />
        <rect x={A + HULL_HALF} y="470" width={B - A - HULL_HALF * 2} height="20" />
        <rect x={mid - 40} y="250" width="80" height="220" />
      </g>

      {/* Camera / compute */}
      <rect x={mid - 14} y="258" width="28" height="18" strokeWidth="1.5" />

      {/* Peristaltic pump */}
      <g strokeWidth="1.5">
        <circle cx={mid} cy="330" r="22" />
        <g className="anim-spin" style={{ transformOrigin: `${mid}px 330px` }}>
          {[0, 120, 240].map((deg) => {
            const a = (deg * Math.PI) / 180;
            return <circle key={deg} cx={(mid + Math.sin(a) * 14).toFixed(2)} cy={(330 - Math.cos(a) * 14).toFixed(2)} r="4" />;
          })}
        </g>
        <path d={`M ${mid} 230 V 308`} strokeDasharray="3 3" />
      </g>

      {/* Autopilot / GNSS */}
      <g strokeWidth="1.5">
        <circle cx={mid} cy="430" r="12" />
        <path d={`M ${mid - 20} 430 H ${mid + 20} M ${mid} 410 V 450`} strokeWidth="1" />
        <circle cx={mid} cy="430" r="26" strokeWidth="1" strokeDasharray="2 4" className="anim-blink" />
      </g>

      {/* Thrusters */}
      <g strokeWidth="1.5" fill="#FFFFFF">
        <rect x={A - 12} y={STERN} width="24" height="22" />
        <rect x={B - 12} y={STERN} width="24" height="22" />
        <path d={`M ${A - 16} ${STERN + 30} H ${A + 16} M ${B - 16} ${STERN + 30} H ${B + 16}`} />
      </g>

      {/* Wake */}
      <g strokeWidth="1" stroke="#8A8A8A">
        {[A, B].map((x) => (
          <g key={x}>
            <path className="anim-dash" d={`M ${x - 10} ${STERN + 38} L ${x - 44} 750`} strokeDasharray="8 6" />
            <path className="anim-dash" d={`M ${x + 10} ${STERN + 38} L ${x + 44} 750`} strokeDasharray="8 6" />
            <path className="anim-dash" d={`M ${x} ${STERN + 38} V 750`} strokeDasharray="2 8" />
          </g>
        ))}
      </g>

      {/* Callouts */}
      <g strokeWidth="1">
        {callouts.map((c) => (
          <g key={c.n}>
            <path d={`M ${c.from[0]} ${c.from[1]} L 360 ${c.y} H 404`} />
            <circle cx={c.from[0]} cy={c.from[1]} r="2.5" fill="currentColor" />
            <text
              x="412"
              y={c.y + 4}
              fill="currentColor"
              stroke="none"
              fontFamily="var(--font-mono)"
              fontSize="13"
              letterSpacing="1.5"
            >
              {c.n}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
