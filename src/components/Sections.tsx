import { site } from "@/config/site";
import { CatamaranPlan } from "./art/CatamaranPlan";
import { HeadingRing } from "./art/HeadingRing";
import { WaypointTrack } from "./art/WaypointTrack";
import { Arrow, ExternalLink, Label, SourceRefs } from "./ui";
import { PhotoGallery } from "./PhotoGallery";
import { VideoFacade } from "./VideoFacade";

const delay = (i: number) => ({ ["--d" as string]: `${i * 90}ms` });
const pad = (i: number) => String(i + 1).padStart(2, "0");

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
              <span className="label text-graphite">{pad(i)}</span>
              <div>
                <p className="stat">
                  {s.value}
                  <SourceRefs sources={s.sources} />
                </p>
                <p className="mt-4 max-w-md text-lg leading-snug text-graphite md:text-xl">{s.caption}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid-12 mt-16 gap-y-10 md:mt-24">
          {p.points.map((pt, i) => (
            <li key={pt.title} data-reveal style={delay(i)} className="col-span-4 border-t border-ink pt-6">
              <p className="label text-graphite">{pad(i)}</p>
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

export function WorldView() {
  const w = site.worldView;
  return (
    <section id="world-view" aria-labelledby="world-view-label" className="bg-ink py-24 text-paper md:py-36">
      <div className="shell">
        <Label as="h2" id="world-view-label" dot className="text-fog">
          {w.label}
        </Label>

        <p data-reveal className="mt-10 max-w-[30ch] text-[clamp(1.75rem,3.6vw,3.5rem)] font-medium leading-[1.1] tracking-tight">
          <span className="font-mono text-[0.5em] tracking-normal text-fog">{w.lead.date}</span>{" "}
          <span className="block pt-2">
            {w.lead.text}
            <SourceRefs sources={w.lead.sources} />
          </span>
        </p>

        <ul className="mt-14 grid border-t border-l border-graphite sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {w.stats.map((s, i) => (
            <li
              key={s.value}
              data-reveal
              style={delay(i % 3)}
              className="flex min-h-56 flex-col justify-between gap-8 border-r border-b border-graphite p-6 md:p-8"
            >
              <span className="label text-steel">{pad(i)}</span>
              <div>
                <p className="stat">
                  {s.value}
                  <SourceRefs sources={s.sources} />
                </p>
                <p className="mt-3 text-base leading-snug text-fog md:text-lg">{s.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Cost() {
  const c = site.cost;
  return (
    <section id="cost" aria-labelledby="cost-label" className="bg-paper py-24 text-ink md:py-36">
      <div className="shell">
        <Label as="h2" id="cost-label">
          {c.label}
        </Label>

        <div className="grid-12 mt-12 gap-y-16 md:mt-16">
          {c.cases.map((k, i) => (
            <article key={k.title} data-reveal style={delay(i)} className="col-span-4 flex flex-col md:col-span-6">
              <h3 className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-tight tracking-tight">{k.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-graphite">{k.intro}</p>

              <div className="mt-8 border-t border-ink pt-6">
                <p className="label text-graphite">{c.totalLabel}</p>
                <p className="stat mt-3">{k.total}</p>
                <p className="label mt-2 normal-case tracking-[0.04em] text-graphite">{k.range}</p>
              </div>

              <ul className="mt-6 flex flex-col gap-2 text-base leading-snug md:text-lg">
                {k.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>

              <p className="label mt-10 text-graphite">{c.breakdownLabel}</p>
              <dl className="mt-3 border-t border-fog">
                {k.rows.map((r) => (
                  <div key={r.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 border-b border-fog py-3">
                    <dt className="text-base leading-snug">{r.label}</dt>
                    <dd className="text-right font-mono text-base font-medium">{r.value}</dd>
                    <dd className="col-span-2 font-mono text-xs leading-relaxed text-graphite">{r.range}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 font-mono text-xs leading-relaxed text-graphite">
                <span className="label mr-2">{c.sourcesLabel}</span>
                {k.sources.map((s, j) => (
                  <span key={s.href}>
                    {j > 0 && "; "}
                    <ExternalLink href={s.href} className="ulink">
                      {s.label}
                    </ExternalLink>
                  </span>
                ))}
                . {c.footnote}
              </p>
            </article>
          ))}
        </div>
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
          <figure data-reveal className="col-span-4 border border-fog md:col-span-5">
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

        <PhotoGallery />
      </div>
    </section>
  );
}

function StatusLabel({ gen, status, live = false }: { gen: string; status: string; live?: boolean }) {
  return (
    <h3 className="label flex items-center gap-3 text-fog">
      {live ? <span className="dot anim-blink" aria-hidden="true" /> : <span className="inline-block h-2 w-2 bg-paper" aria-hidden="true" />}
      <span className="text-paper">{gen}</span>
      <span aria-hidden="true">|</span>
      <span>{status}</span>
    </h3>
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

        {/* Gen-1 */}
        <div className="mt-12 border-t border-graphite pt-8 md:mt-16">
          <StatusLabel gen={t.gen1.label} status={t.gen1.status} />
          <ul className="grid-12 mt-10 gap-y-14 md:mt-12">
            {t.gen1.stats.map((s, i) => (
              <li key={s.value} data-reveal style={delay(i)} className="col-span-4 md:col-span-6">
                <p className="giant">{s.value}</p>
                <p className="label mt-4 text-fog">{s.caption}</p>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-14 md:mt-20 md:w-2/3">
            <VideoFacade
              id={t.gen1.video.youtubeId}
              title={t.gen1.video.title}
              href={t.gen1.video.href}
              platform={t.gen1.video.platform}
            />
          </div>
        </div>

        {/* Gen-2 */}
        <div className="mt-20 border-t border-graphite pt-8 md:mt-28">
          <StatusLabel gen={t.gen2.label} status={t.gen2.status} live />
          <ul className="grid-12 mt-10 gap-y-6 md:mt-12">
            {t.gen2.items.map((item, i) => (
              <li key={item.index} data-reveal style={delay(i)} className="col-span-4 flex min-h-56 flex-col justify-between gap-10 border border-graphite p-6 md:p-8">
                <span className="label text-steel">{item.index}</span>
                <div>
                  <h4 className="text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">{item.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-fog">{item.body}</p>
                </div>
              </li>
            ))}
            <li data-reveal style={delay(2)} className="col-span-4">
              <ExternalLink
                href={t.gen2.post.href}
                className="flex h-full min-h-56 flex-col justify-between gap-10 border border-graphite p-6 transition-colors hover:bg-graphite md:p-8"
              >
                <span className="label flex items-center justify-between text-fog">
                  <span>
                    {t.gen2.post.platform} / {t.gen2.post.handle}
                  </span>
                  <Arrow external />
                </span>
                <span className="text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">
                  <span className="ulink">{t.gen2.post.title}</span>
                </span>
              </ExternalLink>
            </li>
          </ul>
        </div>

        <p data-reveal className="mt-16 max-w-3xl border-t border-graphite pt-8 text-xl leading-snug md:mt-24 md:text-2xl">
          {t.builder}
        </p>
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
            <SourceRefs sources={[m.source]} />
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
            <li key={c.title} data-reveal style={delay(i)} className="col-span-4 border-t border-ink pt-6">
              <p className="label text-graphite">{pad(i)}</p>
              <p className="mt-4 text-xl leading-snug md:text-2xl">
                <strong className="font-semibold">{c.title}:</strong> {c.body}
              </p>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-20 md:mt-28">
          <h3 className="label text-graphite">{m.methods.title}</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink">
                  {m.methods.headers.map((h) => (
                    <th key={h} scope="col" className="label py-3 pr-6 font-medium text-graphite">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {m.methods.rows.map(([method, desc, limit]) => (
                  <tr key={method} className="border-b border-fog align-top">
                    <th scope="row" className="py-5 pr-6 text-lg font-semibold leading-snug md:text-xl">
                      {method}
                    </th>
                    <td className="py-5 pr-6 text-base leading-relaxed text-graphite">{desc}</td>
                    <td className="py-5 text-base leading-relaxed text-graphite">{limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
