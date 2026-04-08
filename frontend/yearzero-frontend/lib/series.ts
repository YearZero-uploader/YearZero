export type Series = {
  title: string;
  description: string;
  artist: string;
  author: string;
  cover: string;
  chapterCount: number;
  slug: string;
};

export async function getAllSeries(): Promise<Series[]> {
  const fs = await import("fs/promises");
  const path = await import("path");

  const root = path.resolve(process.cwd(), "../..");
  const catalogPath = path.join(root, "catalog.json");

  let slugs: string[];
  try {
    const raw = await fs.readFile(catalogPath, "utf-8");
    slugs = JSON.parse(raw);
  } catch (err) {
    console.error("[getAllSeries] Failed to read catalog.json:", err);
    return [];
  }

  const results = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const raw = await fs.readFile(path.join(root, `${slug}.json`), "utf-8");
        const { chapters, ...meta } = JSON.parse(raw);
        return {
          ...meta,
          chapterCount: chapters ? Object.keys(chapters).length : 0,
          slug,
        } as Series;
      } catch (err) {
        console.error(`[getAllSeries] Failed to load "${slug}.json":`, err);
        return null;
      }
    })
  );

  return results.filter(Boolean) as Series[];
}
