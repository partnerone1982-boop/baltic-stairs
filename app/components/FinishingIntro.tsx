import Link from "next/link";
import { ctaClass } from "./DetailSections";
export default function FinishingIntro() {
 return <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
 <h2 className="text-3xl font-bold md:text-4xl">Деревянные ступени и отделка лестниц</h2>
 <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-600">Изготавливаем деревянные ступени по индивидуальным размерам для металлических лестниц. Подбираем внешний вид и отделку под интерьер и устанавливаем готовые элементы на каркас.</p>
 <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Деревянные ступени", "Поручни и ограждения", "Покраска и отделка", "Лестница под ключ"].map(title=><article key={title} className="rounded-2xl border border-[#c4ac70] bg-white p-6"><h3 className="text-xl font-semibold">{title}</h3></article>)}</div>
 <Link href="/stupeni-i-otdelka" className={ctaClass}>Подробнее о ступенях и отделке</Link>
 </section>;
}
