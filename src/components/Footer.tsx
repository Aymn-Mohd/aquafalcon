import { site } from "@/config/site";
import { ExternalLink, Wordmark } from "./ui";

export function Footer() {
  const f = site.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-16 md:py-20">
        <div className="grid-12 gap-y-10">
          <div className="col-span-4 md:col-span-5">
            <Wordmark className="text-2xl md:text-3xl" />
            <p className="label mt-4 text-steel">{site.location}</p>
          </div>

          <ul className="col-span-4 flex flex-col gap-1 md:col-span-3">
            {f.links.map((l) => (
              <li key={l.href}>
                <ExternalLink href={l.href} className="ulink inline-flex min-h-11 items-center text-lg">
                  {l.label}
                </ExternalLink>
              </li>
            ))}
          </ul>

          <div className="col-span-4 md:col-span-4">
            <p className="label text-steel">{f.sourcesLabel}</p>
            <ol className="mt-4 flex flex-col gap-2 font-mono text-xs leading-relaxed">
              {f.sources.map((s, i) => (
                <li key={s.href} className="grid grid-cols-[1.5rem_minmax(0,1fr)]">
                  <span className="text-steel">{i + 1}</span>
                  <ExternalLink href={s.href} className="ulink break-words text-fog">
                    {s.label}
                  </ExternalLink>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="label mt-16 border-t border-graphite pt-6 text-steel">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
