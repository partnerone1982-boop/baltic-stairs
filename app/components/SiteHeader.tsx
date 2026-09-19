"use client";
import Link from "next/link";
import { useRef, useState } from "react";
const links = [
                  { href: "/", label: "Главная" },
                  { href: "/indoor", label: "Внутренние лестницы" },
                  { href: "/outdoor", label: "Наружные лестницы" },
                  { href: "/tehnicheskie-lestnicy", label: "Технические лестницы" },
                  { href: "/works", label: "Наши работы" },
                  { href: "/#contact", label: "Контакты" },
                ];
export default function SiteHeader() {
 const [open, setOpen] = useState(false);
 const toggleRef = useRef<HTMLButtonElement>(null);
 return (
<header onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); } }} className="border-b border-black/10 bg-[#f4f0e7] text-[#1f1f1f]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4 sm:gap-6 sm:py-6">
            <Link href="/" className="min-w-0 flex-1 rounded-sm sm:flex-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
              <span className="block text-base font-bold tracking-wide sm:text-xl">
                ЗАВОД БАЛТИЙСКИХ ЛЕСТНИЦ
              </span>
              <span className="mt-1 hidden text-sm sm:block text-zinc-600">
                Санкт-Петербург и Ленинградская область
              </span>
            </Link>
            <Link href="/#contact" className="hidden rounded-xl bg-[#1f1f1f] px-6 py-4 text-center font-bold text-white transition sm:inline-block hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
              Рассчитать стоимость
            </Link>
            <button ref={toggleRef} type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 sm:hidden">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d={open ? "M6 6l12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
            <nav id="mobile-menu" aria-label="Мобильное меню" hidden={!open} className="w-full border-t border-black/10 pt-3 sm:hidden">
              {links.map(({href,label}) => <Link key={label} href={href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-sm text-sm font-medium focus-visible:outline-2">{label}</Link>)}
              <Link href="/#contact" onClick={() => setOpen(false)} className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-[#1f1f1f] px-4 py-3 font-bold text-white">Рассчитать стоимость</Link>
            </nav>
            <nav aria-label="Основное меню" className="hidden w-full sm:block">
              <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-2">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href} className="inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-zinc-700 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
 );
}
