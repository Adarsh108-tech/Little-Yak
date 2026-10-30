import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://little-yak.onataste.fr"),
  title: "Little Yak | Restaurant Tibétain Artisanal à Paris 4e (Châtelet - Beaubourg)",
  description:
    "Découvrez Little Yak au 61 Rue Quincampoix (Paris 4e) : momos faits maison pliés minute, nouilles réconfortantes, spécialités himalayennes et thé au beurre salé dans une authentique cave voûtée en pierre près du Centre Pompidou.",
  keywords: [
    "Little Yak",
    "restaurant tibétain Paris",
    "momos Paris",
    "cuisine tibétaine",
    "restaurant Châtelet",
    "restaurant Marais",
    "cave voûtée Paris",
    "nourriture tibétaine",
    "Laphing Paris",
    "tsampa Paris",
  ],
  openGraph: {
    title: "Little Yak - Restaurant Tibétain à Paris 4e",
    description:
      "Momos traditionnels faits main, bouillons de 8 heures et ambiance intime dans une cave voûtée historique au cœur de Paris.",
    url: "https://little-yak.onataste.fr",
    siteName: "Little Yak Paris",
    images: [
      {
        url: "/images/1-little-yak.jpg",
        width: 1200,
        height: 630,
        alt: "Little Yak - Cave Voûtée et Restaurant Tibétain",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Yak Paris - Restaurant Tibétain & Népalaise",
    description:
      "Momos artisanaux, plats réconfortants et cadre unique dans une cave voûtée près du Centre Pompidou.",
    images: ["/images/1-little-yak.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Little Yak",
    alternateName: "གཡག་ཆུང་།",
    image: "https://little-yak.onataste.fr/images/1-little-yak.jpg",
    "@id": "https://little-yak.onataste.fr",
    url: "https://little-yak.onataste.fr",
    telephone: "+33 1 88 48 09 70",
    priceRange: "€€",
    servesCuisine: ["Tibetan", "Nepalese", "Asian", "Himalayan"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "61 Rue Quincampoix",
      addressLocality: "Paris",
      postalCode: "75004",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8617081,
      longitude: 2.3506894,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "380",
      bestRating: "5",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "12:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "18:30",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Sunday"],
        opens: "12:00",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "12:00",
        closes: "23:00",
      },
    ],
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#121110] text-[#FAF7F2] font-sans selection:bg-[#D97706] selection:text-white">
        {children}
      </body>
    </html>
  );
}
