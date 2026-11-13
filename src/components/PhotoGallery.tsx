import { site } from "@/config/site";

type PhotoItem = (typeof site.photos)[number];

// Static export: images are pre-sized WebP files in public/photos, so a plain
// <img> with srcset is the lightest option (next/image can't optimize here).
function Photo({ photo, sizes, frame, priority = false }: { photo: PhotoItem; sizes: string; frame: string; priority?: boolean }) {
  const base = `/photos/${photo.name}`;
  return (
    <div className={`relative overflow-hidden bg-fog ${frame}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}-1280.webp`}
        srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w`}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
      />
    </div>
  );
}

function Caption({ i, text }: { i: number; text: string }) {
  return (
    <figcaption className="label mt-3 text-graphite">
      FIG. {String(i + 1).padStart(2, "0")} / {text}
    </figcaption>
  );
}

export function PhotoGallery() {
  const [lead, side, ...rest] = site.photos;
  return (
    <div id="vessel" className="mt-16 md:mt-24">
      <h3 className="label text-graphite">{site.photosLabel}</h3>
      <div className="grid-12 mt-6 gap-y-8 md:gap-y-10">
      <figure data-reveal className="col-span-4 md:col-span-8">
        <Photo photo={lead} sizes="(min-width: 768px) 66vw, 100vw" frame="aspect-[4/3]" />
        <Caption i={0} text={lead.caption} />
      </figure>
      <figure data-reveal style={{ ["--d" as string]: "90ms" }} className="col-span-4 flex flex-col">
        <Photo photo={side} sizes="(min-width: 768px) 33vw, 100vw" frame="aspect-[3/4] md:aspect-auto md:flex-1" />
        <Caption i={1} text={side.caption} />
      </figure>
      {rest.map((p, k) => (
        <figure key={p.name} data-reveal style={{ ["--d" as string]: `${k * 90}ms` }} className="col-span-4">
          <Photo photo={p} sizes="(min-width: 768px) 33vw, 100vw" frame="aspect-[4/5]" />
          <Caption i={k + 2} text={p.caption} />
        </figure>
      ))}
      </div>
    </div>
  );
}
