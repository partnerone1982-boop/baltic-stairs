import Image from "next/image";
const works = [
  {
    src: "/images/stair-1.jpeg",
    title: "Прямая лестница с металлическим ограждением",
    description: "Металлический каркас и ограждение с геометрическим рисунком. Ступени на фото закрыты защитной плёнкой.",
    width: 1024, height: 768,
  },
  {
    src: "/images/stair-2.jpeg",
    title: "Лестница с деревянными ступенями",
    description: "Поворотная конструкция на металлическом каркасе с деревянными ступенями и металлическим ограждением.",
    width: 980, height: 1280,
  },
];

export default function WorkGallery() {
  const Heading = "h3";
  return (
    <>
    <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
      {works.map((work) => (
        <figure key={work.src} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
          <a href={work.src} target="_blank" rel="noopener noreferrer" aria-label={`Открыть фото: ${work.title} (новая вкладка)`} className="group block focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black">
            <Image src={work.src} alt={work.title} width={work.width} height={work.height} sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 616px" className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:brightness-105" />
          </a>
          <figcaption className="p-6">
            <Heading className="text-xl font-semibold">{work.title}</Heading>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{work.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
    </>
  );
}
