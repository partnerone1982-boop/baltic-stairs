import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "../lib/seo";
import { RequestSection, sectionClass, ctaClass } from "../components/DetailSections";

export const metadata = pageMetadata("/tehnicheskie-lestnicy");

export default function TechnicalStairsPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">
      <section className={sectionClass}>
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Лестницы на заказ</p>
        <h1 className="mt-8 max-w-4xl text-4xl font-normal leading-tight md:text-6xl">Технические металлические лестницы</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">Изготавливаем металлические технические лестницы по индивидуальным размерам объекта. Возможны наружные и внутренние конструкции, площадки, ограждения и другие элементы в зависимости от задачи.</p>
        <Link href="#request" className={ctaClass}>Рассчитать техническую лестницу</Link>
      </section>
      <section className={sectionClass}>
        <h2 className="text-2xl font-semibold md:text-3xl">Реализованные проекты</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link href="/works/technical-staircase-3" className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#c4ac70]">
          <Image
  src="/images/works/technical-staircase-3/general-view.webp"
  alt="Наружная техническая лестница"
  width={900}
  height={1200}
  className="mb-4 h-56 w-full rounded-xl object-cover"
/>
            <h3 className="text-xl font-semibold">Наружная техническая лестница</h3>
            <p className="mt-3 leading-7 text-zinc-600">Металлическая наружная лестница с площадкой, ограждениями и навесом над входом.</p>
            <span className="mt-4 block text-[#967020]">Посмотреть фотографии →</span>
          </Link>
          
         <Link href="/works/technical-staircase" className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#c4ac70]">
           <Image
  src="/images/works/technical-staircase/general-view.webp"
  alt="Техническая лестница"
  width={900}
  height={1200}
  className="mb-4 h-56 w-full rounded-xl object-cover"
/> 
            <h3 className="text-xl font-semibold">Техническая лестница</h3>
            <p className="mt-3 leading-7 text-zinc-600">Металлическая техническая лестница, изготовленная по индивидуальным размерам объекта.</p>
            <span className="mt-4 block text-[#967020]">Посмотреть фотографии →</span>
          </Link>

          <Link href="/works/technical-staircase-4" className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#c4ac70]">
            <Image src="/images/works/technical-staircase-4/general-view.jpg" alt="Наружная техническая лестница с площадками" width={1200} height={1600} sizes="(max-width: 767px) 100vw, 50vw" className="mb-4 h-56 w-full rounded-xl object-cover" />
            <h3 className="text-xl font-semibold">Наружная техническая лестница с площадками</h3>
            <p className="mt-3 leading-7 text-zinc-600">Металлическая техническая лестница с площадками и ограждениями.</p>
            <span className="mt-4 block text-[#967020]">Посмотреть фотографии →</span>
          </Link>

          <Link href="/works/technical-staircase-5" className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#c4ac70]">
            <Image src="/images/works/technical-staircase-5/general-view.jpg" alt="Внутренняя техническая лестница" width={1600} height={718} sizes="(max-width: 767px) 100vw, 50vw" className="mb-4 h-56 w-full rounded-xl object-cover" />
            <h3 className="text-xl font-semibold">Внутренняя техническая лестница</h3>
            <p className="mt-3 leading-7 text-zinc-600">Металлическая техническая лестница с площадками и ограждениями.</p>
            <span className="mt-4 block text-[#967020]">Посмотреть фотографии →</span>
          </Link>
        </div>
        <Link href="/works#catalog-technical" className={`${ctaClass} max-w-full justify-center text-center`}>Смотреть все технические лестницы</Link>
      </section>
      <RequestSection context="Техническая лестница" />
    </main>
  );
}
