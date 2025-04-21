import SmoothScrollWrapper from "@/components/smoothScrollWrapper";
import Hero from "./hero";

export function generateMetadata() {
  const metaTags = {
    title: "Projects",
    description: "Ondek alles over A24",
  };
  return metaTags;
}

export default function Projects() {
  return (
    <main>
      <SmoothScrollWrapper>
        <Hero />
      </SmoothScrollWrapper>
    </main>
  );
}
