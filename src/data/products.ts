export type ProdcutStatus = "Live" | "In Development" | "Early Access";

export interface Product {
    slug: string;
    name: string;
    description: string;
    status: ProdcutStatus;
}

export const products: Product[] = [
  {
    slug: "find-my-artist",
    name: "Find My Artist",
    description: "Connect artists and creators with collaborators quickly and professionally.",
    status: "In Development",
  },
  {
    slug: "find-my-stylist",
    name: "Find My Stylist",
    description: "Book professional stylists with confidence and clear availability.",
    status: "In Development",
  },
  {
    slug: "ai-document-scanner",
    name: "AI Document Scanner",
    description: "Scan, summarize, and export documents using AI-powered tools.",
    status: "In Development",
  },
];