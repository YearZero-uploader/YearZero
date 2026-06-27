"use client";
import type { Series } from "@/lib/series";
import { useEffect, useState } from "react";
type Props = {
  series: Series;
};
const FKMYKrazy_Uploads = ["Nikaidou Hell Golf" /*"A Dad's Dad"*/];
export default function SeriesCard({ series }: Props) {
  const {
    title,
    description,
    artist,
    author,
    cover,
    chapterCount,
    url,
    last_updated,
  } = series;
  const credit = artist === author ? author : `${author} / ${artist}`;
  const excerpt =
    description.length > 120
      ? description.slice(0, 120).trimEnd() + "…"
      : description;
  const [hasNew, setHasNew] = useState(false);
  function isNewChapter() {
    const savedTime = new Date(last_updated * 1000);

    const diffTimeFromCheck =
      savedTime.getTime() > Date.now() - 1000 * 60 * 60 * 24;

    if (diffTimeFromCheck) {
      return true;
    }

    return false;
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasNew(isNewChapter());
  }, []);
  // isNewChapter();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-glass rounded-2xl overflow-hidden flex flex-col group"
    >
      {/* Cover */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "2/3", background: "rgba(255,255,255,0.03)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={`${title} cover`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {hasNew && (
          <div
            className="absolute -left-10 top-5 -rotate-45 px-10 py-0.5 text-[18px] font-bold tracking-widest text-white text-center"
            style={{
              background: "rgba(255, 0, 0, 0.8)",
              backdropFilter: "blur(6px)",
              border: "2px solid rgba(0, 0, 0, 0.8)",
            }}
          >
            NEW!!!
          </div>
        )}
        <div
          className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[13px] font-bold text-white"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)" }}
        >
          {chapterCount} ch
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h2
          className="text-[13text-[14px]text-[14px]text-[14px]text-[14px]px] font-bold text-md leading-snug tracking-tight line-clamp-2"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </h2>
        <p
          className="text-[14px] font-medium truncate"
          style={{ color: "var(--accent)" }}
        >
          {credit}
        </p>
        <p
          className="text-[13px] leading-relaxed line-clamp-3 "
          style={{ color: "var(--muted)" }}
        >
          {excerpt}
        </p>
        {FKMYKrazy_Uploads.indexOf(title) > -1 ? (
          <div
            style={{
              maxWidth: "100px",
              display: "inline-block",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "2px 8px",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.6), 0 0 24px 8px rgba(255,255,255,0.15), 0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="/YearZero/FKMTKrazy_logo_by_Portal_alt2forsite.png"
              alt=""
              width="100"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </a>
  );
}
