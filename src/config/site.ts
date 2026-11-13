// Single source of truth for every word, number, link and source on the site.
// Components read only from here. Copy follows the investor deck
// (AquaFalcon_Investor_final_v2).

export type Source = { label: string; href: string };

export type Stat = {
  value: string;
  caption: string;
  sources: Source[];
};

export type NavItem = { label: string; href: string };

export type CostRow = { label: string; value: string; range: string };

export type CostCase = {
  title: string;
  intro: string;
  total: string;
  range: string;
  notes: string[];
  rows: CostRow[];
  sources: Source[];
};

const PERSONAL_SITE = "https://aymnmohd.me";

// Order here is the footnote numbering used across the page and in the footer.
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
  gemStrike: {
    label: "gCaptain/Reuters, 9 Oct 2026",
    href: "https://gcaptain.com/vessel-struck-by-unknown-projectile-off-uae-coast-amid-surge-in-attacks-ukmto-says/",
  },
  gemBeaches: {
    label: "The National, 23 Oct 2026",
    href: "https://www.thenationalnews.com/news/uae/2026/10/23/umm-al-quwain-beaches-uae-tanker-oil-spill/",
  },
  gemClosures: {
    label: "Gulf News, 31 Oct 2026",
    href: "https://gulfnews.com/uae/uae-oil-spill-how-authorities-are-monitoring-tanker-gem-no-2-and-tracking-the-slick-1.500730284",
  },
  gemWorkers: {
    label: "The National, 13 Nov 2026",
    href: "https://www.thenationalnews.com/news/uae/2026/11/13/hundreds-of-workers-continue-to-clean-oil-spilt-off-the-uae/",
  },
  desalination: {
    label: "Baird Maritime/Reuters, 29 Oct 2026",
    href: "https://www.bairdmaritime.com/security/emergency-services/pollution-control/feature-uae-grapples-with-coastal-oil-spill-as-water-supply-risks-emerge",
  },
  bezengi: {
    label: "gCaptain/Reuters, 12 Aug 2026",
    href: "https://gcaptain.com/oil-spill-from-grounded-shadow-fleet-tanker-could-rival-exxon-valdez/",
  },
  imo: {
    label: "IMO, 11 Nov 2026",
    href: "https://www.imo.org/en/mediacentre/hottopics/pages/middle-east-highlighted-incidents.aspx",
  },
  eia: {
    label: "EIA, 16 Jun 2025",
    href: "https://www.eia.gov/todayinenergy/detail.php?id=65504",
  },
  slickArea: {
    label: "AFP via The Peninsula, 27 Oct 2026",
    href: "https://thepeninsulaqatar.com/article/27/10/2026/experts-warn-of-effects-of-slick-as-oil-seen-on-uae-beach",
  },
  bonn: {
    label: "Bonn Agreement Oil Appearance Code",
    href: "https://www.bonnagreement.org/site/assets/files/17600/ba-oah_part_iii.pdf",
  },
  etkin: {
    label: "Etkin, marine oil spill cleanup cost factors",
    href: "http://www.environmental-research.com/publications/pdf/spill_costs/paper7.pdf",
  },
  raktda2024: {
    label: "RAKTDA, FY 2024",
    href: "https://raktda.com/wp-content/uploads/2025/02/FY-2024-INFOGRAPHIC-2.pdf",
  },
  raktda2025: {
    label: "RAKTDA, 2025 tourism performance",
    href: "https://raktda.com/press-release-ras-al-khaimah-delivers-record-tourism-performance-in-2025-with-1-35m-overnight-visitors/",
  },
  sharjahHotels: {
    label: "Economy Middle East (Sharjah hotels)",
    href: "https://economymiddleeast.com/news/sharjah-hotel-revenues-surpass-212-million-guests-surge-2-1-million-2025/",
  },
  lagoons: {
    label: "The National / Emirates Nature-WWF",
    href: "https://www.thenationalnews.com/news/uae/2024/06/27/uaes-coastal-lagoons-generate-millions-in-revenue-every-year/",
  },
  itopfTip2: {
    label: "ITOPF TIP 2",
    href: "https://www.itopf.org/fileadmin/uploads/itopf/data/Documents/TIPS_TAPS_new/TIP_2_Fate_of_Marine_Oil_Spills.pdf",
  },
  jackup: {
    label: "S&P Global Petrodata, Jan 2025",
    href: "https://www.spglobal.com/energy/en/news-research/latest-news/crude-oil/021725-middle-east-rigs-move-out-of-region-after-aramco-led-slide",
  },
  montara: {
    label: "Montara volume (Asia-Pacific J. Chem. Eng., 2025)",
    href: "https://doi.org/10.1002/apj.3128",
  },
  bp: {
    label: "BP 2018 accounts via SEC",
    href: "https://www.sec.gov/Archives/edgar/data/313807/000162828019003618/R8.htm",
  },
  market: {
    label: "Grand View Research (2024)",
    href: "https://www.grandviewresearch.com/industry-analysis/oil-spill-management-market",
  },
} as const satisfies Record<string, Source>;

