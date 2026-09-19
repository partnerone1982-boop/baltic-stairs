import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workCatalog } from "../../data/workCatalog";
import { projectGalleries } from "../../components/projectGalleries";
import { siteName, siteUrl } from "../../lib/seo";

const projects = workCatalog.flatMap(group => group.projects);
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(project => ({ slug: project.id }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  if (!project) notFound();
  return { title: `${project.title} — ${siteName}`, alternates: { canonical: `${siteUrl}/works/${slug}` } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  const entry = projectGalleries.find(item => item.id === slug);
  if (!project || !entry) notFound();
  const Gallery = entry.Gallery;
  return <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <Link href="/works" className="text-zinc-600 underline underline-offset-4">← Все работы</Link>
      <h1 className="sr-only">{project.title}</h1>
      <Gallery />

        <section className="mt-16 border-t border-zinc-300 pt-10 pb-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Понравилась такая лестница?</h2>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Рассчитаем похожую конструкцию под размеры вашего помещения.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link href="/#request" className="rounded-xl bg-zinc-900 px-6 py-4 font-semibold text-white">
              Рассчитать стоимость
            </Link>
            <Link href="/works" className="underline underline-offset-4">
              ← Смотреть другие работы
            </Link>
          </div>
        </section>
    </div>
  </main>;
}
