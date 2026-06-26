import type { Series } from "@/lib/series";
import SeriesCard from "./SeriesCard";
import {
  Syne_Mono,
  Lacquer,
  Rock_Salt,
  Nothing_You_Could_Do,
  IM_Fell_DW_Pica_SC,
  Gloria_Hallelujah,
} from "next/font/google";
const SyneMono = Syne_Mono({
  weight: "400",
  subsets: ["latin"],
});
const Lacquer1 = Lacquer({
  weight: "400",
  subsets: ["latin"],
});
const RockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});
const NothingYouCouldDo = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"],
});
const IMFellDWPicaSC = IM_Fell_DW_Pica_SC({
  weight: "400",
  subsets: ["latin"],
});
const GloriaHallelujah = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
});
type Props = {
  series: Series[];
  title: string;
  subtitle: string;
};
const seriesOrder = [
  "GeroiUploads",
  "TetsuyaUploads",
  "KenichiUploads",
  "Kenichi 2 - Masters Arc",
  "NakiNoRyuuUploads",
  "ShinKurosawaUpload",
  "NikaidouUploads",
  "Kingdom Omakes",
];

export default function LibrarySegment({ series, title, subtitle }: Props) {
  if (title == "Active Releases") {
    series.sort((a, b) => {
      const aIndex = seriesOrder.indexOf(a.slug);
      const bIndex = seriesOrder.indexOf(b.slug);
      return aIndex - bIndex;
    });
  }
  return (
    <section className="mb-12">
      <p
        className="text-md uppercase tracking-widest font-semibold mb-1"
        style={{ color: "var(--accent)" }}
      >
        {series.length} Series
      </p>
      <h1
        className={`font-black text-4xl md:text-5xl tracking-tighter ${SyneMono.className}`}
        style={{ color: "var(--foreground)" }}
      >
        {title.toUpperCase()}
      </h1>
      <h2
        className={`font-black text-xl md:text-2xl tracking-tighter mb-10 ${GloriaHallelujah.className}`}
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
