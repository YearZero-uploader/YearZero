import { getAllSeries } from "@/lib/series";
import Navbar from "@/components/Navbar";
import SeriesCard from "./SeriesCard";

export default async function Home() {
  const series = (await getAllSeries()).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Navbar />

      <div className="pt-28 pb-8 px-6 max-w-6xl mx-auto">
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-1"
          style={{ color: "var(--accent)" }}
        >
          {series.length} Series
        </p>
        <h1
          className="font-black text-4xl md:text-5xl tracking-tighter"
          style={{ color: "var(--foreground)" }}
        >
          The Library
        </h1>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {series.map((s) => (
            <SeriesCard key={s.slug} series={s} />
          ))}
        </div>
      </main>
    </div>
  );
}
