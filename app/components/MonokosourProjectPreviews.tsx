import Link from "next/link";
import { sectionClass, ctaClass } from "./DetailSections";
import { monokosourProjects } from "../data/indoorProjects";
import WorkPreviewGrid from "./WorkPreviewGrid";
export default function MonokosourProjectPreviews({ title = "Реализованные проекты на монокосоуре", includeOriginal = false, id }: { title?: string; includeOriginal?: boolean; id?: string }) {
 return <section id={id} className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">{title}</h2><WorkPreviewGrid projects={includeOriginal ? monokosourProjects : monokosourProjects.filter(project => project.id !== "monokosour-3")} /><Link href="/works#catalog-mono" className={`${ctaClass} max-w-full justify-center text-center`}>Смотреть все работы на монокосоуре</Link></section>;
}
