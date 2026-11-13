// Single source of truth for every word, number, link and source on the site.
// Components read only from here.

export type Source = { label: string; href: string };

export type Stat = {
  value: string;
  caption: string;
  source: Source;
};

export type NavItem = { label: string; href: string };

const PERSONAL_SITE = "https://aymnmohd.me";

export const sources = {
  economicLoss: {
    label: "daraint.org",
    href: "https://daraint.org/wp-content/uploads/2012/09/CVM2ndEd-Carbon-OilSpills.pdf",
  },
  spillVolume: {
    label: "itopf.org",
    href: "https://www.itopf.org/fileadmin/uploads/itopf/data/Documents/Company_Lit/Oil_Spill_Stats_brochure_2024.pdf",
  },
  responseDelay: {
    label: "bbc.com",
    href: "https://www.bbc.com/future/article/20240905-have-we-improved-oil-spill-clean-ups-since-bp-deepwater-horizon",
  },
  wildlife: {
    label: "climaterealityproject.org",
    href: "https://www.climaterealityproject.org/blog/spilling-beans-ecological-and-economic-impacts-oil-spills",
  },
  market: {
    label: "Grand View Research (2024)",
    href: "https://www.grandviewresearch.com/industry-analysis/oil-spill-management-market",
  },
} as const satisfies Record<string, Source>;

export const site = {
  name: "AquaFalcon",
  wordmark: "AQUAFALCON",
  // Set NEXT_PUBLIC_SITE_URL to the deployed origin so OG/canonical URLs are absolute.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "AquaFalcon — Autonomous oil-spill response USV",
  description:
    "Unmanned Surface Vehicle for off-shore oil rigs and oil cleanup tankers. Deployed in 30 mins.",
  location: "Dubai, UAE",

  nav: [
    { label: "Problem", href: "#problem" },
    { label: "Vessel", href: "#vessel" },
    { label: "Systems", href: "#systems" },
    { label: "Traction", href: "#traction" },
    { label: "Market", href: "#market" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],

  headerCta: { label: "Contact", href: PERSONAL_SITE },

  hero: {
    label: "AUTONOMOUS SURFACE VEHICLE",
    title: "AquaFalcon",
    sub: "Autonomous. Selective. Rapid Response.",
    line: "Unmanned Surface Vehicle for off-shore oil rigs and oil cleanup tankers. Deployed in 30 mins.",
    primary: { label: "Get in touch", href: PERSONAL_SITE },
    secondary: { label: "See the systems", href: "#systems" },
  },

  problem: {
    label: "01 / PROBLEM",
    stats: [
      {
        value: "$12B",
        caption: "average global economic loss per year from oil spills.",
        source: sources.economicLoss,
      },
      {
        value: "10K metric tons",
        caption: "spilled annually (tanker + operational spills).",
        source: sources.spillVolume,
      },
      {
        value: "4–12 hours",
        caption: "typical delay before cleanup teams can begin operations.",
        source: sources.responseDelay,
      },
      {
        value: "252K+",
        caption: "Wildlife lost: 250,000 seabirds, 2,800 sea otters, 22 killer whales.",
        source: sources.wildlife,
      },
    ] satisfies Stat[],
    points: [
      { title: "Exponential costs", body: "shoreline cleanup is 100x more expensive." },
      { title: "Time is the enemy", body: "manual response takes hours. Delay = spread." },
      { title: "Compliance crisis", body: "slow response triggers massive fines." },
    ],
  },

  goal: {
    label: "02 / GOAL",
    line: "Cut the cost of oil-spill cleanup and regulatory compliance to a fraction of today's.",
  },

  systems: {
    label: "03 / ENGINEERED FOR PRECISION",
    intro:
      "A breakdown of the autonomous systems, AI vision, and selective pumping technology that powers AquaFalcon.",
    items: [
      {
        index: "01",
        title: "Intelligent navigation",
        body: "Pixhawk autopilot with GPS & IMU. Enables fully autonomous waypoint tracking and precise path planning.",
      },
      {
        index: "02",
        title: "AI-powered detection",
        body: "Raspberry Pi 4 running OpenCV. Real-time AI distinguishes oil from water to target specific cleanup zones.",
      },
      {
        index: "03",
        title: "Selective extraction",
        body: "Peristaltic pump + adjustable divider.",
      },
      {
        index: "04",
        title: "Stable catamaran hull",
        body: "Twin-pontoon design for rough water stability. 12V DC thrusters.",
      },
    ],
  },

  traction: {
    label: "04 / TRACTION",
    stats: [
      { value: "20 hrs", caption: "of mission testing completed" },
      { value: "500 mL", caption: "of oil collected" },
    ],
    media: {
      video: {
        title: "Gen-1 demo",
        platform: "YouTube",
        youtubeId: "rJCB9pZlat0",
        href: "https://www.youtube.com/watch?v=rJCB9pZlat0",
      },
      post: {
        title: "Gen-2 updated image model",
        platform: "X",
        handle: "@aymnmohdd",
        href: "https://x.com/aymnmohdd/status/2097718585225552136",
      },
    },
  },

  market: {
    label: "05 / MARKET",
    value: "$183B",
    caption:
      "global oil spill management market by 2030, growing at 3.3% CAGR due to stricter global regulations and ESG pressure.",
    source: sources.market,
    columns: [
      {
        title: "The gap",
        body: "current methods are manual and slow (4–12 hours delay). Existing robots are built for trash, not oil.",
      },
      {
        title: "The niche",
        body: "AquaFalcon is the only USV specialized for oil recovery in open-water conditions.",
      },
    ],
  },

  contact: {
    label: "06 / CONTACT",
    title: "Talk to the builder.",
    details: [
      { term: "Name", value: "Ayman Mohammed" },
      { term: "Location", value: "Dubai, UAE" },
      { term: "Email", value: "aymanshsm@gmail.com", href: "mailto:aymanshsm@gmail.com" },
      { term: "Website", value: "aymnmohd.me", href: PERSONAL_SITE, external: true },
      { term: "LinkedIn", value: "linkedin.com/in/aymnmohd", href: "https://linkedin.com/in/aymnmohd", external: true },
      { term: "GitHub", value: "github.com/Aymn-Mohd", href: "https://github.com/Aymn-Mohd", external: true },
    ] as { term: string; value: string; href?: string; external?: boolean }[],
    cta: { label: "Visit aymnmohd.me", href: PERSONAL_SITE },
  },

  footer: {
    links: [
      { label: "aymnmohd.me", href: PERSONAL_SITE },
      { label: "LinkedIn", href: "https://linkedin.com/in/aymnmohd" },
      { label: "GitHub", href: "https://github.com/Aymn-Mohd" },
    ],
    sourcesLabel: "Sources",
    sources: Object.values(sources) as Source[],
  },
} as const;
