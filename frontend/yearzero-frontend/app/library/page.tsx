import { getAllSeries } from "@/lib/series";
import Navbar from "@/components/Navbar";
import SeriesCard from "./SeriesCard";

export default async function LibraryPage() {
  const series = (await getAllSeries()).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Navbar activePage="library" />

      {/* Page header */}
      <div className="pt-32 pb-12 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(225,29,72,0.08) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "var(--accent)" }}
          >
            {series.length} Series
          </p>
          <h1
            className="font-black text-5xl md:text-6xl tracking-tighter mb-4"
            style={{ color: "var(--foreground)" }}
          >
            The Library
          </h1>
          <p
            className="max-w-md mx-auto text-base"
            style={{ color: "var(--muted)" }}
          >
            Every series uploaded by Year Zero — browse the full catalogue.
          </p>
        </div>
      </div>

      <div className="divider max-w-6xl mx-auto" />

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {series.map((s) => (
            <SeriesCard key={s.slug} series={s} />
          ))}
        </div>
      </main>

      <footer
        className="py-10 px-6 mt-8"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] font-black"
              style={{ background: "var(--accent)" }}
            >
              YZ
            </span>
            <span className="text-sm font-semibold">Year Zero</span>
          </div>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} Year Zero. The beginning of everything.
          </p>
        </div>
      </footer>
    </div>
  );
}
