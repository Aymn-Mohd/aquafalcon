import { site } from "@/config/site";
import { CatamaranPlan } from "./art/CatamaranPlan";
import { HeadingRing } from "./art/HeadingRing";
import { WaypointTrack } from "./art/WaypointTrack";
import { Arrow, ExternalLink, Label, SourceRef } from "./ui";
import { VideoFacade } from "./VideoFacade";

const delay = (i: number) => ({ ["--d" as string]: `${i * 90}ms` });

export function Problem() {
  const p = site.problem;
  return (
    <section id="problem" aria-labelledby="problem-label" className="bg-paper py-24 text-ink md:py-36">
      <div className="shell">
        <Label as="h2" id="problem-label">
          {p.label}
        </Label>

        <ul className="mt-12 grid border-t border-l border-fog md:mt-16 md:grid-cols-2">
          {p.stats.map((s, i) => (
            <li
              key={s.value}
              data-reveal
              style={delay(i)}
              className="flex min-h-64 flex-col justify-between gap-10 border-r border-b border-fog p-6 md:min-h-80 md:p-10"
            >
              <span className="label text-graphite">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="stat">
                  {s.value}
                  <SourceRef n={i + 1} href={s.source.href} label={s.source.label} />
                </p>
                <p className="mt-4 max-w-md text-lg leading-snug text-graphite md:text-xl">{s.caption}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid-12 mt-16 gap-y-10 md:mt-24">
          {p.points.map((pt, i) => (
            <li key={pt.title} data-reveal style={delay(i)} className="col-span-4 border-t border-ink pt-6">
              <p className="label text-graphite">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-4 text-xl leading-snug md:text-2xl">
                <strong className="font-semibold">{pt.title}:</strong> {pt.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Goal() {
  const g = site.goal;
  return (
    <section id="goal" aria-labelledby="goal-label" className="relative overflow-hidden bg-ink py-28 text-paper md:py-44">
      <HeadingRing className="pointer-events-none absolute -right-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 text-paper md:-right-24 md:h-[44rem] md:w-[44rem]" />
      <div className="shell relative">
        <Label as="h2" id="goal-label" className="text-fog">
          {g.label}
        </Label>
        <p data-reveal className="display-lg mt-10 max-w-[18ch]">
          {g.line}
        </p>
      </div>
    </section>
  );
}

export function Systems() {
  const s = site.systems;
  return (
    <section id="systems" aria-labelledby="systems-label" className="bg-paper py-24 text-ink md:py-36">
      <div className="shell">
        <div className="grid-12 gap-y-6">
          <Label as="h2" id="systems-label" className="col-span-4 md:col-span-12">
            {s.label}
          </Label>
          <p data-reveal className="col-span-4 text-[clamp(1.5rem,3.2vw,3rem)] font-medium leading-[1.1] tracking-tight md:col-span-10 lg:col-span-9">
            {s.intro}
          </p>
        </div>

        <div className="grid-12 mt-16 gap-y-12 md:mt-24">
          <figure id="vessel" data-reveal className="col-span-4 border border-fog md:col-span-5">
            <CatamaranPlan className="mx-auto block h-auto w-full max-w-[30rem] text-ink" />
          </figure>

          <ul className="col-span-4 grid self-start border-t border-l border-fog sm:grid-cols-2 md:col-span-7">
            {s.items.map((item, i) => (
              <li key={item.index} data-reveal style={delay(i)} className="flex flex-col gap-8 border-r border-b border-fog p-6 md:min-h-72 md:p-8">
                <span className="label text-graphite">{item.index}</span>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-graphite">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Traction() {
  const t = site.traction;
  return (
    <section id="traction" aria-labelledby="traction-label" className="bg-ink py-24 text-paper md:py-36">
      <div className="shell">
        <Label as="h2" id="traction-label" className="text-fog">
          {t.label}
        </Label>
        <WaypointTrack className="mt-12 block h-auto w-full text-paper md:mt-16" />
        <ul className="grid-12 mt-10 gap-y-14 md:mt-14">
          {t.stats.map((s, i) => (
            <li key={s.value} data-reveal style={delay(i)} className="col-span-4 md:col-span-6">
              <p className="giant">{s.value}</p>
              <p className="label mt-4 text-fog">{s.caption}</p>
            </li>
          ))}
        </ul>

        <ul className="grid-12 mt-20 gap-y-6 md:mt-28">
          <li data-reveal className="col-span-4 md:col-span-8">
            <h3 className="sr-only">{t.media.video.title}</h3>
            <VideoFacade
              id={t.media.video.youtubeId}
              title={t.media.video.title}
              href={t.media.video.href}
              platform={t.media.video.platform}
            />
          </li>
          <li data-reveal style={delay(1)} className="col-span-4 md:col-span-4">
            <ExternalLink
              href={t.media.post.href}
              className="group flex h-full min-h-56 flex-col justify-between gap-10 border border-graphite p-6 transition-colors hover:bg-graphite md:p-8"
            >
              <span className="label flex items-center justify-between text-fog">
                <span>
                  {t.media.post.platform} / {t.media.post.handle}
                </span>
                <Arrow external />
              </span>
              <span className="text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">
                <span className="ulink">{t.media.post.title}</span>
              </span>
            </ExternalLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function Market() {
  const m = site.market;
  return (
    <section id="market" aria-labelledby="market-label" className="bg-paper py-24 text-ink md:py-36">
      <div className="shell">
        <Label as="h2" id="market-label">
          {m.label}
        </Label>
        <div className="grid-12 mt-12 gap-y-8 md:mt-16">
          <p data-reveal className="giant col-span-4 md:col-span-12">
            {m.value}
            <SourceRef n={5} href={m.source.href} label={m.source.label} />
          </p>
          <div data-reveal className="col-span-4 md:col-span-8">
            <p className="text-xl leading-snug md:text-[1.75rem] md:leading-[1.25]">{m.caption}</p>
            <p className="label mt-6 text-graphite">
              <ExternalLink href={m.source.href} className="ulink">
                {m.source.label}
              </ExternalLink>
            </p>
          </div>
        </div>

        <ul className="grid-12 mt-16 gap-y-10 md:mt-24">
          {m.columns.map((c, i) => (
            <li key={c.title} data-reveal style={delay(i)} className="col-span-4 border-t border-ink pt-6 md:col-span-6">
              <p className="label text-graphite">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-4 text-xl leading-snug md:text-2xl">
                <strong className="font-semibold">{c.title}:</strong> {c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  const c = site.contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-b border-graphite bg-ink py-24 text-paper md:py-36">
      <div className="shell">
        <Label className="text-fog">{c.label}</Label>
        <div className="grid-12 mt-10 gap-y-14">
          <h2 id="contact-title" data-reveal className="display col-span-4 md:col-span-12">
            {c.title}
          </h2>

          <dl data-reveal className="col-span-4 border-t border-graphite md:col-span-7">
            {c.details.map((d) => (
              <div key={d.term} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-b border-graphite py-4 md:grid-cols-[9rem_minmax(0,1fr)]">
                <dt className="label pt-1 text-steel">{d.term}</dt>
                <dd className="break-words text-lg">
                  {d.href ? (
                    d.external ? (
                      <ExternalLink href={d.href} className="ulink">
                        {d.value}
                      </ExternalLink>
                    ) : (
                      <a href={d.href} className="ulink">
                        {d.value}
                      </a>
                    )
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div data-reveal className="col-span-4 flex items-end md:col-span-5">
            <ExternalLink
              href={c.cta.href}
              className="btn btn-solid-light min-h-20 w-full px-6 text-sm md:min-h-24 md:text-base"
            >
              {c.cta.label}
              <Arrow external />
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
