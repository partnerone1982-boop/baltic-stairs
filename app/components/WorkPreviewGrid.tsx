import Image from "next/image";
import Link from "next/link";
import type { WorkPreview } from "../data/indoorProjects";
export default function WorkPreviewGrid({ projects, nested = false }: { projects: WorkPreview[]; nested?: boolean }) {
 const Heading = nested ? "h4" : "h3";
 return <div className="mt-6 grid gap-6 md:grid-cols-2">{projects.map(project => <Link key={project.id} href={`/works/${project.id}`} className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#c4ac70]">
   <div className="relative mb-4 h-56 overflow-hidden rounded-xl"><Image src={project.src} alt={project.title} fill sizes="(max-width: 767px) calc(100vw - 96px), 50vw" className="object-cover" /></div>
   <Heading className="text-xl font-semibold">{project.title}</Heading><span className="mt-4 block text-[#967020]">Посмотреть фотографии →</span>
 </Link>)}</div>;
}
