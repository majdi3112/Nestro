/** Official PDF — source of truth for prices, allergens and exact dishes */
export const MENU_PDF_URL =
  "https://nestogent.be/wp-content/uploads/2026/01/MENU-NESTO-final.pdf";

/**
 * Structured overview for the web page (geen prijzen: die staan enkel in het PDF).
 * Afgestemd op hoe nesto zichzelf beschrijft: ontbijt, brunch, lunch, dranken, zoet.
 */
export const MENU_SECTIONS = [
  {
    title: "Ontbijt",
    description: "Verse ontbijtjes om de dag rustig te starten — warm en koud.",
    examples: ["Granola & yoghurt", "Seizoensfruit", "Klassieke ontbijtjes"],
  },
  {
    title: "Brunch",
    description: "All day brunch: hartig en zoet, om te delen of in je eentje te genieten.",
    examples: ["Eggs & meer", "Zoete brunch", "Seizoensaanraders"],
  },
  {
    title: "Lunch & lichte hapjes",
    description: "Lichte lunch en makkelijke gerechten voor door de week.",
    examples: ["Broodjes & salades", "Soepen", "Dagschotels"],
  },
  {
    title: "Koffie, thee & dranken",
    description: "Koffie, thee, chocolademelk, limonades en frisse dranken.",
    examples: ["Espresso & cappuccino", "Thee", "Limonades"],
  },
  {
    title: "Zoetigheden",
    description: "Gebak en zoete afsluiters — perfect bij een koffie of brunch.",
    examples: ["Taarten & cakes", "Seizoensgebak"],
  },
];
