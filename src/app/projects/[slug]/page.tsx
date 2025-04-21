import Hero from "./hero";
import { mediaItems } from "@/utils/mediaItems";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = mediaItems.find((p) => p.slug === slug);

  const currentIndex = mediaItems.findIndex((p) => p.slug === slug);
  const nextIndex = (currentIndex + 1) % mediaItems.length;
  const prevIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;

  const nextProject = mediaItems[nextIndex];
  const prevProject = mediaItems[prevIndex];

  return (
    <main>
      <Hero
        project={project}
        nextProject={nextProject}
        prevProject={prevProject}
      />
    </main>
  );
}
