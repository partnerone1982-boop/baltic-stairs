import { spiralProjects } from "../data/spiralProjects";
import MonokosourProjectPreviews from "./MonokosourProjectPreviews";
import WorkPreviewGrid from "./WorkPreviewGrid";
import { indoorProjectGroups } from "../data/indoorProjects";
import Link from "next/link";
import { frames } from "../data/products";
import { frameDetails } from "../data/frameDetails";
import Configurations from "./Configurations";
import { InfoSection, FutureGallery, FrameLinks, RequestSection, sectionClass, ctaClass } from "./DetailSections";
export default function FramePage({ frame }: { frame: (typeof frames)[number] }) {
 const detail = frameDetails[frame.id];
 const projectGroup = indoorProjectGroups.find(group => group.id === (frame.id === "listovye-kosoury" ? "sheet" : frame.id === "lomanye-kosoury" ? "broken" : ""));
 return <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">
  <section className={sectionClass}>
    <Link href="/#catalog" className="text-zinc-600 underline underline-offset-4">Все типы металлических каркасов</Link>
    <h1 className="mt-8 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{frame.title}</h1>
    <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">{frame.description}</p>
    <p className="mt-5 max-w-3xl leading-7 text-zinc-600">Размеры, материалы ступеней и ограждений согласуем при обсуждении проекта. Расскажите о помещении и пожеланиях — поможем подобрать конструкцию.</p>
    <Link href="#request" className={ctaClass}>Рассчитать стоимость</Link>
  </section>
 {projectGroup ? (
  <section id="works" className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">Реализованные проекты: {projectGroup.title.toLowerCase()}</h2><WorkPreviewGrid projects={projectGroup.projects} /><Link href={`/works#catalog-${projectGroup.id}`} className={`${ctaClass} max-w-full justify-center text-center`}>{projectGroup.id === "sheet" ? "Смотреть все работы на листовых косоурах" : "Смотреть все работы на ломаных косоурах"}</Link></section>
) : frame.id === "monokosour" ? (
  <MonokosourProjectPreviews includeOriginal />

) : frame.id === "vintovye-lestnicy" ? (
  <section id="works" className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">Реализованные проекты винтовых лестниц</h2><WorkPreviewGrid projects={spiralProjects} /><Link href="/works#catalog-spiral" className={`${ctaClass} max-w-full justify-center text-center`}>Смотреть все винтовые лестницы</Link></section>
) : (
  <FutureGallery title="Примеры каркасов этого типа" />
)} 

  <InfoSection title="Особенности и преимущества" items={detail.features} />
  <InfoSection title="Где применяется" items={detail.application} />
  <InfoSection title="Варианты исполнения" items={detail.variants} />
  {frame.id !== "vintovye-lestnicy" && <div className={sectionClass}><Configurations compact /></div>}
  <div className={sectionClass}><Link href="/stupeni-i-otdelka" className="underline underline-offset-4">Деревянные ступени и отделка →</Link></div>
 
  <RequestSection frameId={frame.id} context={frame.title} />
  <FrameLinks exclude={frame.id} />
  <nav aria-label="По назначению" className={`${sectionClass} flex flex-wrap gap-6`}><Link className="underline underline-offset-4" href="/indoor">Внутренние лестницы</Link><Link className="underline underline-offset-4" href="/outdoor">Наружные лестницы</Link></nav>
 </main>;
}
