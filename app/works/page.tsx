import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata("/works");
import Link from "next/link";
import WorkCatalog from "../components/WorkCatalog";
import LegacyWorkRedirect from "../components/LegacyWorkRedirect";
import { workCatalog } from "../data/workCatalog";


export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Фотографии с объектов</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Наши работы</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">Выберите тип лестницы и проект. Нажмите «Посмотреть проект», чтобы перейти к полной галерее фотографий.</p>
        <LegacyWorkRedirect ids={workCatalog.flatMap(group => group.projects.map(project => project.id))} />
        <WorkCatalog />
        <div className="mt-12 rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Обсудим вашу лестницу</h2>
          <p className="mt-3 text-zinc-600">Расскажите о размерах и пожеланиях — подберём конструкцию для вашего дома.</p>
          <Link href="/#contact" className="mt-6 inline-flex rounded-xl bg-[#1f1f1f] px-7 py-4 font-bold text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Рассчитать стоимость</Link>
        </div>
      </section>
    </main>
  );
}
