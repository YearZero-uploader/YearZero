import { getAllSeries } from "@/lib/series";
import Navbar from "@/components/Navbar";
import SeriesCard from "./SeriesCard";

import LibrarySegment from "./LibrarySegment";
export default async function Home() {
  const series = (await getAllSeries()).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
  /*        <h1
          className="font-black text-4xl md:text-5xl tracking-tighter"
          style={{ color: "var(--foreground)" }}
        >
          {"𝐒εⓇᶤᵉ𝓢 Ｌ𝓘ⓢŦ:"}
        </h1>*/

  return (
    <div className="page-bg">
      <Navbar />
      <div className="pt-28 pb-8 px-6 max-w-6xl mx-auto">
        <div
          className="text-xl uppercase tracking-widest font-bold mb-2 justify-end flex"
          style={{ fontSize: "50px", whiteSpace: "pre" }}
        >
          <img src="/YearZero/thisisthebeginning.png" alt="" width="600" />
        </div>

        <img src="/YearZero/series_list2.png" alt="" width="600" />
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
