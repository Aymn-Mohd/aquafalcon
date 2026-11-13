import { site } from "@/config/site";
import { Arrow, ExternalLink, Wordmark } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite bg-ink text-paper">
      <div className="shell flex h-14 items-center justify-between gap-6 md:h-16">
        <a href="#top" className="flex min-h-11 items-center text-[0.95rem] md:text-base">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="label whitespace-nowrap text-fog transition-colors hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ExternalLink
          href={site.headerCta.href}
          className="btn btn-ghost-light min-h-10 px-4 text-[0.75rem]"
        >
          {site.headerCta.label}
          <Arrow external />
        </ExternalLink>
      </div>

      {/* Compact anchor row for small screens; scrolls inside itself, never the page. */}
      <nav aria-label="Sections" className="border-t border-graphite xl:hidden">
        <ul className="shell no-scrollbar flex h-11 items-center gap-6 overflow-x-auto">
          {site.nav.map((item) => (
            <li key={item.href} className="shrink-0">
              <a href={item.href} className="label flex min-h-11 items-center text-fog hover:text-paper">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
