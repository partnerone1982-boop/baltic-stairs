import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata("/indoor");
import Link from "next/link";
import IndoorWorks from "../components/IndoorWorks";
import WorkSteps from "../components/WorkSteps";
import Configurations from "../components/Configurations";
import { InfoSection, FrameLinks, RequestSection, sectionClass, ctaClass } from "../components/DetailSections";
export default function IndoorPage() {
 return <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">
  <section className={sectionClass}><p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Лестницы на заказ</p><h1 className="mt-8 max-w-4xl text-4xl font-normal leading-tight md:text-6xl">Внутренние металлические лестницы</h1><p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">Лестницы, которые становятся частью дома. Проектируем, изготавливаем и устанавливаем конструкции внутри частных домов, коммерческих и других помещений. Индивидуальный проект под интерьер и пространство вашего объекта.</p><Link href="#request" className={ctaClass}>Рассчитать стоимость</Link></section>
  <InfoSection title="Особенности внутренних лестниц" items={["Учитываем размеры проёма, высоту между этажами, расположение дверей и свободное пространство над маршем.", "Подбираем ступени, поручни и ограждения под интерьер и ежедневное использование.", "Согласуем опорные узлы, примыкания к отделке и последовательность монтажа с учётом готовности помещения."]} />
  <FrameLinks />
  <div className={sectionClass}><Configurations compact /></div>
  <InfoSection title="Почему выбирают нас" items={["Собственное производство. Изготавливаем металлические каркасы лестниц и ограждений, деревянные ступени и поручни.", "Индивидуальный проект. Проектируем лестницу под размеры и особенности вашего дома.", "Монтаж под ключ. Замер, изготовление, доставка и монтаж одной командой."]} />
  <WorkSteps compact />
  <IndoorWorks />
  <RequestSection context="Внутренняя лестница" />
  <div className={sectionClass}><Link href="/outdoor" className="text-lg underline underline-offset-4">Нужна лестница на улице? Наружные лестницы →</Link></div>
 </main>;
}
