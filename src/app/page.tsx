import Hero from "./home/hero";
import Intro from "./home/intro";

export function generateMetadata() {
  const metaTags = {
    title: "Ondek alles over A24",
    description: "Ondek alles over A24",
    openGraph: {
      title: "Ondek alles over A24",
      description: "Ondek alles over A24",
      images: ["seo.cover"],
    },
    alternates: {
      canonical: "/",
    },
    other: {
      tags: ["A24", "Films", "series"],
      keywords: ["A24", "Film", "series"],
    },
  };
  return metaTags;
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
    </main>
  );
}
