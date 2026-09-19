import { indoorProjectGroups } from "../data/indoorProjects";
import { sectionClass } from "./DetailSections";
import WorkPreviewGrid from "./WorkPreviewGrid";
export default function IndoorWorks() {
 return <section id="works" className={sectionClass} aria-labelledby="indoor-works-title">
  <h2 id="indoor-works-title" className="text-2xl font-semibold md:text-3xl">Наши работы: внутренние лестницы</h2>
  {indoorProjectGroups.map((group, index) => <section key={group.id} aria-labelledby={`indoor-${group.id}`} className={index === 0 ? "mt-8" : "mt-12 border-t border-black/10 pt-10"}>
    <h3 id={`indoor-${group.id}`} className="text-2xl font-semibold">{group.title}</h3>
    <p className="mt-3 max-w-3xl leading-7 text-zinc-600">{group.description}</p>
    <WorkPreviewGrid projects={group.projects.slice(0, 4)} nested />
    {group.projects.length > 4 && <details className="mt-6"><summary className="w-fit cursor-pointer rounded-xl border border-[#c4ac70] px-6 py-3 font-semibold focus-visible:outline-2">Показать ещё работы</summary><WorkPreviewGrid projects={group.projects.slice(4)} nested /></details>}
  </section>)}
 </section>;
}
