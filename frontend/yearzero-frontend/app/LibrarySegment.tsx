import type { Series } from "@/lib/series";
import SeriesCard from "./SeriesCard";

type Props = {
  series: Series[];
  title: string;
  subtitle: string;
};

export default function LibrarySegment({ series, title, subtitle }: Props) {
  return (
    <section className="mb-12">
      <p
        className="text-md uppercase tracking-widest font-semibold mb-1"
        style={{ color: "var(--accent)" }}
      >
        {series.length} Series
      </p>
      <h1
        className="font-black text-4xl md:text-5xl tracking-tighter "
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </h1>
      <h2
        className="font-black text-xl md:text-2xl tracking-tighter mb-10"
        style={{ color: "var(--foreground)" }}
      >
        {subtitle}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {series.map((s) => (
          <SeriesCard key={s.slug} series={s} />
        ))}
      </div>
    </section>
  );
}
