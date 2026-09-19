import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { sectionClass, ctaClass } from "../components/DetailSections";
import { sircaSeries } from "../data/sirca";
export const metadata = pageMetadata("/cveta-stupeney");
export default function ColorsPage() {
 return <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">
 <section className={sectionClass}><h1 className="text-3xl font-bold leading-tight md:text-5xl">Цвета деревянных ступеней</h1>
 <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-600">Для тонировки деревянных ступеней используем профессиональные материалы Sirca. Цвет выбираем по палитре, а при необходимости выполняем подбор по образцу заказчика — под пол, двери, мебель или другие элементы интерьера. После согласования оттенка выполняем финишную отделку: тонировка + лак или покрытие маслом.</p>
 <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-600">Если в стандартной палитре нет подходящего оттенка, можем совместно с заказчиком подобрать и изготовить у наших партнёров индивидуальный цвет под интерьер или образец.</p></section>
 {sircaSeries.map(series=><section key={series.title} className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">Серия {series.title}</h2>
 {series.title === "TCU 2000" && <p className="mt-5 max-w-4xl leading-7 text-zinc-600">Цвета серии TCU2000 получают смешиванием концентратов серии CTE5000 по соответствующим формулам.</p>}
 <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{series.colors.map(color=><article key={color.code} className="min-w-0 overflow-hidden rounded-2xl border border-[#c4ac70] bg-white">
 <div className="relative h-28 border-b border-dashed border-black/10 bg-[#f4f0e7]"><Image src={color.image} alt={`Sirca ${color.code} — ${color.name}`} fill sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw" className="object-cover" /></div>
 <h3 className="p-4 text-base font-semibold"><span className="block">{color.code}</span><span className="mt-2 block break-words">{color.name}</span></h3>
 </article>)}</div></section>)}
 <section className={sectionClass}><p className="max-w-4xl leading-7 text-zinc-600">Оттенок на экране может отличаться от фактического цвета древесины. Окончательный цвет согласовываем по образцу.</p><Link href="/stupeni-i-otdelka#request" className={ctaClass}>Рассчитать лестницу со ступенями</Link></section>
 </main>;
}
