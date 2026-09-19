import { pageMetadata } from "./lib/seo";
export const metadata = pageMetadata("/");
import FinishingIntro from "./components/FinishingIntro";
import Configurations from "./components/Configurations";
import FrameCards from "./components/FrameCards";
import SocialLinks from "./components/SocialLinks";
import WorkSteps from "./components/WorkSteps";
import Link from "next/link";
import WorkGallery from "./components/WorkGallery";
import Image from "next/image";
import EstimateForm from "./components/EstimateForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#1f1f1f]">


      <section className="relative isolate overflow-hidden text-white" aria-labelledby="hero-title">
        <Image
          src="/images/stair-2.jpeg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[center_55%] brightness-110 contrast-115"
          unoptimized
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,9,11,0.55)_0%,rgba(9,9,11,0.3)_45%,rgba(9,9,11,0.05)_75%,rgba(9,9,11,0)_100%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-200">
          Собственное производство
        </p>

        <h1 id="hero-title" className="mt-8 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Металлические лестницы под заказ
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-100">
          Проектируем, изготавливаем и устанавливаем внутренние и наружные
          лестницы для частных домов, коммерческих объектов и производственных
          помещений.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#catalog"
            className="rounded-xl bg-white px-7 py-4 font-bold text-black"
          >
            Смотреть типы каркасов
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/50 bg-black/30 px-7 py-4 font-bold transition hover:bg-black/50"
          >
            Получить расчет
          </a>
          <Link href="/callback" className="rounded-xl border border-white/50 bg-black/30 px-7 py-4 font-bold transition hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Заказать звонок
          </Link>
        </div>
        </div>
      </section>

      <section
        id="catalog"
        className="border-y border-black/10 bg-[#ebe5d9]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">
            Что мы производим
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Типы металлических каркасов</h2>

          <FrameCards />
          <Configurations photoCards />
        </div>
      </section>

      <section id="works" aria-labelledby="works-title" className="border-t border-black/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Примеры изделий</p>
          <h2 id="works-title" className="mt-4 text-4xl font-bold">Наши работы</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Металлические лестницы и ограждения для дома. Посмотрите детали конструкций на фотографиях с объектов.
          </p>
          <WorkGallery />
          <Link href="/works" className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-[#1f1f1f] px-7 py-4 font-bold text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            Смотреть все работы →
          </Link>
        </div>
      </section>
      <section className="border-t border-black/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Наши преимущества</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Почему выбирают нас</h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Собственное производство", "Изготавливаем металлические конструкции на своём производстве."],
              ["Под ваш проём", "Проектируем лестницу под размеры и особенности конкретного объекта."],
              ["Лестница под ключ", "Каркас, ступени, ограждения, покраска и монтаж в одном заказе."],
              ["Реальные работы", "Показываем фотографии лестниц и конструкций с выполненных объектов."],
              ["Понятная стоимость", "Согласовываем состав работ и стоимость до начала изготовления."],
              ["Монтаж нашей командой", "Устанавливаем изготовленные лестницы своими монтажниками."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#f1f1f1] p-7 md:p-8">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinishingIntro />
      <WorkSteps />

      <section id="contact" className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-white p-8 text-black md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-600">
              Бесплатный предварительный расчет
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
              Нужна лестница?
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-zinc-600">
              Расскажите, какая лестница вам нужна. Рассчитаем ориентировочную
              стоимость и предложим подходящую конструкцию.
            </p>

            <EstimateForm />

            <h3 className="mt-10 text-2xl font-semibold">Контакты</h3>
            <address className="mt-4 text-lg not-italic text-zinc-600">
              п. Щеглово, ул. Испытателей, 14
            </address>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { href: "tel:+78129206840", label: "+7 (812) 920-68-40" },
              ].map((phone) => (
                <a key={phone.href} href={phone.href} className="group flex items-center gap-3 rounded-2xl p-2 transition hover:bg-[#f4f0e7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                  <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25a85a] text-white shadow-sm transition group-hover:scale-105 sm:h-16 sm:w-16">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
                    </svg>
                  </span>
                  <span className="text-base leading-7 text-[#1f1f1f] sm:text-lg">
                    <span className="block text-zinc-600">Позвонить</span>
                    <span className="block whitespace-nowrap font-semibold">{phone.label}</span>
                  </span>
                </a>
              ))}
            </div>
            <SocialLinks />
            <div className="mt-10">
              <h3 className="text-2xl font-semibold">Как нас найти</h3>
              <iframe
                title="Яндекс Карта — п. Щеглово, ул. Испытателей, 14"
                src="https://yandex.ru/map-widget/v1/?ll=30.766423%2C60.019929&z=16&pt=30.766423%2C60.019929%2Cpm2rdm&l=map"
                loading="lazy"
                allowFullScreen
                className="mt-5 h-80 w-full rounded-2xl border border-black/10 md:h-[420px]"
              />
              <a
                href="https://yandex.ru/maps/?rtext=~60.019929%2C30.766423&rtt=auto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center rounded-xl border border-black/20 px-7 py-4 font-bold transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                Построить маршрут в Яндекс Картах
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-600">
          © Завод Балтийских Лестниц
        </div>
      </footer>
    </main>
  );
}