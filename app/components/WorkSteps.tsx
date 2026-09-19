const steps = [
  { title: "Заявка", text: "Оставьте заявку на сайте или позвоните нам. Обсудим ваши пожелания, ответим на вопросы и согласуем удобное время замера.", path: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4M12 2v1" },
  { title: "Замер", text: "Снимем размеры на объекте, уточним особенности помещения и обсудим конструкцию, ступени и ограждения. Подготовим расчёт стоимости.", path: "M3 21V3l18 18H3ZM7 17v-5l5 5H7ZM3 7h2M3 11h2M3 15h2" },
  { title: "Договор", text: "Согласуем состав работ, материалы, стоимость и порядок оплаты. Зафиксируем сроки изготовления и монтажа в договоре.", path: "M8 4H5v18h14V4h-3M8 2h8v4H8V2ZM8 10h8M8 14h8M8 18h5" },
  { title: "Проектирование", text: "Разработаем индивидуальный проект лестницы под размеры вашего дома. Согласуем внешний вид, конструкцию и отделку перед изготовлением.", path: "m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10M7.5 4.5l9 5" },
  { title: "Изготовление", text: "Изготовим металлические каркасы лестницы и ограждений, деревянные ступени и поручни. Подготовим детали к установке в согласованные сроки.", path: "M12 8v5l3 2M8 2h8M12 2v3M19 5l2 2M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16" },
  { title: "Монтаж", text: "Согласуем дату, доставим конструкцию и установим лестницу на объекте. Проверим крепления, ограждения и качество выполненных работ.", path: "m14 6 4-4 4 4-4 4-4-4ZM16 8 3 21M3 3l4 1 1 4-2 2-4-4 1-3ZM9 11l11 11 2-2L11 9" },
];

export default function WorkSteps({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-labelledby="work-steps-title" className={`mx-auto max-w-7xl px-6 ${compact ? "py-6 md:py-8" : "py-16 md:py-20"}`}>
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">От идеи до установки</p>
      <h2 id="work-steps-title" className="mt-4 text-3xl font-bold text-[#1f1f1f] md:text-4xl">Наш подход к работе</h2>
      <ol className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="relative rounded-2xl border border-[#c4ac70] bg-white px-6 pb-8 pt-12 text-center shadow-sm">
            <span aria-hidden="true" className="absolute -top-7 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl border border-[#e2d0a2] bg-[#fbf2d9] text-[#967020]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9"><path d={step.path} /></svg>
            </span>
            <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500">ЭТАП 0{index + 1}</p>
            <h3 className="mt-3 text-xl font-bold text-[#1f1f1f]">{step.title}</h3>
            <p className="mt-4 text-base leading-7 text-zinc-600">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
