import { getAllSeries } from "@/lib/series";
import siteConfig, { asset, type HeroImage } from "@/site.config";
import Navbar from "@/components/Navbar";
import LibrarySegment from "./LibrarySegment";

export default async function Home() {
  const series = (await getAllSeries()).sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <div className="page-bg">
      <Navbar />
      <div className="pt-28 pb-8 px-6 max-w-6xl mx-auto">
        {siteConfig.hero.map((image: HeroImage) => {
          /* eslint-disable @next/next/no-img-element */
          const img = (
            <img
              key={image.src}
              src={asset(image.src)}
              alt={image.alt ?? ""}
              width={image.width}
            />
          );
          /* eslint-enable @next/next/no-img-element */
          return image.alignEnd ? (
            <div
              key={image.src}
              className="text-xl uppercase tracking-widest font-bold mb-2 justify-end flex"
              style={{ fontSize: "50px", whiteSpace: "pre" }}
            >
              {img}
            </div>
          ) : (
            img
          );
        })}
      </div>
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {siteConfig.sections.map((section) => (
          <LibrarySegment
            key={section.id}
            series={series.filter((s) => s.section === section.id)}
            title={section.title}
            subtitle={section.subtitle}
            order={section.order}
          />
        ))}
      </main>
    </div>
  );
}
