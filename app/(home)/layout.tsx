import type { Metadata } from "next";

const siteName = "Biospark Energy Solutions";
const title = "Biospark Energy Solutions";
const description =
  "Biospark converts organic waste into clean biogas and nutrient-rich biofertilizer. Explore Spark365, community gas hubs, and practical tools for cleaner energy across Nigeria.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Biospark",
    "biogas",
    "biodigester",
    "Spark365",
    "clean cooking",
    "biofertilizer",
    "community gas hub",
    "climate resilience",
    "organic waste",
    "renewable energy Nigeria",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Energy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName,
    title,
    description,
    images: [
      {
        // Place your share image at: public/og.jpg (recommended 1200×630)
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Biospark scientists developing climate-resilient biogas technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
