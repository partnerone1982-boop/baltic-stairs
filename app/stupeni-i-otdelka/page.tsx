import WoodPhotos from "../components/WoodPhotos";
import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { sectionClass, ctaClass, FrameLinks } from "../components/DetailSections";
import EstimateForm from "../components/EstimateForm";
export const metadata = pageMetadata("/stupeni-i-otdelka");
const sections = [
 ["Собственное изготовление ступеней", "Деревянные ступени изготавливаем сами по индивидуальным размерам. Работаем с дубом, ясенем, буком, лиственницей и сосной. Подбираем материал под внешний вид лестницы, нагрузку и бюджет."],
 ["Внешний вид и отделка", "Для отделки деревянных ступеней используем профессиональные материалы Sirca: тонировочные составы и лак, а также масло. Цвет подбираем по палитре Sirca, а при необходимости — по образцу заказчика, под пол, двери, мебель или другие элементы интерьера. После согласования оттенка выполняем финишную отделку: тонировка + лак или покрытие маслом."],
 ["Поручни и ограждения", "Подбираем поручни и ограждения под конструкцию лестницы и интерьер. Согласуем комплектацию, узлы крепления и монтаж вместе со ступенями."],
 ["Металлический каркас + ступени", "Можно заказать металлический каркас вместе с изготовлением и установкой деревянных ступеней. Размеры элементов и крепления согласуем в одном проекте; состав работ и отделку уточняем до изготовления."],
];
export default function FinishingPage() {
 return <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">
 <section className={sectionClass}><h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">Деревянные ступени и отделка металлических лестниц</h1><p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">Самостоятельно изготавливаем деревянные ступени по размерам конкретного металлического каркаса. Подбираем отделку и устанавливаем готовые элементы на объектах Санкт-Петербурга и Ленинградской области.</p><Link href="#request" className={ctaClass}>Рассчитать лестницу со ступенями</Link></section>
 {sections.map(([title,text])=><section key={title} className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">{title}</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-600">{text}</p>{title === "Внешний вид и отделка" && <><p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-600">Если в стандартной палитре нет подходящего оттенка, можем совместно с заказчиком подобрать и изготовить у наших партнёров индивидуальный цвет под интерьер или образец.</p><Link href="/cveta-stupeney" className={ctaClass}>Выбрать цвет ступеней</Link></>}</section>)}
 <section className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">Лестница под ключ</h2><ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Замер", "Проектирование", "Изготовление каркаса", "Изготовление ступеней", "Отделка", "Монтаж"].map((step,index)=><li key={step} className="rounded-2xl border border-[#c4ac70] bg-white p-6"><span className="mr-3 text-[#967020]">0{index+1}</span>{step}</li>)}</ol></section>
 <section className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">Фотографии ступеней и отделки</h2><WoodPhotos /></section>
 <section id="request" className={sectionClass}><div className="rounded-3xl bg-white p-6 md:p-10"><h2 className="text-3xl font-semibold">Рассчитать лестницу со ступенями</h2><EstimateForm context="Деревянные ступени и отделка" finishingOptions /><address className="mt-8 not-italic leading-8"><a href="tel:+78129206840" className="font-semibold underline underline-offset-4">+7 (812) 920-68-40</a><p>п. Щеглово, ул. Испытателей, 14</p></address></div></section>
 <FrameLinks />
 </main>;
}
