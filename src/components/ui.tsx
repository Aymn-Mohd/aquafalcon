import { site } from "@/config/site";
import type { ComponentProps, ReactNode } from "react";

/** External link: always new tab, never leaks the opener or referrer. */
export function ExternalLink({ children, ...props }: Omit<ComponentProps<"a">, "target" | "rel">) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      {external ? <path d="M3 11 L11 3 M5 3 H11 V9" /> : <path d="M1 7 H13 M8 2 L13 7 L8 12" />}
    </svg>
  );
}

/** The A of the wordmark: a crossbar-less chevron. Shared with the favicon. */
export const CHEVRON_A = "0,70 29,0 43,0 72,70 55,70 36,23 17,70";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`wordmark inline-flex items-baseline whitespace-nowrap ${className}`}>
      <span className="sr-only">{site.wordmark}</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        {Array.from(site.wordmark).map((ch, i) =>
          ch === "A" ? (
            <svg key={i} viewBox="0 0 72 70" className="mr-[0.12em] inline-block h-[0.7em] w-[0.72em] fill-current">
              <polygon points={CHEVRON_A} />
            </svg>
          ) : (
            <span key={i}>{ch}</span>
          ),
        )}
      </span>
    </span>
  );
}

/** Small uppercase mono section label, e.g. "01 / PROBLEM". */
export function Label({
  children,
  as: Tag = "p",
  id,
  className = "",
  dot = false,
}: {
  children: ReactNode;
  as?: "p" | "h2";
  id?: string;
  className?: string;
  dot?: boolean;
}) {
  return (
    <Tag id={id} className={`label flex items-center gap-3 ${className}`}>
      {dot && <span className="dot anim-blink" aria-hidden="true" />}
      {children}
    </Tag>
  );
}

/** Superscript numbered source link. */
export function SourceRef({ n, href, label }: { n: number; href: string; label: string }) {
  return (
    <sup className="leading-none">
      <a href={href} target="_blank" rel="noopener noreferrer" className="src ulink" aria-label={`Source ${n}: ${label} (opens in a new tab)`}>
        {n}
      </a>
    </sup>
  );
}
