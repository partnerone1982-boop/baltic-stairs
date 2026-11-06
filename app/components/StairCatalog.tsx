import Image from "next/image";
import Link from "next/link";
import { frames } from "../data/products";

const photographs: Record<string, { image: string; alt: string; position: string }> = {
  monokosour: {
    image: "/images/monokosour-frame.jpeg",
    alt: "Металлический каркас Baltic Stairs на одном центральном косоуре",
    position: "60% 45%",
  },
  "listovye-kosoury": {
    image: "/images/sheet-stringers-frame.jpg",
    alt: "Каркас Baltic Stairs с боковыми косоурами из листового металла",
    position: "50% 50%",
  },
  "lomanye-kosoury": {
    image: "/images/broken-stringers-frame.jpg",
    alt: "Каркас Baltic Stairs на ломаных косоурах из профильной трубы",
    position: "55% 45%",
  },
  "vintovye-lestnicy": {
    image: "/images/spiral-frame.jpg",
    alt: "Винтовой металлический каркас Baltic Stairs с центральной опорой",
    position: "50% 65%",
  },
};

const startingPrices: Record<string, string> = {
  monokosour: "55 000",
  "listovye-kosoury": "40 000",
  "lomanye-kosoury": "50 000",
  "vintovye-lestnicy": "65 000",
};

// Use the same assortment as the detail pages and estimate form.
const categories = frames.map((frame) => ({ ...frame, ...photographs[frame.id] }));

export default function StairCatalog() {
  return (
    <div className="mt-10">
    <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {categories.map((category) => (
        <article key={category.id} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d2c6]">
            <Image
              src={category.image}
              alt={category.alt}
              fill
              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 50vw, 290px"
              className="object-cover"
              style={{ objectPosition: category.position }}
            />
          </div>
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="min-h-14 text-xl font-semibold leading-7">{category.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{category.description}</p>
            <Link href={category.href} aria-label={`Подробнее: ${category.title}`} className="mt-1 inline-flex min-h-11 w-fit items-center rounded-sm text-sm font-semibold underline underline-offset-4 transition hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
              Подробнее →
            </Link>
            <div className="mt-auto pt-3">
              <p className="whitespace-nowrap text-3xl font-bold tracking-tight">
                от {startingPrices[category.id]} ₽
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">За металлический каркас</p>
            </div>
            <a href="#contact" className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1f1f1f] px-4 py-3 text-center font-bold text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
              Рассчитать стоимость
            </a>
          </div>
        </article>
      ))}
    </div>
    <p className="mt-5 max-w-4xl text-sm leading-6 text-zinc-600">
      Цены указаны за металлические каркасы без ступеней, ограждений, доставки и монтажа. Итоговая стоимость зависит от размеров и конструкции лестницы
    </p>
    </div>
  );
}