const sourceOrder: Source[] = Object.values(sources);

/** Footnote number for a source (1-based, stable across the page). */
export function sourceNumber(s: Source) {
  return sourceOrder.findIndex((x) => x.href === s.href) + 1;
}

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
    { label: "World view", href: "#world-view" },
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
        sources: [sources.economicLoss],
      },
      {
        value: "10K metric tons",
        caption: "spilled annually (tanker + operational spills).",
        sources: [sources.spillVolume],
      },
      {
        value: "4–12 hours",
        caption: "typical delay before cleanup teams can begin operations.",
        sources: [sources.responseDelay],
      },
      {
        value: "252K+",
        caption: "Wildlife lost: 250,000 seabirds, 2,800 sea otters, 22 killer whales.",
        sources: [sources.wildlife],
      },
    ] satisfies Stat[],
    points: [
      { title: "Exponential costs", body: "shoreline cleanup is 100x more expensive." },
      { title: "Time is the enemy", body: "manual response takes hours. Delay = spread." },
      { title: "Compliance crisis", body: "slow response triggers massive fines." },
    ],
  },

  worldView: {
    label: "02 / CURRENT WORLD VIEW",
    lead: {
      date: "9 Oct 2026",
      text: "laden tanker Gem No. 2 struck by a projectile 13 nautical miles off the UAE. Oil reached Umm Al Quwain, Ras Al Khaimah, Ajman and Sharjah beaches.",
      sources: [sources.gemStrike, sources.gemBeaches],
    },
    stats: [
      { value: "35+", caption: "beaches and coastal areas closed or restricted", sources: [sources.gemClosures] },
      { value: "~1,000", caption: "workers still cleaning daily. Some cleanup runs into 2027", sources: [sources.gemWorkers] },
      {
        value: "~2 km",
        caption: "closest the slick came to the Naqa'a desalination plant. Desalination supplies 80%+ of UAE drinking water",
        sources: [sources.desalination],
      },
      {
        value: "2,000+ km²",
        caption: "slick from the grounded tanker Caroline Bezengi off Oman (Aug 2026)",
        sources: [sources.bezengi],
      },
      {
        value: "134",
        caption: "confirmed incidents in Hormuz and the Middle East; 25 seafarer deaths (IMO, 11 Nov 2026)",
        sources: [sources.imo],
      },
      {
        value: "~20M",
        caption: "barrels a day through Hormuz in 2024, about one fifth of world oil use",
        sources: [sources.eia],
      },
    ] satisfies Stat[],
  },

  cost: {
    label: "03 / COST ESTIMATES",
    totalLabel: "Estimated total",
    breakdownLabel: "Mid-case breakdown",
    sourcesLabel: "Sources",
    footnote: "All figures est.",
    cases: [
      {
        title: "What Gem No. 2 cost (est.)",
        intro: "No official cost published. Estimate from mapped slick area and published cleanup cost per tonne.",
        total: "~$200M",
        range: "est., range $51M to $460M",
        notes: ["Catching about a third of the oil at sea in the first hours: ~$45M saved (est., $4M to $155M)."],
        rows: [
          { label: "Government / cleanup", value: "$165M", range: "est., $40M to $365M" },
          { label: "Environment", value: "$10M", range: "est., $2M to $40M" },
          { label: "Public costs", value: "$10M", range: "est., $3M to $25M" },
          { label: "Business lost revenue (hotels, resorts)", value: "$8M", range: "est., $5M to $15M" },
          { label: "Commercial (fishing; ports $0)", value: "$5M", range: "est., $1M to $15M" },
        ],
        sources: [
          sources.slickArea,
          sources.bonn,
          sources.etkin,
          sources.raktda2024,
          sources.raktda2025,
          sources.sharjahHotels,
          sources.lagoons,
          sources.itopfTip2,
        ],
      },
      {
        title: "If it happened at a Gulf rig (est.)",
        intro: "Planning case: a moderate platform spill of 1,000 to 15,000 tonnes; mid case similar to Montara.",
        total: "~$380M",
        range: "est., range $78M to $1.3B",
        notes: [
          "Early at-sea recovery: ~$70M saved (est.). Well control and lost production are not avoided.",
          "Deepwater Horizon cost BP $67B (BP 2018 accounts).",
        ],
        rows: [
          { label: "Government / cleanup", value: "$250M", range: "est., $45M to $900M" },
          {
            label: "Commercial (incl. rig and production)",
            value: "$66M",
            range: "est., $18M to $207M. Jackup ~$102,000/day + 30 days shut-in",
          },
          { label: "Environment", value: "$25M", range: "est., $5M to $100M" },
          { label: "Business lost revenue (hotels, resorts)", value: "$20M", range: "est., $5M to $60M" },
          { label: "Public costs", value: "$15M", range: "est., $5M to $40M" },
        ],
        sources: [sources.etkin, sources.jackup, sources.montara, sources.bp, sources.itopfTip2],
      },
    ] satisfies CostCase[],
  },

  goal: {
    label: "04 / GOAL",
    line: "Cut the cost of oil-spill cleanup and regulatory compliance to a fraction of today's.",
  },

  systems: {
    label: "05 / ENGINEERED FOR PRECISION",
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

  // Gen-1 prototype photos. Files live in public/photos as <name>-640.webp and <name>-1280.webp.
  photosLabel: "Gen-1 prototype in field testing",
  photos: [
    {
      name: "bow-three-quarter",
      width: 1280,
      height: 960,
      caption: "Gen-1 prototype",
      alt: "AquaFalcon Gen-1 prototype on a table: yellow twin hulls, aluminium deck plates, two blue pumps at the bow and a camera mast with ultrasonic sensors.",
    },
    {
      name: "pool-wide",
      width: 1280,
      height: 1707,
      caption: "Pool test",
      alt: "AquaFalcon Gen-1 prototype floating in a test pool, seen from above.",
    },
    {
      name: "pool-top",
      width: 1280,
      height: 1344,
      caption: "On the water",
      alt: "Top-down view of AquaFalcon on the water, showing the Raspberry Pi, M9N GPS module, small display and camera mast.",
    },
    {
      name: "pump-side",
      width: 1280,
      height: 960,
      caption: "Collection bay",
      alt: "Side view of the aluminium collection bay with a bottle and tubing inside, below the camera mast and ultrasonic sensors.",
    },
    {
      name: "thruster-top",
      width: 1280,
      height: 1707,
      caption: "Bow detail",
      alt: "Close-up from above of an aluminium bow guard and blue pump mounted on the yellow hull.",
    },
  ] as { name: string; width: number; height: number; caption: string; alt: string }[],

  traction: {
    label: "06 / TRACTION",
    gen1: {
      label: "Gen-1",
      status: "Complete",
      stats: [
        { value: "100 hrs", caption: "of mission testing completed" },
        { value: "7.5 L", caption: "of oil collected, with only 1 L of water" },
      ],
      video: {
        title: "Gen-1 demo",
        platform: "YouTube",
        youtubeId: "rJCB9pZlat0",
        href: "https://www.youtube.com/watch?v=rJCB9pZlat0",
      },
    },
    gen2: {
      label: "Gen-2",
      status: "In progress",
      items: [
        {
          index: "01",
          title: "Image model: done",
          body: "New model detects the oil-water boundary and segments the oil.",
        },
        {
          index: "02",
          title: "New platform",
          body: "Retrofitting a jet ski as the Gen-2 vehicle.",
        },
      ],
      post: {
        title: "Gen-2 updated image model",
        platform: "X",
        handle: "@aymnmohdd",
        href: "https://x.com/aymnmohdd/status/2097718585225552136",
      },
    },
    builder: "AquaFalcon was designed and built solo by Ayman Mohammed.",
  },

  market: {
    label: "07 / MARKET",
    value: "$183B",
    caption: "global oil spill management market by 2030.",
    source: sources.market,
    columns: [
      {
        title: "The market",
        body: "growing at 3.3% CAGR due to stricter global regulations and ESG pressure.",
      },
      {
        title: "The gap",
        body: "current methods are manual and slow (4–12 hours delay). Existing robots are built for trash, not oil.",
      },
      {
        title: "The niche",
        body: "AquaFalcon is the only USV specialized for oil recovery in open-water conditions.",
      },
    ],
    methods: {
      title: "Existing oil spill response methods",
      headers: ["Method", "Description", "Limitation"],
      rows: [
        ["Manual skimming", "Crewed vessels deploy booms and skimmers.", "Slow, labour-intensive, unsafe in rough seas."],
        ["Chemical dispersants", "Break oil into droplets.", "Toxic, unrecoverable, and environmentally harmful."],
        ["In-situ burning", "Controlled surface combustion.", "Releases CO₂ and pollutants."],
        ["Existing robots", "Harbor USVs (e.g., Clearbot Neo, WasteShark).", "Low endurance, <5 kg capacity, limited range."],
      ],
    },
  },

  contact: {
    label: "08 / CONTACT",
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
    sources: sourceOrder,
  },
} as const;
