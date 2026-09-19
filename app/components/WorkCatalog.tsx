import WorkCategoryNavigation from "./WorkCategoryNavigation";
import Image from "next/image";
import Link from "next/link";
import { workCatalog } from "../data/workCatalog";
export default function WorkCatalog() {
 return <><WorkCategoryNavigation categories={workCatalog.map(({ id, title }) => ({ id, title }))} /><div id="project-catalog" className="mt-10 space-y-12">{workCatalog.map(group => <section key={group.id} aria-labelledby={`catalog-${group.id}`}>
 <h2 tabIndex={-1} id={`catalog-${group.id}`} className="scroll-mt-24 text-2xl font-semibold md:scroll-mt-48 md:text-3xl">{group.title}</h2>
 <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{group.projects.map(project => <Link key={project.id} href={`/works/${project.id}`} className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:border-[#c4ac70] focus-visible:outline-2 focus-visible:outline-offset-4">
 <div className="relative h-56 shrink-0"><Image src={project.src} alt={project.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" /></div>
 <div className="flex flex-1 flex-col p-6"><h3 className="text-xl font-semibold">{project.title}</h3><span className="mt-auto pt-4 text-[#967020]">Посмотреть проект →</span></div>
 </Link>)}</div></section>)}</div></>;
}
