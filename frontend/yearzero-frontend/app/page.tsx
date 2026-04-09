import { getAllSeries } from "@/lib/series";
import Navbar from "@/components/Navbar";
import SeriesCard from "./SeriesCard";
import LibrarySegment from "./LibrarySegment";
export default async function Home() {
  const series = (await getAllSeries()).sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <div className="page-bg">
      <Navbar />

      <div className="pt-28 pb-8 px-6 max-w-6xl mx-auto">
        <div
          className="text-xl uppercase tracking-widest font-bold mb-2 justify-center flex"
          style={{ fontSize: "50px", whiteSpace: "pre" }}
        >
          <p>{"T H I S  I S  T H E  B E G I N N I N G ."}</p>
        </div>
        <div className="justify-center flex">
          <p>{`A product of the Open Source Resistance.`}</p>
        </div>

        <h1
          className="font-black text-4xl md:text-5xl tracking-tighter"
          style={{ color: "var(--foreground)" }}
        >
          {"𝐒εⓇᶤᵉ𝓢 Ｌ𝓘ⓢŦ:"}
        </h1>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <LibrarySegment
          series={series.filter((s) => s.section == "A")}
          title={"Active Releases"}
          subtitle="An updated list of all the current projects taken by YZ"
        />
        <LibrarySegment
          series={series.filter((s) => s.section == "D")}
          title={"Finished Projects"}
          subtitle="All completed projects by YZ"
        />
        <LibrarySegment
          series={series.filter((s) => s.section == "U")}
          title={"Archive"}
          subtitle="Important works that we decided to archive for posterity. No direct connection to YZ"
        />
      </main>
    </div>
  );
}
