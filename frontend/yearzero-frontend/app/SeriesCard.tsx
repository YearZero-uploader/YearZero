"use client";
import type { Series } from "@/lib/series";
import { useEffect, useState } from "react";
type Props = {
  series: Series;
};

export default function SeriesCard({ series }: Props) {
  const { title, description, artist, author, cover, chapterCount, url } =
    series;
  const credit = artist === author ? author : `${author} / ${artist}`;
  const excerpt =
    description.length > 120
      ? description.slice(0, 120).trimEnd() + "…"
      : description;
  const [hasNew, setHasNew] = useState(false);
  function isNewChapter() {
    const data = JSON.parse(
      localStorage.getItem(`${title} ChapterCount`) ?? "null",
    );

    if (data === null) {
      localStorage.setItem(
        `${title} ChapterCount`,
        JSON.stringify({
          chapterCount: chapterCount.toString(),
          // eslint-disable-next-line react-hooks/purity
          time: Date.now(),
        }),
      );
      return false;
    }

    const savedTime = new Date(data.time);
    const diffTimeFromCheck =
      savedTime.getTime() > Date.now() - 1000 * 60 * 60 * 24;
    if (data.chapterCount != chapterCount.toString()) {
      localStorage.setItem(
        `${title} ChapterCount`,
        JSON.stringify({
          chapterCount: chapterCount.toString(),
          // eslint-disable-next-line react-hooks/purity
          time: Date.now(),
        }),
      );
      return true;
    }
    /* const firstTimeVisit = new Date(
      Number(localStorage.getItem("firstTimeVisit")),
    );
    const diffTimeFromFirstVisit =
      firstTimeVisit.getTime() > Date.now() - 1000 * 60 * 60 * 24;

    if (diffTimeFromFirstVisit) {
      return false;
    }*/
    if (diffTimeFromCheck) {
      return true;
    }
    localStorage.setItem(
      `${title} ChapterCount`,
      JSON.stringify({
        chapterCount: chapterCount.toString(),
        // eslint-disable-next-line react-hooks/purity
        time: Date.now(),
      }),
    );

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
          className="font-bold text-md leading-snug tracking-tight line-clamp-2"
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
      </div>
    </a>
  );
}
