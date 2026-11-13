import { site } from "@/config/site";
import { HeroField } from "./art/HeroField";
import { Arrow, ExternalLink, Label } from "./ui";

export function Hero() {
  const h = site.hero;
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-6.25rem)] flex-col justify-end overflow-hidden bg-ink text-paper lg:min-h-[calc(100svh-4rem)]"
    >
      <HeroField />
      <div className="shell relative pt-24 pb-14 md:pb-20">
        <div className="grid-12 gap-y-8">
          <div className="col-span-4 md:col-span-10 lg:col-span-8">
            <Label dot className="text-fog">
              {h.label}
            </Label>
            <h1 id="hero-title" className="display mt-6">
              {h.title}
            </h1>
            <p className="mt-4 text-[clamp(1.25rem,2.4vw,2rem)] font-medium leading-tight tracking-tight">{h.sub}</p>
            <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-fog md:text-lg">{h.line}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ExternalLink href={h.primary.href} className="btn btn-solid-light sm:min-w-56">
                {h.primary.label}
                <Arrow external />
              </ExternalLink>
              <a href={h.secondary.href} className="btn btn-ghost-light sm:min-w-56">
                {h.secondary.label}
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
