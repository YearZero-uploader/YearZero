export type Series = {
  title: string;
  description: string;
  artist: string;
  author: string;
  cover: string;
  chapterCount: number;
  slug: string;
  url: string;
  section: string;
};

type CatalogEntry = {
  title: string;
  url: string;
  section: string;
};

export async function getAllSeries(): Promise<Series[]> {
  const fs = await import("fs/promises");
  const path = await import("path");

  const root = path.resolve(process.cwd(), "../..");
  const catalogPath = path.join(process.cwd(), "catalog.json");

  let entries: CatalogEntry[];
  try {
    const raw = await fs.readFile(catalogPath, "utf-8");
    entries = JSON.parse(raw);
  } catch (err) {
    console.error("[getAllSeries] Failed to read catalog.json:", err);
    return [];
  }

  const results = await Promise.all(
    entries.map(async ({ title: slug, url, section }) => {
      try {
        const raw = await fs.readFile(path.join(root, `${slug}.json`), "utf-8");
        const { chapters, ...meta } = JSON.parse(raw);
        return {
          ...meta,
          chapterCount: chapters ? Object.keys(chapters).length : 0,
          slug,
          url,
          section,
        } as Series;
      } catch (err) {
        console.error(`[getAllSeries] Failed to load "${slug}.json":`, err);
        return null;
      }
    }),
  );

  return results.filter(Boolean) as Series[];
}
