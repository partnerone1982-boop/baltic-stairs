import Image from "next/image";
import { additionalWorkProjects } from "../data/additionalWorkProjects";

export default function AdditionalWorkGallery({ project }: { project: (typeof additionalWorkProjects)[number] }) {
  return (
    <section id={project.id} aria-labelledby={`${project.id}-title`} className="mt-12">
      <h2 id={`${project.id}-title`} className="text-2xl font-semibold md:text-3xl">{project.title}</h2>
      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        {project.photos.map(photo => (
          <figure key={photo.src} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <a href={photo.src} target="_blank" rel="noopener noreferrer" className="block aspect-[3/4] overflow-hidden transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black" aria-label={`${photo.alt} — открыть фотографию в новой вкладке`}>
              <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1280px) calc((100vw - 72px) / 2), 604px" className="h-full w-full object-cover" />
            </a>
            <figcaption className="p-6 font-semibold">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
