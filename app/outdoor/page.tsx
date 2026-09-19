import WorkPreviewGrid from "../components/WorkPreviewGrid";
import { workCatalog } from "../data/workCatalog";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata("/outdoor");
import Link from "next/link";
import { InfoSection, FrameLinks, RequestSection, sectionClass, ctaClass } from "../components/DetailSections";
export default function OutdoorPage() {
 const projects = workCatalog.find(group => group.id === "outdoor")!.projects.slice(0, 4);
 return <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">
  <section className={sectionClass}><p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Лестницы на заказ</p><h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">Наружные лестницы</h1><p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">Проектируем, изготавливаем и устанавливаем металлические лестницы для частных домов, коммерческих объектов и производственных помещений. Наружные конструкции подбираем для эксплуатации на улице.</p><p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">Расскажите об объекте и необходимых размерах — обсудим конструкцию и рассчитаем ориентировочную стоимость.</p><Link href="#request" className={ctaClass}>Рассчитать стоимость</Link></section>
  <InfoSection title="Особенности эксплуатации на улице" items={["Осадки, перепады температуры и влажность учитываются при выборе материалов и защитного покрытия.", "Для ступеней рассматриваем отвод воды, сцепление обуви с поверхностью и возможность очистки от снега.", "Расположение лестницы, интенсивность использования и условия обслуживания влияют на конструкцию."]} />
  <InfoSection title="Конструкция и защита металла" items={["Сечения несущих элементов, опоры, крепления к зданию и основанию определяются проектом под нагрузки объекта.", "Подготовку поверхности и систему антикоррозионной защиты подбираем с учётом среды и доступа для обслуживания.", "Прорабатываем стыки, водоотвод и защиту полостей профиля. Ограждения и поручни согласуем вместе с лестницей."]} />
  <InfoSection title="Варианты исполнения" items={["Входная лестница или крыльцо с площадкой — с учётом дверного проёма, подхода и основания.", "Маршевая лестница для выхода на другой уровень; прямое или поворотное расположение определяется планировкой участка.", "Ступени и площадки с подходящим для улицы настилом; возможность винтового решения оценивается отдельно."]} />
  <section className={sectionClass}><h2 className="text-2xl font-semibold md:text-3xl">Как выбираем металлический каркас</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-600">Тип каркаса не определяет автоматически пригодность для улицы. Косоуры из листового металла или профильной трубы рассматриваем вместе с расчётом опор, выбором настила и защиты. Монокосоур и винтовой каркас также требуют отдельной оценки конкретного объекта. Окончательное решение принимается по проекту.</p></section>
  <FrameLinks />
  <section id="works" className={sectionClass}>
    <h2 className="text-2xl font-semibold md:text-3xl">Наши работы: наружные лестницы</h2>
    <WorkPreviewGrid projects={projects} />
    <Link href="/works#catalog-outdoor" className={`${ctaClass} max-w-full justify-center text-center`}>Смотреть все наружные лестницы</Link>
  </section>
  <RequestSection context="Наружная лестница" />
  <div className={sectionClass}><Link href="/indoor" className="text-lg underline underline-offset-4">Нужна лестница в помещении? Внутренние лестницы →</Link></div>
 </main>;
}
