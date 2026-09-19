import Link from "next/link";
import EstimateForm from "./EstimateForm";
import { frames } from "../data/products";
export const sectionClass = "mx-auto max-w-7xl px-6 py-6 md:py-8";
export const ctaClass = "mt-8 inline-flex rounded-xl bg-[#1f1f1f] px-7 py-4 font-bold text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";
export function InfoSection({ title, items }: { title: string; items: string[] }) {
 return <section className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">{title}</h2><ul className="mt-6 grid gap-4 md:grid-cols-3">{items.map(item=><li key={item} className="rounded-2xl border border-[#c4ac70] bg-white p-6 leading-7 text-zinc-600">{item}</li>)}</ul></section>;
}
export function FutureGallery({ title }: { title: string }) {
 return <section id="works" className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">{title}</h2><div className="mt-6 rounded-2xl border border-dashed border-[#c4ac70] bg-white/60 px-6 py-12 text-center"><p className="font-semibold">Галерея реальных изделий</p><p className="mt-3 text-zinc-600">Фотографии выполненных проектов добавим в этот раздел.</p></div></section>;
}
export function FrameLinks({ exclude }: { exclude?: string }) {
 return <section className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">{exclude ? "Другие типы металлических каркасов" : "Варианты металлического каркаса"}</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{frames.filter(f=>f.id!==exclude).map(f=><Link key={f.id} href={f.href} className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#c4ac70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"><h3 className="text-xl font-semibold">{f.title}</h3><p className="mt-3 leading-7 text-zinc-600">{f.description}</p><span className="mt-4 block text-[#967020]">Подробнее →</span></Link>)}</div></section>;
}
export function RequestSection({ frameId = "consultation", context = "" }: { frameId?: string; context?: string }) {
 return <section id="request" className={sectionClass}><div className="rounded-3xl bg-white p-6 md:p-10"><h2 className="text-3xl font-semibold">Рассчитать стоимость</h2><EstimateForm initialFrame={frameId} context={context} /><address className="mt-8 not-italic leading-8"><a href="tel:+78129206840" className="font-semibold underline underline-offset-4">+7 (812) 920-68-40</a><p>п. Щеглово, ул. Испытателей, 14</p></address></div></section>;
}
