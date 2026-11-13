import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const dynamic = "force-static";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CHEVRON = "0,70 29,0 43,0 72,70 55,70 36,23 17,70";

export default function OpengraphImage() {
  const letters = Array.from(site.wordmark);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#FFFFFF",
          padding: 72,
          backgroundImage:
            "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#E6E6E6" }}>{site.hero.label}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "flex-end", fontSize: 112, fontWeight: 700, lineHeight: 1 }}>
            {letters.map((ch, i) =>
              ch === "A" ? (
                <svg key={i} width="82" height="80" viewBox="0 0 72 70" style={{ marginRight: 14, marginBottom: 10 }}>
                  <polygon points={CHEVRON} fill="#FFFFFF" />
                </svg>
              ) : (
                <span key={i} style={{ marginRight: 14 }}>
                  {ch}
                </span>
              ),
            )}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#E6E6E6" }}>{site.hero.sub}</div>
        </div>
      </div>
    ),
    size,
  );
}
