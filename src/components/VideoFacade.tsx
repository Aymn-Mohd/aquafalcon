"use client";

import { useState } from "react";

/**
 * Click-to-load YouTube player. Renders a plain link (works without JS) and only
 * loads the privacy-enhanced embed after the visitor asks for it, so the page
 * ships no third-party script or cookies on load.
 */
export function VideoFacade({ id, title, href, platform }: { id: string; title: string; href: string; platform: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full border border-graphite bg-ink">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        setPlaying(true);
      }}
      className="group relative block aspect-video w-full overflow-hidden border border-graphite bg-ink text-paper"
    >
      <svg aria-hidden="true" focusable="false" className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor">
        <defs>
          <pattern id="vid-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" strokeOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="640" height="360" fill="url(#vid-grid)" stroke="none" />
        <path d="M 16 16 h 24 M 16 16 v 24 M 624 16 h -24 M 624 16 v 24 M 624 344 h -24 M 624 344 v -24" strokeOpacity="0.6" />
        <circle cx="320" cy="180" r="56" strokeOpacity="0.5" className="transition-[stroke-opacity] group-hover:[stroke-opacity:1]" />
        <circle cx="320" cy="180" r="84" strokeOpacity="0.15" strokeDasharray="2 6" />
        <path d="M 306 156 L 346 180 L 306 204 Z" fill="currentColor" stroke="none" />
      </svg>
      <span className="label absolute bottom-4 left-4 flex items-center gap-3 md:bottom-6 md:left-6">
        <span>{title}</span>
        <span className="text-steel">/ {platform}</span>
      </span>
      <span className="sr-only">: play video (opens on {platform} without JavaScript)</span>
    </a>
  );
}
