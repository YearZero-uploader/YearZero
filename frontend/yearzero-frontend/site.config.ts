export type SectionConfig = {
  /** Matches the `section` field of a catalog.json entry. */
  id: string;
  title: string;
  subtitle: string;
  /** Series slugs in the order they should appear; unlisted ones go last. */
  order?: string[];
};

export type HeroImage = {
  /** Path inside public/, without a leading slash. */
  src: string;
  width: number;
  alt?: string;
  /** Push the image to the right edge of the hero. */
  alignEnd?: boolean;
};

export type SeriesBadge = {
  /** Path inside public/, without a leading slash. */
  src: string;
  width: number;
  alt?: string;
};

const siteConfig = {
  name: "Year Zero",
  description: "JOIN THE RESISTANCE.",
  /** Must match basePath in next.config.ts; both read this value. */
  basePath: "/YearZero",

  header: {
    logo: {
      src: "year_zero_logo_long_for_website.png",
      alt: "Year Zero",
    },
    tagline: "A product of the Open Source Resistance.",
  },

  hero: [
    { src: "thisisthebeginning.png", width: 600, alignEnd: true },
    { src: "series_list2.png", width: 600 },
  ] as HeroImage[],

  sections: [
    {
      id: "A",
      title: "Active Releases",
      subtitle: "An updated list of all the current projects taken by YZ",
      order: [
        "GeroiUploads",
        "TetsuyaUploads",
        "KenichiUploads",
        "Kenichi 2 - Masters Arc",
        "NakiNoRyuuUploads",
        "ShinKurosawaUpload",
        "NikaidouUploads",
        "Kingdom Omakes",
      ],
    },
    {
      id: "D",
      title: "Finished Projects",
      subtitle: "All completed projects by YZ",
    },
    {
      id: "U",
      title: "Archive",
      subtitle:
        "Important works that we decided to archive for posterity. No direct connection to YZ",
    },
  ] as SectionConfig[],

  newChapter: {
    /** A series counts as new if a chapter landed within this many hours. */
    withinHours: 24,
    label: "NEW!!!",
  },

  /** Badge image shown on a card, keyed by the series title. */
  badges: {
    "Nikaidou Hell Golf": {
      src: "FKMTKrazy_logo_by_Portal_alt2forsite.png",
      width: 100,
    },
    "Aoi and Teppei": {
      src: "FKMTKrazy_logo_by_Portal_alt2forsite.png",
      width: 100,
    },
  } as Record<string, SeriesBadge>,
};

export default siteConfig;

/** Build a URL for a file in public/, honouring the configured base path. */
export function asset(path: string): string {
  return `${siteConfig.basePath}/${path}`;
}
